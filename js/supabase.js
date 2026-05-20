/* =============================================
   INSPIRE FORENSICS — SUPABASE INTEGRATION
   All admin saves + site loads go through here.
   ============================================= */

const SUPABASE_URL  = 'https://nxdhcqbxzvdtjikruafz.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54ZGhjcWJ4enZkdGppa3J1YWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNzEzMzksImV4cCI6MjA5NDg0NzMzOX0.rMnmtlUcAPHAbGPuUhlUKP2GxZkg5WpWXKma-pq4Xxc';

/* ---- low-level fetch ---- */
async function sbFetch(path, options = {}) {
  const url = SUPABASE_URL + '/rest/v1/' + path;
  const res = await fetch(url, {
    ...options,
    headers: {
      'apikey':        SUPABASE_ANON,
      'Authorization': 'Bearer ' + SUPABASE_ANON,
      'Content-Type':  'application/json',
      'Prefer':        options.prefer || 'return=representation',
      ...(options.headers || {})
    }
  });
  if (!res.ok) {
    const err = await res.text();
    console.error('Supabase error:', err);
    throw new Error(err);
  }
  const text = await res.text();
  return text ? JSON.parse(text) : [];
}

/* ---- READ ALL ---- */
async function dbLoadAll() {
  try {
    const [members, events, lectures, gallery, resources, stats] = await Promise.all([
      sbFetch('members?select=*&order=id'),
      sbFetch('events?select=*&order=id'),
      sbFetch('lectures?select=*&order=id'),
      sbFetch('gallery?select=*&order=id'),
      sbFetch('resources?select=*&order=id'),
      sbFetch('stats?select=*')
    ]);

    /* map DB rows back into SiteData format */
    if (members.length)  SiteData.allMembers  = members;
    if (lectures.length) SiteData.lectures     = lectures;
    if (gallery.length)  SiteData.gallery      = gallery;
    if (resources.length)SiteData.resources    = resources;

    if (events.length) {
      SiteData.events = events.map(e => ({ ...e, desc: e.description }));
    }

    if (stats.length) {
      stats.forEach(s => { if (SiteData.stats[s.key] !== undefined) SiteData.stats[s.key] = s.value; });
    }

    console.log('Loaded from Supabase:', { members: members.length, events: events.length, lectures: lectures.length });
    return true;
  } catch(e) {
    console.warn('Could not load from Supabase, using local data:', e.message);
    return false;
  }
}

/* ---- UPSERT helpers ---- */
async function dbUpsert(table, row) {
  return sbFetch(table, {
    method: 'POST',
    prefer: 'return=representation,resolution=merge-duplicates',
    headers: { 'Prefer': 'resolution=merge-duplicates,return=representation' },
    body: JSON.stringify(row)
  });
}

async function dbDelete(table, id) {
  return sbFetch(table + '?id=eq.' + id, { method: 'DELETE', prefer: '' });
}

/* ---- EVENTS ---- */
async function dbSaveEvent(e) {
  return dbUpsert('events', {
    id: e.id, name: e.name, day: e.day, month: e.month,
    year: e.year, description: e.desc, venue: e.venue,
    status: e.status, poster: e.poster || ''
  });
}
async function dbDeleteEvent(id)   { return dbDelete('events', id); }

/* ---- LECTURES ---- */
async function dbSaveLecture(l) {
  return dbUpsert('lectures', { id: l.id, title: l.title, date: l.date, img: l.img || '' });
}
async function dbDeleteLecture(id) { return dbDelete('lectures', id); }

/* ---- MEMBERS ---- */
async function dbSaveMember(m) {
  return dbUpsert('members', {
    id: m.id, name: m.name, role: m.role, dept: m.dept,
    course: m.course || '', univ: m.univ || '',
    photo: m.photo || '', bio: m.bio || '',
    linkedin: m.linkedin || '', instagram: m.instagram || '',
    appointed: m.appointed || ''
  });
}
async function dbDeleteMember(id)  { return dbDelete('members', id); }

/* ---- GALLERY ---- */
async function dbSaveGallery(g) {
  return dbUpsert('gallery', { id: g.id, img: g.img || '', label: g.label, wide: g.wide || false });
}
async function dbDeleteGallery(id) { return dbDelete('gallery', id); }

/* ---- RESOURCES ---- */
async function dbSaveResource(r) {
  return dbUpsert('resources', {
    id: r.id, title: r.title, type: r.type,
    file: r.file || '', file_name: r.fileName || '', icon: r.icon || '📄'
  });
}
async function dbDeleteResource(id){ return dbDelete('resources', id); }

/* ---- STATS ---- */
async function dbSaveStats(stats) {
  const rows = Object.entries(stats).map(([key, value]) => ({ key, value }));
  return sbFetch('stats', {
    method: 'POST',
    prefer: 'return=representation,resolution=merge-duplicates',
    headers: { 'Prefer': 'resolution=merge-duplicates,return=representation' },
    body: JSON.stringify(rows)
  });
}

/* ---- SEED initial data if tables are empty ---- */
async function dbSeedIfEmpty() {
  try {
    const existing = await sbFetch('members?select=id&limit=1');
    if (existing.length > 0) { console.log('DB already has data, skipping seed'); return; }
    console.log('Seeding initial data to Supabase...');
    const saves = [
      ...SiteData.allMembers.map(dbSaveMember),
      ...SiteData.events.map(dbSaveEvent),
      ...SiteData.lectures.map(dbSaveLecture),
      ...SiteData.gallery.map(dbSaveGallery),
      ...SiteData.resources.map(dbSaveResource),
      dbSaveStats(SiteData.stats)
    ];
    await Promise.all(saves);
    console.log('Initial data seeded to Supabase successfully');
  } catch(e) {
    console.warn('Seed error:', e.message);
  }
}
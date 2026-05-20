/* =============================================
   INSPIRE FORENSICS — MAIN JAVASCRIPT
   Admin password: inspire2025
   ============================================= */

let ADMIN_PASSWORD = 'inspire2025';

const SiteData = {

  stats: {
    members: "50+",
    events:  "25+",
    lectures:"16+",
    years:   "2+"
  },

  events: [
    { id:1, name:"Frame by Forensics", day:"18", month:"MAY", year:"2025",
      desc:"A photography and creative expression event celebrating forensic science through the lens. Members showcased their understanding of forensic concepts through curated photographs and visual storytelling.",
      venue:"NFSU Delhi Campus", status:"past",
      poster:"images/events/18th May 2025_Frame by Forensics.jpg" },
    { id:2, name:"VGU x Inspire Forensics Collaboration", day:"07", month:"NOV", year:"2025",
      desc:"A 3-day collaborative workshop with Vivekananda Global University, Jaipur covering trace evidence analysis, crime scene documentation, and practical forensic techniques.",
      venue:"VGU, Jaipur", status:"past",
      poster:"images/events/7th - 9th Nov 2025 VGU x Inspire.jpg" },
    { id:3, name:"Inspire x Amity Workshop", day:"09", month:"MAR", year:"2026",
      desc:"Workshop on trace evidence conducted at Amity University, Noida. Covered introduction to forensic science fundamentals, practical demonstrations, and career guidance for forensic aspirants.",
      venue:"Amity University, Noida", status:"past",
      poster:"images/events/9th March 2026_Inspire X Amity.jpg" },
    { id:4, name:"Ek Crime Aisa Bhi 2.0 (ECAB 2.0)", day:"TBD", month:"JUN", year:"2026",
      desc:"The highly anticipated cold case reconstruction event. Participants will analyse real-world case studies, reconstruct crime timelines, and present their findings before a panel of experts simulating a courtroom experience.",
      venue:"Online / NFSU Delhi", status:"upcoming", poster:"" },
    { id:5, name:"NFAT 2025 Sample Paper Drive", day:"15", month:"AUG", year:"2025",
      desc:"Curated and distributed official NFAT 2025 and CUET UG/PG 2026 sample papers to forensic aspirants across India, supporting over 500 students in their entrance exam preparation.",
      venue:"Online", status:"past", poster:"" }
  ],

  lectures: [
    { id:1,  date:"14 Sept 2024", title:"Questioned Documents",             img:"images/guest-lectures/14 Sept QD.png" },
    { id:2,  date:"21 Sept 2024", title:"Forensic Nursing",                  img:"images/guest-lectures/21 Sept Forensic nursing.png" },
    { id:3,  date:"5 Oct 2024",   title:"Markers for Life and Death",        img:"images/guest-lectures/5 Oct Marker for life and death.png" },
    { id:4,  date:"12 Oct 2024",  title:"Cyber Intelligence",                img:"images/guest-lectures/12 Oct Cyber intelligence.png" },
    { id:5,  date:"25 Oct 2024",  title:"Estimation of Time of Death",       img:"images/guest-lectures/25 Oct Estimation of time of death.png" },
    { id:6,  date:"8 Nov 2024",   title:"Blood Pattern Analysis",            img:"images/guest-lectures/8 Nov Bloodpattern analysis.png" },
    { id:7,  date:"29 Nov 2024",  title:"Analysis of Biological Samples",    img:"images/guest-lectures/29 Nov Analysis of biological samples.png" },
    { id:8,  date:"13 Dec 2024",  title:"Explosives & Forensics",            img:"images/guest-lectures/13 Dec Explosives.png" },
    { id:9,  date:"20 Dec 2024",  title:"Forensics in WWII",                 img:"images/guest-lectures/20 Dec WWII.png" },
    { id:10, date:"11 Jan 2025",  title:"Forensic Odontology",               img:"images/guest-lectures/11 Jan Forensic Odontology.png" },
    { id:11, date:"25 Jan 2025",  title:"Mobile Forensics",                  img:"images/guest-lectures/25 Jan Mobile forensics.png" },
    { id:12, date:"15 Feb 2025",  title:"DNA and Crime",                     img:"images/guest-lectures/15 Feb DNA and Crime.png" },
    { id:13, date:"7 Mar 2025",   title:"Fang Marks & Forensic Zoology",    img:"images/guest-lectures/7 March Fang marks.png" },
    { id:14, date:"12 Apr 2025",  title:"Crime Scene Investigation",         img:"images/guest-lectures/12 Apr CSI.png" },
    { id:15, date:"25 Apr 2025",  title:"Nanotechnology in Forensics",       img:"images/guest-lectures/25 Apr Nnaotechnology.png" },
    { id:16, date:"2025",         title:"Special Session",                   img:"images/guest-lectures/15_20260418_211004_0014.png" }
  ],

  /* departments used for accordion grouping */
  departments: [
    { id:"leadership",  name:"Leadership",                        icon:"&#9733;" },
    { id:"pr",          name:"Department of PR & Social Media",   icon:"&#128227;" },
    { id:"research",    name:"Department of Research & Development", icon:"&#128240;" },
    { id:"education",   name:"Department of Education",           icon:"&#128218;" },
    { id:"recruitment", name:"Department of Recruitment",         icon:"&#128101;" },
    { id:"executive",   name:"Department of Executive & Guidance",icon:"&#9881;" },
    { id:"events",      name:"Department of Events",              icon:"&#127881;" }
  ],

  /* single flat array — dept field maps to department id above */
  allMembers: [
    /* LEADERSHIP */
    { id:1,   name:"Abhinab Tripura",     role:"President",                          dept:"leadership", univ:"NFSU Delhi Campus",                                        photo:"images/members/Abhinab Tripura.JPG",   appointed:"2024",   course:"Forensic Science",         bio:"President of Inspire Forensics Society. Leading the vision of building India's most active forensic science student community.", linkedin:"", instagram:"" },
    { id:10,  name:"Ayushka Sinha",       role:"Vice President",                     dept:"leadership", univ:"NFSU Delhi Campus",                                        photo:"",                                     appointed:"2024",   course:"Forensic Science",         bio:"Vice President of Inspire Forensics, driving initiatives across departments and supporting the society's growth.", linkedin:"", instagram:"" },

    /* PR & SOCIAL MEDIA */
    { id:4,   name:"Manpreet Kaur",       role:"Head of PR & Social Media",          dept:"pr",         univ:"NIMS University, Rajasthan",                               photo:"images/members/Manpreet.jpeg",         appointed:"12 Mar 2025", course:"BSc (Hons) Forensic Science", bio:"Leads all PR and social media operations for Inspire Forensics, building the society's online presence and brand identity.", linkedin:"", instagram:"" },
    { id:7,   name:"Medha Manoj Nair",    role:"Coordinator of PR & Social Media",   dept:"pr",         univ:"Kristu Jayanti University, Bengaluru",                     photo:"images/members/Medha.jpg",             appointed:"19 Dec 2024", course:"BSc Forensic Science (2024-27)", bio:"Coordinates social media content and digital outreach for Inspire Forensics across all platforms.", linkedin:"", instagram:"" },
    { id:9,   name:"Ritika Sinha",        role:"Core Member, PR & Social Media",     dept:"pr",         univ:"NFSU Delhi Campus",                                        photo:"images/members/Ritika Sinha.jpg",      appointed:"2024",   course:"Forensic Science",         bio:"Founding member and core part of the PR team. Instrumental in establishing Inspire Forensics from the ground up.", linkedin:"", instagram:"" },
    { id:101, name:"Komal Sontake",       role:"Core Member, PR & Social Media",     dept:"pr",         univ:"Samrat Vikramaditya Vishwavidyalay, Ujjain",               photo:"images/members/komal Sontake.jpg",     appointed:"22 Apr 2025", course:"BSc (Hons) Forensic Science",  bio:"Core member of the PR department, contributing to content creation and social media strategy.", linkedin:"", instagram:"" },

    /* RESEARCH & DEVELOPMENT */
    { id:3,   name:"Samriddhi Chauhan",   role:"Head of Research & Development",     dept:"research",   univ:"Galgotias University, Greater Noida",                      photo:"images/members/Samriddhi Chauhan_.jpg",appointed:"Feb 2025",  course:"BSc (Hons) Biomedical Sciences",  bio:"Heads research initiatives and manages the monthly newsletter Traces and Trends. Drives academic content for Inspire Forensics.", linkedin:"", instagram:"" },
    { id:105, name:"Poornima Jindal",     role:"Core Member, Research & Development",dept:"research",   univ:"Govt Holkar Science Autonomous College, Indore",           photo:"",                                     appointed:"Dec 2025",  course:"MSc Forensic Sciences",          bio:"Research and development team member contributing to forensic case studies and academic content.", linkedin:"", instagram:"" },

    /* EDUCATION */
    { id:5,   name:"Piyush Pandey",       role:"Coordinator, Education Department",  dept:"education",  univ:"NFSU Delhi Campus",                                        photo:"images/members/Piyush Pandey.jpg",     appointed:"6 Feb 2025", course:"BSc-MSc Forensic Science (2024-29)", bio:"Coordinates the education department, curating NFAT and CUET sample papers and organizing career guidance sessions for forensic aspirants.", linkedin:"", instagram:"" },
    { id:102, name:"Mannat Kaur",         role:"Core Member, Education",             dept:"education",  univ:"Amity University Haryana",                                  photo:"images/members/Mannat Kaur.jpeg",      appointed:"9 May 2025", course:"BSc Forensic Science (2023-26)",   bio:"Education team member focused on sample paper curation and student outreach initiatives.", linkedin:"", instagram:"" },
    { id:103, name:"Pragna Ravish",       role:"Core Member, Education",             dept:"education",  univ:"Soundarya Institute of Management and Science, Bangalore",  photo:"images/members/Pragna Ravish.jpg",     appointed:"20 Apr 2025", course:"BSc Forensic Science (2024-27)",   bio:"Education team member supporting workshop coordination and study material development for forensic aspirants.", linkedin:"", instagram:"" },
    { id:104, name:"Sana'a Abdulhamid",   role:"Core Member, Education",             dept:"education",  univ:"Garden City University",                                   photo:"images/members/Sana_a Abdulhamid.jpg", appointed:"9 May 2025", course:"MSc Forensic Science (2025-27)",    bio:"Education team core member working on curriculum guidance and aspirant support programs.", linkedin:"", instagram:"" },
    { id:109, name:"Tamonash Bhattacharjya",role:"Member, Education",               dept:"education",  univ:"Jharkhand Raksha Shakti University",                        photo:"images/members/Tamonash.jpg",          appointed:"2025",   course:"BSc (Hons) Forensic Science",    bio:"Active member of the education department contributing to outreach and academic support.", linkedin:"", instagram:"" },

    /* RECRUITMENT */
    { id:2,   name:"Srija Chakraborty",   role:"Head of Recruitment & Treasurer",    dept:"recruitment",univ:"Vivekananda Global University, Jaipur",                    photo:"images/members/Srija.jpg",             appointed:"19 Dec 2024", course:"BSc (Hons) Forensic Science (2023-26)", bio:"Heads recruitment and manages the society's treasury. Key in expanding Inspire Forensics to universities across India.", linkedin:"", instagram:"" },
    { id:8,   name:"Anushka Chakraborty", role:"Coordinator, Recruitment",           dept:"recruitment",univ:"Vivekananda Global University, Jaipur",                    photo:"images/members/anushka chakraborty (coordinator of recruitment).jpg", appointed:"17 Jan 2026", course:"BSc Forensic Science (2025-28)", bio:"Recruitment coordinator helping identify and onboard passionate forensic science students from across India.", linkedin:"", instagram:"" },

    /* EXECUTIVE & GUIDANCE */
    { id:6,   name:"Trisha Khurana",      role:"Coordinator, Executive & Guidance",  dept:"executive",  univ:"NFSU Delhi",                                               photo:"images/members/trisha khurana_.jpg",   appointed:"Feb 2025",  course:"BSc-MSc Forensic Science",        bio:"Executive coordinator providing guidance and mentorship to members, ensuring smooth operations across all departments.", linkedin:"", instagram:"" },
    { id:107, name:"Sidhi Jain",          role:"Core Member, Executive & Guidance",  dept:"executive",  univ:"Chandigarh University",                                    photo:"images/members/Sidhi Jain.jpg",        appointed:"6 Jan 2026", course:"BSc Forensic Science (2023-26)",   bio:"Executive team member contributing to guidance initiatives and inter-department coordination.", linkedin:"", instagram:"" },
    { id:108, name:"Tanmay Tyagi",        role:"Core Member, Executive & Guidance",  dept:"executive",  univ:"Amity University Gurugram",                                photo:"images/members/Tanmay.jpg",            appointed:"6 Jan 2026", course:"BSc Forensic Science (2025-29)",   bio:"Executive and guidance team member supporting mentorship programs and operational activities.", linkedin:"", instagram:"" },

    /* EVENTS */
    { id:106, name:"Siya Anwekar",        role:"Core Member, Event Team",            dept:"events",     univ:"RV University, Bangalore",                                 photo:"images/members/Siya Anwekar.jpeg",     appointed:"16 Oct 2025", course:"BSc (Hons) Criminology, Cyber Law & Forensic Science (2024-28)", bio:"Events team core member involved in planning and executing Inspire Forensics workshops and collaborative events.", linkedin:"", instagram:"" },
    { id:110, name:"Jennica Fernandes",   role:"Member, Events",                     dept:"events",     univ:"",                                                         photo:"images/members/Jennica Fernandes.JPG", appointed:"2025",   course:"Forensic Science",               bio:"Events team member contributing to event coordination and community engagement activities.", linkedin:"", instagram:"" }
  ],

  gallery: [
    { id:1,  img:"images/gallery/activity_01.jpg", label:"Crime Scene Investigation", wide:true },
    { id:2,  img:"images/gallery/activity_02.jpg", label:"Fingerprint Analysis" },
    { id:3,  img:"images/gallery/activity_03.jpg", label:"HPLC Lab Session" },
    { id:4,  img:"images/gallery/activity_04.jpg", label:"Fingerprint Study" },
    { id:5,  img:"images/gallery/activity_05.jpg", label:"Dusting Technique", wide:true },
    { id:6,  img:"images/gallery/activity_06.jpg", label:"Powder Analysis" },
    { id:7,  img:"images/gallery/activity_07.jpg", label:"Footwear Evidence" },
    { id:8,  img:"images/gallery/activity_08.jpg", label:"Urine Sample Analysis" },
    { id:9,  img:"images/gallery/activity_09.jpg", label:"Forensic Anthropology" },
    { id:10, img:"images/gallery/activity_10.jpg", label:"Mock Crime Scene", wide:true },
    { id:11, img:"images/gallery/activity_11.jpg", label:"Simulated Evidence" },
    { id:12, img:"images/gallery/activity_12.jpg", label:"Crime Scene Kit" },
    { id:13, img:"images/gallery/activity_13.jpg", label:"Evidence Markers" },
    { id:14, img:"images/gallery/activity_14.jpg", label:"Evidence Close-Up" },
    { id:15, img:"images/gallery/activity_15.jpg", label:"Scene Walkthrough" },
    { id:16, img:"images/gallery/activity_16.jpg", label:"Chemical Testing" },
    { id:17, img:"images/gallery/activity_17.jpg", label:"Reagent Analysis" },
    { id:18, img:"images/gallery/activity_18.jpg", label:"Forensic Chemistry" },
    { id:19, img:"images/gallery/activity_19.jpg", label:"Case Notes" },
    { id:20, img:"images/gallery/activity_20.jpg", label:"Lab Workshop" }
  ],

  resources: [
    { id:1,  type:"Newsletter",   title:"Traces & Trends — January 2026",              file:"resources/Traces & Trends Jan_ 26.pdf",         icon:"📰" },
    { id:2,  type:"Newsletter",   title:"Inspire Forensics Newsletter — December 2025", file:"resources/Newsletter Dec_25.pdf",                icon:"📰" },
    { id:3,  type:"Newsletter",   title:"Inspire Forensics Newsletter — February 2026", file:"resources/Newsletter Feb_26 (1).pdf",            icon:"📰" },
    { id:4,  type:"Newsletter",   title:"Inspire Forensics Newsletter — April 2026",    file:"resources/Newsletter April_26 (1).pdf",          icon:"📰" },
    { id:5,  type:"Sample Paper", title:"INSPIRE FORENSICS Sample Paper 1 (NFAT)",     file:"resources/INSPIRE FORENSICS Sample Paper-1.pdf", icon:"📄" },
    { id:6,  type:"Sample Paper", title:"IF Sample Paper 2",                           file:"resources/IF Sample Paper 2.pdf",                icon:"📄" },
    { id:7,  type:"Sample Paper", title:"IF Sample Paper 3",                           file:"resources/IF Sample Paper 3.pdf",                icon:"📄" },
    { id:8,  type:"Sample Paper", title:"IF Sample Paper 4",                           file:"resources/IF Sample Paper 4.pdf",                icon:"📄" },
    { id:9,  type:"Sample Paper", title:"CUET PG Sample Paper",                        file:"resources/CUET PG Sample 01 (2).pdf",            icon:"📄" },
    { id:10, type:"Sample Paper", title:"UG Biology Sample",                           file:"resources/IF UG Biology Sample.pdf",             icon:"📄" },
    { id:11, type:"Sample Paper", title:"UG Chemistry Sample",                         file:"resources/IF UG Chemistry Sample.pdf",           icon:"📄" },
    { id:12, type:"Sample Paper", title:"UG Physics Sample",                           file:"resources/IF UG Physics Sample.pdf",             icon:"📄" },
    { id:13, type:"Sample Paper", title:"UG Mathematics Sample",                       file:"resources/IF UG Math Sample.pdf",                icon:"📄" }
  ]
};

/* =============================================
   NAVBAR
   ============================================= */
function initNavbar() {
  const navbar    = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobile    = document.querySelector('.navbar__drawer');

  window.addEventListener('scroll', () =>
    navbar.classList.toggle('scrolled', window.scrollY > 40));

  hamburger && hamburger.addEventListener('click', () =>
    mobile.classList.toggle('open'));

  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.navbar__links a');
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const m = document.querySelector(`.navbar__links a[href="#${e.target.id}"]`);
        if (m) m.classList.add('active');
      }
    });
  }, { threshold: 0.3 }).observe && sections.forEach(s =>
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const m = document.querySelector(`.navbar__links a[href="#${e.target.id}"]`);
          if (m) m.classList.add('active');
        }
      });
    }, { threshold: 0.3 }).observe(s));
}

/* =============================================
   SCROLL ANIMATIONS
   ============================================= */
function initScrollAnim() {
  const animEls = document.querySelectorAll(
    '.dept-card, .lecture-card, .resource-card, .event-card, .event-poster, .gallery__item'
  );
  animEls.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(28px)';
    el.style.transition = `opacity 0.55s ease ${(i % 8) * 0.07}s, transform 0.55s ease ${(i % 8) * 0.07}s`;
  });

  const sectionEls = document.querySelectorAll('.section-header, .about__text, .about__visual');
  sectionEls.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition= 'opacity 0.65s ease, transform 0.65s ease';
  });

  const all = [...animEls, ...sectionEls];
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity   = '1';
        e.target.style.transform = 'none';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  all.forEach(el => obs.observe(el));
}

/* =============================================
   RENDER: STATS
   ============================================= */
function renderStats() {
  const el = id => document.getElementById(id);
  if (el('stat-members'))  el('stat-members').textContent  = SiteData.stats.members;
  if (el('stat-events'))   el('stat-events').textContent   = SiteData.stats.events;
  if (el('stat-lectures')) el('stat-lectures').textContent = SiteData.stats.lectures;
  if (el('stat-years'))    el('stat-years').textContent    = SiteData.stats.years;
}

/* =============================================
   RENDER: EVENTS
   ============================================= */
function renderEvents() {
  const list    = document.getElementById('eventsList');
  const posters = document.getElementById('eventPosters');

  if (list) list.innerHTML = SiteData.events.map(e => `
    <div class="event-card" data-id="${e.id}">
      <div class="event-card__date">
        <div class="event-card__day">${e.day}</div>
        <div class="event-card__month">${e.month}</div>
        <div class="event-card__year">${e.year}</div>
      </div>
      <div class="event-card__info">
        <h3>${e.name}</h3>
        <p>${e.desc}</p>
        <div class="event-card__meta"><span>&#128205; ${e.venue}</span></div>
      </div>
      <div>
        <span class="event-tag event-tag--${e.status}">${e.status === 'upcoming' ? 'UPCOMING' : 'COMPLETED'}</span>
      </div>
    </div>`).join('');

  if (posters) {
    const wp = SiteData.events.filter(e => e.poster);
    posters.innerHTML = wp.map(e => `
      <div class="event-poster">
        <img src="${e.poster}" alt="${e.name}" loading="lazy">
        <div class="event-poster__caption">${e.name} &bull; ${e.month} ${e.year}</div>
      </div>`).join('');
  }
}

/* =============================================
   RENDER: LECTURES
   ============================================= */
function renderLectures() {
  const c = document.getElementById('lecturesGrid');
  if (!c) return;
  c.innerHTML = SiteData.lectures.map(l => `
    <div class="lecture-card">
      <img class="lecture-card__img" src="${l.img}" alt="${l.title}" loading="lazy">
      <div class="lecture-card__body">
        <div class="lecture-card__date">${l.date}</div>
        <div class="lecture-card__title">${l.title}</div>
      </div>
      <div class="lecture-card__overlay"><span>View Poster</span></div>
    </div>`).join('');

  c.querySelectorAll('.lecture-card').forEach((card, i) =>
    card.addEventListener('click', () => openLightbox(SiteData.lectures.map(l => l.img), i)));
}

/* =============================================
   RENDER: TEAM  (department accordion)
   ============================================= */
function renderTeam() {
  const container = document.getElementById('teamDepartments');
  if (!container) return;

  container.innerHTML = SiteData.departments.map(dept => {
    const members = SiteData.allMembers.filter(m => m.dept === dept.id);
    if (!members.length) return '';
    return `
    <div class="dept-block" data-dept="${dept.id}">
      <button class="dept-block__header" onclick="toggleDept('${dept.id}')">
        <span class="dept-block__icon">${dept.icon}</span>
        <span class="dept-block__name">${dept.name}</span>
        <span class="dept-block__count">${members.length} member${members.length !== 1 ? 's' : ''}</span>
        <span class="dept-block__arrow">&#8250;</span>
      </button>
      <div class="dept-block__body" id="dept-${dept.id}">
        <div class="dept-member-grid">
          ${members.map((m, i) => `
            <div class="member-profile-card" id="mcard-${m.id}">
              <div class="mpc__top" onclick="toggleMemberCard(${m.id})">
                <div class="mpc__num">${i + 1}</div>
                <div class="mpc__photo-wrap">
                  ${m.photo
                    ? `<img src="${m.photo}" alt="${m.name}" class="mpc__photo"
                           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
                    : ''}
                  <div class="mpc__avatar" style="${m.photo ? 'display:none' : ''}">
                    ${m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                </div>
                <div class="mpc__summary">
                  <div class="mpc__name">${m.name}</div>
                  <div class="mpc__role">${m.role}</div>
                  <div class="mpc__univ">${m.univ || ''}</div>
                </div>
                <div class="mpc__toggle-icon">&#43;</div>
              </div>
              <div class="mpc__expanded" id="mexp-${m.id}">
                <div class="mpc__expanded-inner">
                  <div class="mpc__expanded-left">
                    ${m.photo
                      ? `<img src="${m.photo}" alt="${m.name}" class="mpc__expanded-photo"
                             onerror="this.style.display='none'">`
                      : `<div class="mpc__expanded-avatar">${m.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>`
                    }
                    ${(m.linkedin || m.instagram) ? `
                    <div class="mpc__socials">
                      ${m.linkedin ? `<a href="${m.linkedin}" target="_blank" class="mpc__social-link" title="LinkedIn">&#128101;</a>` : ''}
                      ${m.instagram ? `<a href="${m.instagram}" target="_blank" class="mpc__social-link" title="Instagram">&#128247;</a>` : ''}
                    </div>` : ''}
                  </div>
                  <div class="mpc__expanded-right">
                    <div class="mpc__expanded-name">${m.name}</div>
                    <div class="mpc__expanded-role">${m.role}</div>
                    <div class="mpc__expanded-meta">
                      ${m.course ? `<div class="mpc__meta-row"><span class="mpc__meta-label">Course</span><span class="mpc__meta-val">${m.course}</span></div>` : ''}
                      ${m.univ   ? `<div class="mpc__meta-row"><span class="mpc__meta-label">University</span><span class="mpc__meta-val">${m.univ}</span></div>` : ''}
                      <div class="mpc__meta-row"><span class="mpc__meta-label">Department</span><span class="mpc__meta-val">${SiteData.departments.find(d=>d.id===m.dept)?.name||''}</span></div>
                      ${m.appointed ? `<div class="mpc__meta-row"><span class="mpc__meta-label">Joined</span><span class="mpc__meta-val">${m.appointed}</span></div>` : ''}
                    </div>
                    ${m.bio ? `<div class="mpc__bio">${m.bio}</div>` : ''}
                  </div>
                </div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleMemberCard(id) {
  const expanded = document.getElementById('mexp-' + id);
  const card     = document.getElementById('mcard-' + id);
  const icon     = card.querySelector('.mpc__toggle-icon');
  const isOpen   = expanded.classList.contains('open');
  // Close all in same dept first
  const deptBody = card.closest('.dept-block__body');
  deptBody.querySelectorAll('.mpc__expanded.open').forEach(el => {
    el.classList.remove('open');
    const c = el.closest('.member-profile-card');
    if (c) { c.querySelector('.mpc__toggle-icon').textContent = '+'; c.classList.remove('active'); }
  });
  if (!isOpen) {
    expanded.classList.add('open');
    card.classList.add('active');
    if (icon) icon.textContent = '\u2212';
  }
}

function toggleDept(id) {
  const body   = document.getElementById('dept-' + id);
  const header = body.previousElementSibling;
  const isOpen = body.classList.contains('open');

  document.querySelectorAll('.dept-block__body').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.dept-block__header').forEach(h => h.classList.remove('active'));

  if (!isOpen) {
    body.classList.add('open');
    header.classList.add('active');
    body.querySelectorAll('.member-profile-card').forEach((m, i) => {
      m.style.opacity   = '0';
      m.style.transform = 'translateY(16px)';
      setTimeout(() => { m.style.opacity = '1'; m.style.transform = 'none'; }, i * 55);
    });
  }
}

/* =============================================
   RENDER: GALLERY
   ============================================= */
function renderGallery() {
  const c = document.getElementById('galleryGrid');
  if (!c) return;
  const isAdmin = document.getElementById('adminMainContent')?.classList.contains('visible');

  c.innerHTML = SiteData.gallery.map((g, i) => `
    <div class="gallery__item${g.wide ? ' gallery__item--wide' : ''}" data-index="${i}" id="gi-${g.id}">
      ${g.img
        ? `<img src="${g.img}" alt="${g.label}" loading="lazy">`
        : `<div class="gallery__item__empty"><span>No image</span></div>`
      }
      <div class="gallery__item__overlay">
        <span class="gallery__item__label">${g.label}</span>
      </div>
      ${isAdmin ? `
      <div class="gallery__admin-controls">
        <label class="gallery__admin-btn gallery__admin-btn--upload" title="${g.img ? 'Change image' : 'Upload image'}">
          &#128247;
          <input type="file" accept="image/*" style="display:none" onchange="uploadGalleryImgInline(${g.id},this)">
        </label>
        <button class="gallery__admin-btn gallery__admin-btn--delete" onclick="deleteGalleryItemInline(event,${g.id})" title="Delete">&#10005;</button>
      </div>` : ''}
    </div>`).join('');

  c.querySelectorAll('.gallery__item').forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.closest('.gallery__admin-controls')) return;
      if (!item.querySelector('img')) return;
      const imgs = SiteData.gallery.filter(g => g.img).map(g => g.img);
      const idx = imgs.indexOf(SiteData.gallery.find(g => 'gi-'+g.id === item.id)?.img);
      if (idx !== -1) openLightbox(imgs, idx);
    });
  });
}

function uploadGalleryImgInline(id, input) {
  readImg(input.files[0], src => {
    const g = SiteData.gallery.find(g => g.id === id);
    if (!g) return;
    g.img = src;
    renderGallery();
    dbSaveGallery(g).catch(console.warn);
  });
}

function deleteGalleryItemInline(e, id) {
  e.stopPropagation();
  if (!confirm('Remove this photo from the gallery?')) return;
  SiteData.gallery = SiteData.gallery.filter(g => g.id !== id);
  renderGallery();
  renderAdminGallery();
  dbDeleteGallery(id).catch(console.warn);
}

/* =============================================
   RENDER: RESOURCES
   ============================================= */
function renderResources() {
  const nl = document.getElementById('newsletterGrid');
  const sp = document.getElementById('papersGrid');
  if (!nl || !sp) return;
  const cardHTML = r => `
    <div class="resource-card">
      <div class="resource-card__icon">${r.icon}</div>
      <div>
        <div class="resource-card__type">${r.type}</div>
        <div class="resource-card__title">${r.title}</div>
      </div>
      ${r.file ? `<a href="${r.file}" target="_blank" class="resource-card__link" download="${r.fileName||r.title+'.pdf'}">Download PDF &#8594;</a>` : `<span class="resource-card__link" style="opacity:.4;cursor:default">No file uploaded</span>`}
    </div>`;
  nl.innerHTML = SiteData.resources.filter(r => r.type === 'Newsletter').map(cardHTML).join('');
  sp.innerHTML = SiteData.resources.filter(r => r.type === 'Sample Paper').map(cardHTML).join('');
}

/* =============================================
   LIGHTBOX
   ============================================= */
let lightboxImages = [], lightboxIndex = 0;

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex  = index;
  document.getElementById('lightbox').classList.add('open');
  document.getElementById('lightboxImg').src = lightboxImages[lightboxIndex];
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  document.getElementById('lightboxImg').src = lightboxImages[lightboxIndex];
}
function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  document.getElementById('lightboxImg').src = lightboxImages[lightboxIndex];
}

/* =============================================
   CONTACT FORM
   ============================================= */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const successEl = document.getElementById('formSuccess');
    const errorEl   = document.getElementById('formError');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    if (errorEl) errorEl.style.display = 'none';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        successEl.style.display = 'block';
        form.reset();
        setTimeout(() => successEl.style.display = 'none', 5000);
      } else {
        const data = await res.json();
        if (errorEl) { errorEl.textContent = data.error || 'Something went wrong. Please try again.'; errorEl.style.display = 'block'; }
      }
    } catch(err) {
      if (errorEl) { errorEl.textContent = 'Could not send message. Check your connection.'; errorEl.style.display = 'block'; }
    } finally {
      btn.textContent = 'Send Message';
      btn.disabled = false;
    }
  });
}

/* =============================================
   ADMIN — helpers
   ============================================= */
function openAdmin() {
  document.getElementById('adminOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeAdmin() {
  document.getElementById('adminOverlay').classList.remove('open');
  document.body.style.overflow = '';
  renderGallery();
}
function adminLogin() {
  const pw = document.getElementById('adminPassword').value;
  if (pw === ADMIN_PASSWORD) {
    document.getElementById('adminLoginScreen').style.display = 'none';
    document.getElementById('adminMainContent').classList.add('visible');
    document.getElementById('adminHeaderUser').style.display = 'block';
    renderAdminAll();
    renderGallery();
  } else {
    document.getElementById('adminLoginError').style.display = 'block';
    setTimeout(() => document.getElementById('adminLoginError').style.display = 'none', 2500);
  }
}
function switchAdminTab(name) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  document.querySelector(`.admin-tab[data-tab="${name}"]`).classList.add('active');
  document.getElementById(`admin-${name}`).classList.add('active');
}
function renderAdminAll() {
  renderAdminEvents();
  renderAdminLectures();
  renderAdminMembers();
  renderAdminGallery();
  renderAdminResources();
  renderAdminStats();
}
function readImg(file, cb) {
  if (!file) return;
  const r = new FileReader();
  r.onload = e => cb(e.target.result);
  r.readAsDataURL(file);
}
function uploadBtn(label) {
  return `<label class="admin-upload-btn">&#128247; ${label}<input type="file" accept="image/*" style="display:none"></label>`;
}
function showSuccess(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 3000);
}

/* =============================================
   ADMIN: EVENTS
   ============================================= */
function renderAdminEvents() {
  const c = document.getElementById('adminEventsList');
  if (!c) return;
  c.innerHTML = SiteData.events.map(e => `
    <div class="admin-card">
      <div class="admin-card__header">
        <div style="flex:1">
          <div class="admin-card__title">${e.name}</div>
          <div class="admin-card__sub">${e.day} ${e.month} ${e.year} &bull; ${e.venue}</div>
          <div style="margin-top:0.5rem">
            <span class="event-tag event-tag--${e.status}" style="font-size:0.62rem;padding:3px 10px">
              ${e.status === 'upcoming' ? 'UPCOMING' : 'COMPLETED'}
            </span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0">
          <button class="btn-toggle-sm" onclick="toggleEventStatus(${e.id})">
            ${e.status === 'upcoming' ? 'Mark Past' : 'Mark Upcoming'}
          </button>
          <button class="btn-edit-sm" onclick="editEvent(${e.id})">Edit</button>
          <button class="btn-delete-sm" onclick="deleteEvent(${e.id})">Delete</button>
        </div>
      </div>
      <div style="margin-top:0.9rem">
        ${e.poster
          ? `<div style="position:relative;display:inline-block;margin-bottom:0.5rem">
               <img src="${e.poster}" style="max-height:100px;max-width:100%;border:1px solid rgba(212,175,55,0.2);display:block">
               <button onclick="removeEventPoster(${e.id})"
                 style="position:absolute;top:3px;right:3px;background:rgba(180,30,30,0.9);border:none;color:#fff;width:20px;height:20px;cursor:pointer;font-size:0.75rem">&#10005;</button>
             </div>`
          : `<div style="color:rgba(255,255,255,0.3);font-size:0.78rem;font-family:Rajdhani,sans-serif;margin-bottom:0.4rem">No poster image</div>`
        }
        <label class="admin-upload-btn">
          &#128247; ${e.poster ? 'Change Poster' : 'Upload Poster'}
          <input type="file" accept="image/*" style="display:none" onchange="uploadEventImage(${e.id},this)">
        </label>
      </div>
    </div>`).join('') || '<p style="color:rgba(255,255,255,0.3);font-size:0.9rem">No events yet.</p>';
}
function uploadEventImage(id, input) {
  readImg(input.files[0], src => {
    const e = SiteData.events.find(e => e.id === id);
    if (e) { e.poster = src; renderEvents(); renderAdminEvents(); dbSaveEvent(e).catch(console.warn); }
  });
}
function removeEventPoster(id) {
  const e = SiteData.events.find(e => e.id === id);
  if (e) { e.poster = ''; renderEvents(); renderAdminEvents(); dbSaveEvent(e).catch(console.warn); }
}
function addEvent() {
  const v = id => document.getElementById(id).value.trim();
  const name = v('newEventName'), desc = v('newEventDesc');
  if (!name || !desc) { alert('Name and description are required.'); return; }
  SiteData.events.push({
    id: Date.now(), name, desc,
    day:   v('newEventDay') || 'TBD',
    month: v('newEventMonth').toUpperCase() || 'TBD',
    year:  v('newEventYear') || new Date().getFullYear().toString(),
    venue: v('newEventVenue') || 'TBD',
    status: document.getElementById('newEventStatus').value,
    poster: ''
  });
  ['newEventName','newEventDesc','newEventDay','newEventMonth','newEventYear','newEventVenue']
    .forEach(id => document.getElementById(id).value = '');
  renderEvents(); renderAdminEvents(); showSuccess('eventAddSuccess');
  dbSaveEvent(SiteData.events[SiteData.events.length-1]).catch(console.warn);
}
function deleteEvent(id) {
  if (!confirm('Delete this event?')) return;
  SiteData.events = SiteData.events.filter(e => e.id !== id);
  renderEvents(); renderAdminEvents();
  dbDeleteEvent(id).catch(console.warn);
}
function toggleEventStatus(id) {
  const e = SiteData.events.find(e => e.id === id);
  if (e) { e.status = e.status === 'upcoming' ? 'past' : 'upcoming'; dbSaveEvent(e).catch(console.warn); }
  renderEvents(); renderAdminEvents();
}
function editEvent(id) {
  const e = SiteData.events.find(e => e.id === id); if (!e) return;
  openEditModal('Edit Event', `<div class="admin-form">
    <div><label>Name</label><input id="em_name" value="${e.name}"></div>
    <div class="admin-form-row">
      <div><label>Day</label><input id="em_day" value="${e.day}"></div>
      <div><label>Month</label><input id="em_month" value="${e.month}"></div>
      <div><label>Year</label><input id="em_year" value="${e.year}"></div>
    </div>
    <div><label>Venue</label><input id="em_venue" value="${e.venue}"></div>
    <div><label>Description</label><textarea id="em_desc">${e.desc}</textarea></div>
    <div><label>Status</label>
      <select id="em_status">
        <option value="upcoming"${e.status==='upcoming'?' selected':''}>Upcoming</option>
        <option value="past"${e.status==='past'?' selected':''}>Past</option>
      </select>
    </div>
  </div>`, () => {
    e.name   = document.getElementById('em_name').value;
    e.day    = document.getElementById('em_day').value;
    e.month  = document.getElementById('em_month').value;
    e.year   = document.getElementById('em_year').value;
    e.venue  = document.getElementById('em_venue').value;
    e.desc   = document.getElementById('em_desc').value;
    e.status = document.getElementById('em_status').value;
    renderEvents(); renderAdminEvents();
    dbSaveEvent(e).catch(console.warn);
  });
}

/* =============================================
   ADMIN: LECTURES
   ============================================= */
function renderAdminLectures() {
  const c = document.getElementById('adminLecturesList'); if (!c) return;
  c.innerHTML = SiteData.lectures.map(l => `
    <div class="admin-card">
      <div class="admin-card__header">
        <div>
          <div class="admin-card__title">${l.title}</div>
          <div class="admin-card__sub">${l.date}</div>
        </div>
        <div class="admin-btn-row">
          <button class="btn-edit-sm" onclick="editLecture(${l.id})">Edit</button>
          <button class="btn-delete-sm" onclick="deleteLecture(${l.id})">Delete</button>
        </div>
      </div>
      <div style="margin-top:0.8rem">
        ${l.img
          ? `<div style="position:relative;display:inline-block;margin-bottom:0.5rem">
               <img src="${l.img}" style="max-height:100px;max-width:100%;border:1px solid rgba(212,175,55,0.2);display:block">
               <button onclick="removeLectureImg(${l.id})"
                 style="position:absolute;top:3px;right:3px;background:rgba(180,30,30,0.9);border:none;color:#fff;width:20px;height:20px;cursor:pointer;font-size:0.75rem">&#10005;</button>
             </div>`
          : `<div style="color:rgba(255,255,255,0.3);font-size:0.78rem;font-family:Rajdhani,sans-serif;margin-bottom:0.4rem">No poster image</div>`
        }
        <label class="admin-upload-btn">
          &#128247; ${l.img ? 'Change Image' : 'Upload Image'}
          <input type="file" accept="image/*" style="display:none" onchange="uploadLectureImg(${l.id},this)">
        </label>
      </div>
    </div>`).join('');
}
function uploadLectureImg(id, input) {
  readImg(input.files[0], src => {
    const l = SiteData.lectures.find(l => l.id === id);
    if (l) { l.img = src; renderLectures(); renderAdminLectures(); dbSaveLecture(l).catch(console.warn); }
  });
}
function removeLectureImg(id) {
  const l = SiteData.lectures.find(l => l.id === id);
  if (l) { l.img = ''; renderLectures(); renderAdminLectures(); dbSaveLecture(l).catch(console.warn); }
}
function addLecture() {
  const title = document.getElementById('newLecTitle').value.trim();
  const date  = document.getElementById('newLecDate').value.trim();
  if (!title) { alert('Title required.'); return; }
  SiteData.lectures.push({ id: Date.now(), title, date: date || 'TBD', img: '' });
  document.getElementById('newLecTitle').value = '';
  document.getElementById('newLecDate').value  = '';
  renderLectures(); renderAdminLectures(); showSuccess('lectureAddSuccess');
  dbSaveLecture(SiteData.lectures[SiteData.lectures.length-1]).catch(console.warn);
}
function deleteLecture(id) {
  if (!confirm('Delete this lecture?')) return;
  SiteData.lectures = SiteData.lectures.filter(l => l.id !== id);
  renderLectures(); renderAdminLectures();
  dbDeleteLecture(id).catch(console.warn);
}
function editLecture(id) {
  const l = SiteData.lectures.find(l => l.id === id); if (!l) return;
  openEditModal('Edit Lecture', `<div class="admin-form">
    <div><label>Title</label><input id="em_title" value="${l.title}"></div>
    <div><label>Date</label><input id="em_date" value="${l.date}"></div>
  </div>`, () => {
    l.title = document.getElementById('em_title').value;
    l.date  = document.getElementById('em_date').value;
    renderLectures(); renderAdminLectures();
    dbSaveLecture(l).catch(console.warn);
  });
}

/* =============================================
   ADMIN: MEMBERS (department-grouped)
   ============================================= */
function renderAdminMembers() {
  const c = document.getElementById('adminMembersList'); if (!c) return;
  const grouped = {};
  SiteData.departments.forEach(d => { grouped[d.id] = []; });
  SiteData.allMembers.forEach(m => {
    if (grouped[m.dept]) grouped[m.dept].push(m);
    else { grouped['leadership'] = grouped['leadership'] || []; grouped['leadership'].push(m); }
  });

  c.innerHTML = SiteData.departments.map(dept => {
    const members = grouped[dept.id] || [];
    if (!members.length) return '';
    return `
    <div style="margin-bottom:1.6rem">
      <div style="font-family:Cinzel,serif;font-size:0.85rem;color:var(--gold);padding:0.6rem 0;
                  border-bottom:1px solid rgba(212,175,55,0.2);margin-bottom:0.8rem;
                  display:flex;align-items:center;justify-content:space-between">
        <span>${dept.icon} ${dept.name}</span>
        <span style="font-family:Rajdhani,sans-serif;font-size:0.7rem;color:rgba(255,255,255,0.35)">
          ${members.length} member${members.length !== 1 ? 's' : ''}
        </span>
      </div>
      ${members.map(m => `
        <div class="admin-card" style="margin-bottom:0.6rem">
          <div class="admin-card__header">
            <div style="display:flex;align-items:center;gap:0.8rem;flex:1">
              ${m.photo
                ? `<img src="${m.photo}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;
                            object-position:top;border:2px solid rgba(212,175,55,0.3);flex-shrink:0">`
                : `<div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--navy),#1a3a6b);
                              display:flex;align-items:center;justify-content:center;font-family:Cinzel,serif;
                              font-size:1rem;color:var(--gold);flex-shrink:0">
                     ${m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                   </div>`
              }
              <div>
                <div class="admin-card__title">${m.name}</div>
                <div class="admin-card__sub">${m.role}</div>
                <div class="admin-card__sub" style="font-size:0.72rem">${m.univ || ''}</div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:5px;flex-shrink:0">
              <label class="admin-upload-btn" style="padding:4px 10px;font-size:0.65rem">
                &#128247; Photo
                <input type="file" accept="image/*" style="display:none" onchange="uploadMemberPhoto(${m.id},this)">
              </label>
              <button class="btn-edit-sm" onclick="editMember(${m.id})">Edit</button>
              <button class="btn-delete-sm" onclick="deleteMember(${m.id})">Remove</button>
            </div>
          </div>
        </div>`).join('')}
    </div>`;
  }).join('');
}
function uploadMemberPhoto(id, input) {
  readImg(input.files[0], src => {
    const m = SiteData.allMembers.find(m => m.id === id);
    if (m) { m.photo = src; renderTeam(); renderAdminMembers(); dbSaveMember(m).catch(console.warn); }
  });
}
function deleteMember(id) {
  if (!confirm('Remove this member?')) return;
  SiteData.allMembers = SiteData.allMembers.filter(m => m.id !== id);
  renderTeam(); renderAdminMembers();
  dbDeleteMember(id).catch(console.warn);
}
function editMember(id) {
  const m = SiteData.allMembers.find(m => m.id === id); if (!m) return;
  const deptOpts = SiteData.departments.map(d =>
    `<option value="${d.id}"${m.dept === d.id ? ' selected' : ''}>${d.name}</option>`).join('');
  openEditModal('Edit Member', `<div class="admin-form">
    <div><label>Name</label><input id="em_name" value="${m.name}"></div>
    <div><label>Role / Position</label><input id="em_role" value="${m.role}"></div>
    <div><label>Department</label><select id="em_dept">${deptOpts}</select></div>
    <div><label>Course / Degree</label><input id="em_course" value="${m.course||''}"></div>
    <div><label>University</label><input id="em_univ" value="${m.univ}"></div>
    <div><label>Joined / Appointed</label><input id="em_appointed" value="${m.appointed}"></div>
    <div><label>Bio (short description)</label><textarea id="em_bio" style="min-height:80px">${m.bio||''}</textarea></div>
    <div><label>LinkedIn URL (optional)</label><input id="em_linkedin" value="${m.linkedin||''}" placeholder="https://linkedin.com/in/..."></div>
    <div><label>Instagram URL (optional)</label><input id="em_instagram" value="${m.instagram||''}" placeholder="https://instagram.com/..."></div>
  </div>`, () => {
    m.name      = document.getElementById('em_name').value;
    m.role      = document.getElementById('em_role').value;
    m.dept      = document.getElementById('em_dept').value;
    m.course    = document.getElementById('em_course').value;
    m.univ      = document.getElementById('em_univ').value;
    m.appointed = document.getElementById('em_appointed').value;
    m.bio       = document.getElementById('em_bio').value;
    m.linkedin  = document.getElementById('em_linkedin').value;
    m.instagram = document.getElementById('em_instagram').value;
    renderTeam(); renderAdminMembers();
    dbSaveMember(m).catch(console.warn);
  });
}
function addMemberAdmin() {
  const v = id => document.getElementById(id).value.trim();
  if (!v('newMemName')) { alert('Name required.'); return; }
  SiteData.allMembers.push({
    id:        Date.now(),
    name:      v('newMemName'),
    role:      v('newMemRole'),
    dept:      document.getElementById('newMemDept').value,
    course:    v('newMemCourse'),
    univ:      v('newMemUniv'),
    photo:     '',
    bio:       v('newMemBio'),
    linkedin:  '',
    instagram: '',
    appointed: v('newMemAppointed') || new Date().getFullYear().toString()
  });
  ['newMemName','newMemRole','newMemCourse','newMemUniv','newMemBio','newMemAppointed'].forEach(id =>
    document.getElementById(id).value = '');
  renderTeam(); renderAdminMembers(); showSuccess('memberAddSuccess');
  dbSaveMember(SiteData.allMembers[SiteData.allMembers.length-1]).catch(console.warn);
}

/* =============================================
   ADMIN: GALLERY
   ============================================= */
function renderAdminGallery() {
  const c = document.getElementById('adminGalleryList'); if (!c) return;
  c.innerHTML = `<div class="admin-gallery-grid">${SiteData.gallery.map(g => `
    <div class="admin-gallery-tile" id="agt-${g.id}">
      <div class="admin-gallery-tile__img-wrap">
        ${g.img
          ? `<img src="${g.img}" alt="${g.label}">`
          : `<div class="admin-gallery-tile__empty">&#128247;<br>No image</div>`
        }
        <div class="admin-gallery-tile__actions">
          <label class="admin-gallery-tile__btn admin-gallery-tile__btn--upload" title="Upload / change image">
            &#128247;
            <input type="file" accept="image/*" style="display:none" onchange="uploadGalleryImg(${g.id},this)">
          </label>
          <button class="admin-gallery-tile__btn admin-gallery-tile__btn--delete" onclick="deleteGalleryItem(${g.id})" title="Delete">&#10005;</button>
        </div>
      </div>
      <div class="admin-gallery-tile__label">${g.label}</div>
    </div>`).join('')}
  </div>`;
}
function uploadGalleryImg(id, input) {
  readImg(input.files[0], src => {
    const g = SiteData.gallery.find(g => g.id === id);
    if (g) { g.img = src; renderGallery(); renderAdminGallery(); dbSaveGallery(g).catch(console.warn); }
  });
}
function addGalleryItem() {
  const label = document.getElementById('newGalleryLabel').value.trim();
  if (!label) { alert('Caption required.'); return; }
  SiteData.gallery.push({ id: Date.now(), img: '', label, wide: false });
  document.getElementById('newGalleryLabel').value = '';
  renderGallery(); renderAdminGallery(); showSuccess('galleryAddSuccess');
  dbSaveGallery(SiteData.gallery[SiteData.gallery.length-1]).catch(console.warn);
}
function deleteGalleryItem(id) {
  if (!confirm('Remove this image?')) return;
  SiteData.gallery = SiteData.gallery.filter(g => g.id !== id);
  renderGallery(); renderAdminGallery();
  dbDeleteGallery(id).catch(console.warn);
}

/* =============================================
   ADMIN: RESOURCES
   ============================================= */
function renderAdminResources() {
  const c = document.getElementById('adminResourcesList'); if (!c) return;
  c.innerHTML = SiteData.resources.map(r => `
    <div class="admin-card">
      <div class="admin-card__header">
        <div>
          <div class="admin-card__title">${r.title}</div>
          <div class="admin-card__sub">${r.type} &bull; ${r.file}</div>
        </div>
        <div class="admin-btn-row">
          <button class="btn-delete-sm" onclick="deleteResource(${r.id})">Delete</button>
        </div>
      </div>
    </div>`).join('');
}
let _pendingPDF = { name: '', data: '' };

function uploadResourcePDF(input) {
  const file = input.files[0];
  if (!file) return;
  _pendingPDF.name = file.name;
  const preview = document.getElementById('pdfPreview');
  if (preview) preview.textContent = file.name;
  const reader = new FileReader();
  reader.onload = e => { _pendingPDF.data = e.target.result; };
  reader.readAsDataURL(file);
}

function addResource() {
  const title = document.getElementById('newResTitle').value.trim();
  const type  = document.getElementById('newResType').value;
  if (!title) { alert('Title required.'); return; }
  SiteData.resources.push({
    id: Date.now(), title, type,
    file:     _pendingPDF.data  || '',
    fileName: _pendingPDF.name  || title + '.pdf',
    icon: type === 'Newsletter' ? '📰' : '📄'
  });
  document.getElementById('newResTitle').value = '';
  _pendingPDF = { name: '', data: '' };
  const preview = document.getElementById('pdfPreview');
  if (preview) preview.textContent = 'No file selected';
  renderResources(); renderAdminResources(); showSuccess('resourceAddSuccess');
  dbSaveResource(SiteData.resources[SiteData.resources.length-1]).catch(console.warn);
}
function deleteResource(id) {
  if (!confirm('Remove this resource?')) return;
  SiteData.resources = SiteData.resources.filter(r => r.id !== id);
  renderResources(); renderAdminResources();
  dbDeleteResource(id).catch(console.warn);
}

/* =============================================
   ADMIN: STATS
   ============================================= */
function renderAdminStats() {
  document.getElementById('statMembers').value  = SiteData.stats.members;
  document.getElementById('statEvents').value   = SiteData.stats.events;
  document.getElementById('statLectures').value = SiteData.stats.lectures;
  document.getElementById('statYears').value    = SiteData.stats.years;
}
function updateStats() {
  SiteData.stats.members  = document.getElementById('statMembers').value;
  SiteData.stats.events   = document.getElementById('statEvents').value;
  SiteData.stats.lectures = document.getElementById('statLectures').value;
  SiteData.stats.years    = document.getElementById('statYears').value;
  renderStats(); showSuccess('statsSuccess');
  dbSaveStats(SiteData.stats).catch(console.warn);
}

/* =============================================
   ADMIN: CHANGE PASSWORD
   ============================================= */
function changePassword() {
  const current = document.getElementById('pwCurrent').value;
  const newPw   = document.getElementById('pwNew').value;
  const confirm = document.getElementById('pwConfirm').value;
  const errEl   = document.getElementById('pwError');
  const okEl    = document.getElementById('pwOk');
  errEl.style.display = 'none'; okEl.style.display = 'none';
  if (!current || !newPw || !confirm) {
    errEl.textContent = 'All fields are required.'; errEl.style.display = 'block'; return;
  }
  if (current !== ADMIN_PASSWORD) {
    errEl.textContent = 'Current password is incorrect.'; errEl.style.display = 'block'; return;
  }
  if (newPw.length < 6) {
    errEl.textContent = 'New password must be at least 6 characters.'; errEl.style.display = 'block'; return;
  }
  if (newPw !== confirm) {
    errEl.textContent = 'Passwords do not match.'; errEl.style.display = 'block'; return;
  }
  ADMIN_PASSWORD = newPw;
  document.getElementById('pwCurrent').value = '';
  document.getElementById('pwNew').value = '';
  document.getElementById('pwConfirm').value = '';
  okEl.style.display = 'block';
  setTimeout(() => okEl.style.display = 'none', 3500);
}


/* =============================================
   EDIT MODAL
   ============================================= */
let editModalCallback = null;
function openEditModal(title, bodyHTML, onSave) {
  editModalCallback = onSave;
  document.getElementById('editModalTitle').textContent = title;
  document.getElementById('editModalBody').innerHTML    = bodyHTML;
  document.getElementById('editModal').classList.add('open');
}
function closeEditModal() { document.getElementById('editModal').classList.remove('open'); }
function saveEditModal()  { if (editModalCallback) editModalCallback(); closeEditModal(); }

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', async () => {
  initNavbar();
  initContactForm();
  initScrollAnim();

  /* Load from Supabase, seed if first run, then render */
  await dbSeedIfEmpty();
  await dbLoadAll();

  renderStats();
  renderEvents();
  renderLectures();
  renderTeam();
  renderGallery();
  renderResources();

  document.addEventListener('keydown', e => {
    if (document.getElementById('lightbox').classList.contains('open')) {
      if (e.key === 'ArrowLeft')  lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
      if (e.key === 'Escape')     closeLightbox();
    }
    if (document.getElementById('editModal').classList.contains('open') && e.key === 'Escape')
      closeEditModal();
  });

  document.getElementById('adminPassword') &&
    document.getElementById('adminPassword')
      .addEventListener('keydown', e => { if (e.key === 'Enter') adminLogin(); });
});
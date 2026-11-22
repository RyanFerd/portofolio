// =====================================================================
//  Semua teks website ada di file ini. Edit di sini saja.
//  Field yang dikosongkan ('') otomatis disembunyikan dari tampilan.
// =====================================================================

export const profile = {
  name: 'Ryan Ferdiansyah',
  first: 'Ryan',
  last: 'Ferdiansyah',
  monogram: 'RF',
  role: 'Full-Stack Developer',
  tagline: 'I build web and mobile products from the database up.',
  status: 'Open to new opportunities', // kosongkan '' untuk menyembunyikan
  region: 'Sidoarjo, Indonesia',
  timezone: 'Asia/Jakarta',
  timezoneLabel: 'WIB',
  email: 'ryanferdiansyah90@gmail.com',
  github: 'https://github.com/RyanFerd',
  instagram: 'https://www.instagram.com/ryan_ferd', // TODO: isi, contoh 'https://instagram.com/usernamekamu'
  linkedin: 'https://www.linkedin.com/in/ryanferdiansyah22',
  // TODO: tempel link share Google Drive CV (Anyone with the link: Viewer).
  // Link biasa "drive.google.com/file/d/ID/view" otomatis diubah jadi link download.
  cv: 'https://drive.google.com/file/d/1WMXsceasaRAMUJcvOQsZ7AFpLw5F0dqa/view?usp=sharing',
};

// Mengubah link share Google Drive menjadi link download langsung.
export const downloadUrl = (url) => {
  if (!url) return '';
  const m = url.match(/drive\.google\.com\/file\/d\/([^/?#]+)/) || url.match(/drive\.google\.com\/.*[?&]id=([^&]+)/);
  return m ? `https://drive.google.com/uc?export=download&id=${m[1]}` : url;
};

export const marquee = [
  'React', 'Node.js', 'Express.js', 'MongoDB', 'Laravel', 'PHP', 'MySQL', 'Flutter', 'REST APIs', 'Git',
];

export const about = {
  statement:
    "I'm a full-stack developer and a graduate of Universitas Negeri Surabaya (Information Systems, GPA 3.65 / 4.00). My thesis, Gerbang Beasiswa, is a scholarship recommendation system I built alone on the MERN stack, reaching an average precision of 92% in testing. I'm comfortable with MySQL, Laravel and React, design ERDs, optimize SQL queries, and build web and mobile apps. I've also worked as a Junior Database SQL Developer at LLDIKTI Region VII and completed a 900-hour full-stack program at Celerates.",
  facts: [
    { label: 'Education', value: 'S1 Information Systems, Universitas Negeri Surabaya' },
    { label: 'Core stack', value: 'MERN, Laravel, MySQL' },
    { label: 'Based in', value: 'Sidoarjo, Indonesia (WIB)' },
  ],
};

export const skills = [
  { group: 'Backend and full-stack', items: ['PHP', 'JavaScript', 'Node.js', 'Express.js', 'RESTful API', 'React', 'Vue.js', 'Laravel', 'HTML', 'CSS'] },
  { group: 'Database and data', items: ['MySQL', 'MongoDB', 'ERD', 'Schema design', 'Normalization', 'SQL / NoSQL queries', 'Stored procedures', 'Query optimization'] },
  { group: 'Recommendation systems', items: ['Content-Based Filtering', 'Euclidean Distance'] },
  { group: 'Mobile', items: ['Flutter', 'SQFLite'] },
  { group: 'Tools and practice', items: ['Git', 'GitHub', 'CI/CD and deployment', 'UAT', 'Penetration testing', 'Black box testing', 'Project management', 'Technical documentation'] },
  { group: 'Soft skills', items: ['Communication', 'Teamwork', 'Public speaking', 'Analytical', 'Detail-oriented', 'Fast learner'] },
  { group: 'Languages', items: ['Indonesian', 'English (TEP 450)'] },
];

// Angka yang menghitung naik saat terlihat (bagian Experience).
export const highlights = [
  { to: 3.65, decimals: 2, label: 'GPA out of 4.00, S1 Information Systems' },
  { to: 900, label: 'hours of full-stack training, Celerates CAMP' },
  { to: 92.69, decimals: 2, label: 'final score, Celerates CAMP Batch 1' },
  { to: 92, suffix: '%', label: 'average precision, Gerbang Beasiswa thesis' },
];

// Pengalaman kerja baru: tambahkan di PALING ATAS array `work`.
export const experience = {
  work: [
    {
      role: 'Junior Database SQL Developer (Internship)',
      org: 'Lembaga Layanan Pendidikan Tinggi Wilayah VII, Surabaya',
      period: 'Feb 2024 – Jun 2024',
      points: [
        'Designed the ERD and implemented the MySQL schema for the Prospective Graduate Verification Application.',
        'Wrote and optimized SQL queries and stored procedures to make data processing more efficient.',
        'Tested the system and ran penetration tests on the "Kelembagaan" website to protect security and data integrity.',
        'Worked across divisions with the development team to produce comprehensive technical documentation.',
      ],
    },
  ],
  education: [
    {
      role: 'S1 Information Systems',
      org: 'Universitas Negeri Surabaya',
      period: 'Aug 2021 – Jul 2026',
      points: [
        'GPA 3.65 / 4.00.',
        'Thesis: a scholarship recommendation system using Content-Based Filtering with Euclidean Distance (MERN stack), with an average precision of 92%.',
      ],
    },
  ],
  training: [
    {
      role: 'Celerates Mastery Program (CAMP) Batch 1, Full Stack Development',
      org: 'PT Mitra Talenta Grup, Indonesia',
      period: 'Sep 2024 – Dec 2024',
      points: [
        'Intensive 900-hour program (23 Sep – 23 Dec 2024) with a final score of 92.69 and attendance above 90%.',
        'Top scores: Basic Programming 99.00, Back-End Development (REST API) 96.00, Project Management 95.25, Front-End Development 94.48.',
        'Learned SQL and databases, built CI/CD pipelines, and applied project methodology and planning.',
        'Final project (150 hours, score 91.05): an end-to-end bookshelf website with React (JSX), JavaScript and MySQL, built on a provided dataset.',
        'Soft skill certificates: User Acceptance Testing, Public Speaking, and Interview and CV Preparation.',
      ],
    },
    {
      role: 'Test of English Proficiency (TEP)',
      org: 'Pusat Bahasa UNESA',
      period: '14 May 2025',
      points: ['Total score 450: Listening 45, Structure and Written Expression 43, Reading 47.'],
    },
  ],
  organizations: [
    {
      role: 'Member, Information and Design Division',
      org: 'Forum Komunikasi Mahasiswa Bojonegoro Unesa (FKMB UNESA)',
      period: 'Nov 2022 – Nov 2023',
      points: [
        'Active in the Information and Design Division and trusted as Coordinator of Design, Documentation, Public Relations and Security across programs such as the FKMB Futsal Competition, Community Service, PKKMB, and Tryout and Talkshow.',
        'Fully responsible for Instagram visual content, event documentation and promotional material, and for coordinating event logistics and security.',
      ],
    },
  ],
};

// liveLink / githubLink: isi URL asli. Kosong atau '#' = tombol disembunyikan.
// image: nama file di components/Image/. File belum ada atau kosong = tanpa gambar.
// year kosong = tidak ditampilkan.
export const projects = [
  {
    title: 'Gerbang Beasiswa',
    kind: 'Web application',
    year: '2025 – 2026',
    description:
      "My undergraduate thesis: a scholarship recommendation website that I built alone with the MERN stack and Rapid Application Development. Admins manage scholarship data, and students can search and filter. Content-Based Filtering with Euclidean Distance matches a student's academic and economic profile to scholarship requirements, so nobody has to sift through scholarships by hand. Average precision of 92% in testing.",
    image: 'gerbangbeasiswa.png',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    liveLink: 'https://gerbangbeasiswa.id/',
    githubLink: '',
  },
  {
    title: 'Tecnopolis',
    kind: 'Web and mobile app',
    year: '2023',
    description:
      'A smart-city app that lets people apply digitally for permits to establish and run educational institutions, on web and mobile. I worked as a developer on it for the Project Management course.',
    image: 'project1.png',
    technologies: ['Laravel', 'Flutter', 'PHP', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'Verifikasi Wisudawan',
    kind: 'Web application',
    year: '2024',
    description:
      'Compares the graduate candidate data submitted by private universities (PTS) against PDDIKTI records. Comes with a requirements document that specifies what the system has to do.',
    image: 'project5.png',
    technologies: ['JavaScript', 'CSS', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'Getcafesby',
    kind: 'Web application',
    year: '2023',
    description:
      'Helps people in Surabaya find coffee shops and co-working spaces that fit what they need, and shows why data management matters for a cafe business.',
    image: 'project2.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'Dream Bakery',
    kind: 'E-commerce',
    year: '2023',
    description:
      'An e-commerce website for selling chocolate. It supports direct purchases, product promotion, and lessons on how chocolate is made.',
    image: 'project3.png',
    technologies: ['PHP', 'MySQL', 'CSS', 'JavaScript'],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'Suka Maju Car Rental',
    kind: 'Database system',
    year: '2022',
    description:
      'A car rental application I led as an early coursework project, applying the basics of database technology and learning what data management a rental business needs.',
    image: '',
    technologies: [],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'Daftar Tugasku',
    kind: 'Mobile app',
    year: '',
    description:
      'A to-do app built with Flutter and SQLite. It works offline, feels the same across platforms, and keeps task management simple.',
    image: 'project4.png',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    liveLink: '',
    githubLink: '',
  },
];

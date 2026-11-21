// =====================================================================
//  Semua teks website ada di file ini. Edit di sini saja.
//  Field yang dikosongkan ('') otomatis disembunyikan dari tampilan.
// =====================================================================

export const profile = {
  name: 'Ryan Ferdiansyah',
  first: 'Ryan',
  last: 'Ferdiansyah',
  monogram: 'RF',
  role: 'Backend and Full-Stack Developer',
  tagline: 'I build web and mobile products from the database up.',
  status: 'Open to new opportunities', // kosongkan '' untuk menyembunyikan
  region: 'Indonesia',
  timezone: 'Asia/Jakarta',
  timezoneLabel: 'WIB',
  email: 'ryanferdiansyah90@gmail.com',
  github: 'https://github.com/RyanFerd',
  instagram: 'https://instagram.com/ryan_ferd', // TODO: isi, contoh 'https://instagram.com/usernamekamu'
  linkedin: 'https://instagram.com/ryan_ferd',  // TODO: isi URL LinkedIn asli
  // TODO: tempel link share Google Drive CV (Anyone with the link: Viewer).
  // Link biasa "drive.google.com/file/d/ID/view" otomatis diubah jadi link download.
  cv: 'https://drive.google.com/file/d/1OXLaoQ9JrhJ1JrVZWxzWyjkYv0HZ-wjR/view?usp=sharing',
};

// Mengubah link share Google Drive menjadi link download langsung.
export const downloadUrl = (url) => {
  if (!url) return '';
  const m = url.match(/drive\.google\.com\/file\/d\/([^/?#]+)/) || url.match(/drive\.google\.com\/.*[?&]id=([^&]+)/);
  return m ? `https://drive.google.com/uc?export=download&id=${m[1]}` : url;
};

export const marquee = [
  'PHP', 'Node.js', 'React', 'MySQL', 'MongoDB', 'Flutter', 'REST APIs', 'Git',
];

export const about = {
  statement:
    "I'm a backend and full-stack developer with a Bachelor's in Information Systems from Universitas Negeri Surabaya (GPA 3.65 / 4.00). I design ERDs and MySQL schemas, optimize SQL queries and stored procedures, and build web and mobile apps end to end. After an internship as a database developer at LLDIKTI Region VII and 600+ hours of full-stack training at Celerates, I'm ready to contribute to backend, full-stack and data work.",
  facts: [
    { label: 'Education', value: 'S1 Information Systems, Universitas Negeri Surabaya' },
    { label: 'Core stack', value: 'PHP, Node.js, React, MySQL' },
    { label: 'Languages', value: 'Indonesian, English (TEP 450)' },
  ],
};

export const skills = [
  { group: 'Backend and full-stack', items: ['PHP', 'JavaScript', 'Node.js', 'RESTful API', 'React', 'Vue.js', 'HTML', 'CSS'] },
  { group: 'Database and data', items: ['MySQL', 'MongoDB', 'ERD', 'Schema design', 'Normalization', 'SQL / NoSQL queries', 'Stored procedures', 'Query optimization'] },
  { group: 'Mobile', items: ['Flutter', 'SQFLite'] },
  { group: 'Tools and practice', items: ['Git', 'GitHub', 'CI/CD and deployment', 'UAT', 'Penetration testing', 'Project management', 'Technical documentation'] },
  { group: 'Soft skills', items: ['Communication', 'Teamwork', 'Public speaking', 'Analytical', 'Detail-oriented', 'Fast learner'] },
];

// Angka yang menghitung naik saat terlihat (bagian Experience).
export const highlights = [
  { to: 3.65, decimals: 2, label: 'GPA out of 4.00, S1 Information Systems' },
  { to: 600, suffix: '+', label: 'hours of full-stack training, Celerates CAMP' },
  { to: 92.69, decimals: 2, label: 'final score, Celerates CAMP Batch 1' },
  { to: 450, label: 'TEP English proficiency score' },
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
      period: '2021 – 2026',
      points: ['GPA 3.65 / 4.00'],
      chips: true,
    },
  ],
  training: [
    {
      role: 'Celerates Mastery Program (CAMP) Batch 1, Full Stack Developer',
      org: 'PT Mitra Talenta Grup',
      period: 'Sep 2024 – Dec 2024',
      points: [
        'Intensive 600+ hour program with a final score of 92.69.',
        'Covered full-stack web development, MySQL databases, CI/CD and project management.',
        'Designed an end-to-end final project, plus training in UAT, public speaking and interview preparation.',
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
        'Trusted as Design and Documentation Coordinator, Public Relations, and Security for the FKMB Futsal Competition, Community Service, PKKMB, and Tryout and Talkshow programs.',
        'Managed Instagram visual content, event documentation and promotional material, and coordinated event logistics and security.',
      ],
    },
  ],
};

// liveLink / githubLink: isi URL asli. Kosong atau '#' = tombol disembunyikan.
// image kosong = tanpa preview gambar. year kosong = tidak ditampilkan.
export const projects = [
  {
    title: 'Gerbang Beasiswa',
    kind: 'Web application',
    year: '2025',
    description:
      'Gerbang Beasiswa is an educational technology platform developed to simplify scholarship discovery and address information overload among students. Built as part of my undergraduate thesis, it implements a Content-Based Filtering approach using the Euclidean Distance algorithm to analyze students academic and financial profiles and recommend scholarships that best match their eligibility and needs.',
    image: 'gerbangbeasiswa.png',
    technologies: ['React.js','MongoDB', 'Express.js', 'Node.js'],
    liveLink: 'https://gerbangbeasiswa.id/',
    githubLink: '',
  },
  {
    title: 'Tecnopolis',
    kind: 'Web and mobile app',
    year: '2023',
    description:
      'A smart-city app that simplifies applications for permits to establish and run educational institutions. I was fully responsible for its development, with a focus on data management to support business functions and improve performance.',
    image: 'project1.png',
    technologies: ['Laravel','Flutter', 'PHP', 'MySQL'],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'Verifikasi Wisudawan',
    kind: 'Web application',
    year: '',
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
      'Helps people find coffee shops and co-working spaces that fit what they need, making information about places easier to reach.',
    image: 'project2.png',
    technologies: ['HTML', 'CSS'],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'Suka Maju Car Rental',
    kind: 'Database system',
    year: '2022',
    description:
      "Led the design and development of a car rental application built around database technology, improving the efficiency and performance of the company's database system.",
    image: '',
    technologies: [],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'Dream Bakery',
    kind: 'Online shop',
    year: '',
    description:
      'An online pastry shop where customers browse, choose and order from anywhere, at any time.',
    image: 'project3.png',
    technologies: ['PHP', 'CSS', 'MySQL'],
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

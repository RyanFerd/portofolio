import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML5", image: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3433873/html5-icon-md.png" },
        { name: "CSS3", image: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png" },
        { name: "JavaScript", image: "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" },
        { name: "React.js", image: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3218760/reactjs-icon-md.png" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "PHP", image: "https://pngimg.com/uploads/php/php_PNG23.png" },
        { name: "Node.js", image: "https://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png" },
        { name: "RESTful API", image: "https://miro.medium.com/v2/resize:fit:1200/1*-dbPsi8Mdqj5Y0454eGvPQ.png" },
        { name: "Git/GitHub", image: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912097/git-icon-md.png" }
      ]
    },
    {
      category: "Mobile & Database",
      items: [
        { name: "Flutter", image: "https://seekicon.com/free-icon-download/flutter_2.png" },
        { name: "Laravel", image: "https://logospng.org/download/laravel/logo-laravel-icon-1024.png" },
        { name: "MySQL", image: "https://pngimg.com/uploads/mysql/mysql_PNG22.png" },
        { name: "NoSQL", image: "https://cdn0.iconfinder.com/data/icons/database-64/32/nosql_no_sql_unstructured_database_database_model-1024.png" }
      ]
    }
  ];

  const experiences = {
    work: [
      {
        title: "Junior Database SQL Developer",
        company: "Lembaga Layanan Pendidikan Tinggi Wilayah VII",
        period: "Feb 2024 - Jun 2024",
        descriptions: [
          "Designing and implementing an SQL database for the Prospective Graduate Verification Application, including creating an ERD, implementing it in MySQL by creating tables, defining columns, attributes, and relationships between tables according to the design, as well as evaluating and improving the table structure, relationships, functions, and procedures.",
          "Preparing comprehensive documentation related to the application database, including details of changes to the database structure, tables, columns, relationships, functions, and procedures, as well as documentation of the databases used before and after implementation.",
          "Conducting penetration testing on the web application to identify and mitigate potential security vulnerabilities."
        ]
      }
    ],
    organization: [
      {
        title: "Forum Komunikasi Mahasiswa Bojonegoro Unesa",
        organization: "FKMB UNESA",
        period: "Nov 2022 - Nov 2023",
        descriptions: [
          "FKMB Futsal Competition (FFC)",
          "Pengabdian Masyarakat",
          "Penyambutan Mahasiswa Baru FKMB UNESA 2023",
          "FKMB Mengajar",
          "Pelatihan Desain",
          "Tryout and Talkshow FKMB UNESA"
        ]
      }
    ]
  };

  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-text">
          <p>
          I am a passionate young Full-Stack Developer currently in my 7th semester at Universitas Negeri Surabaya. I have expertise in web development using HTML, CSS, JavaScript, and ReactJS for the Front-End, and PHP and NodeJS for the Back-End. I am experienced in implementing RESTful APIs and using Git/GitHub for project collaboration. In database management, I specialize in schema design, normalization, and query optimization in MySQL, with a strong understanding of NoSQL concepts. With a detail-oriented approach and strong technical knowledge, I am ready to tackle challenges in the software development field.
          </p>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h4 className="category-title">{skillGroup.category}</h4>
                <div className="skills-items">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <img 
                        src={skill.image} 
                        alt={skill.name} 
                        className="skill-icon"
                      />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <div className="experience-column">
            <h3 className="experience-title">Work Experience</h3>
            <div className="experience-items">
              {experiences.work.map((exp, index) => (
                <div key={index} className="experience-item work">
                  <h4 className="experience-role">{exp.title}</h4>
                  <p className="experience-company">{exp.company} • {exp.period}</p>
                  <ul className="experience-description-list">
                    {exp.descriptions.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-column">
            <h3 className="experience-title">Organization Experience</h3>
            <div className="experience-items">
              {experiences.organization.map((exp, index) => (
                <div key={index} className="experience-item organization">
                  <h4 className="experience-role">{exp.title}</h4>
                  <p className="experience-company">{exp.organization} • {exp.period}</p>
                  <ul className="experience-description-list">
                    {exp.descriptions.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'fer-naldy',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Featured Projects',
      mode: 'manual', // <--- Kunci utamanya di sini, kita set manual
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        // Daftar repo yang beneran mau ditampilin (bebas gunung abu-abu)
        projects: [
          'fer-naldy/Topic-Level-Sentiment-Analysis-to-User-Reviews-of-the-PLN-Mobile-Application-on-Google-Play-Store',
          'fer-naldy/Multi-Platform-API-Data-Scraping',
          'fer-naldy/Online-Bookstore-Database-System',
          'fer-naldy/EDA-Data-Mining-on-Health-Data',
          'fer-naldy/Exploratory-Data-Analysis-vabout-Building-Energy-Usage',
          'fer-naldy/Tweet-Sentiment-Analysis-of-the-Johnny-Depp-and-Amber-Heard-Case-on-Twitter'
        ],
      },
    },
    external: {
      header: 'My Projects',
      projects: [], // <--- Dikosongkan biar gak ada placeholder gunung
    },
  },
  seo: { title: 'Fernaldy - Data Analyst Portfolio', description: 'Statistics graduate and Data Analyst', imageURL: '' },
  social: {
    linkedin: 'fer-naldy',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '+6285779145947',
    email: 'fernaldyy12@gmail.com',
  },
  resume: {
    fileUrl: 'https://raw.githubusercontent.com/fer-naldy/fer-naldy.github.io/main/CV_Fernaldy_2026.pdf', 
  },
  skills: [
    // Programming, BI, & Database
    'Python', 'R', 'SQL', 'MySQL', 'SQLite', 'Microsoft Power BI', 'Power Query', 'Microsoft Excel',
    // Data Analysis & Modeling
    'Statistical Modeling', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'BERT', 'Regression Analysis', 'Time Series Analysis', 'Hypothesis Testing', 'EDA',
    // Data Engineering
    'ETL (Extract, Transform, Load)', 'Data Cleaning', 'Data Validation',
    // Libraries & Tools
    'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'LaTeX',
  ],
  experiences: [
    {
      company: 'PT Bank Danamon Indonesia Tbk',
      position: 'IT Financial Control Analyst Intern',
      from: 'May 2026',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Kementerian Perindustrian Republik Indonesia',
      position: 'Industrial Data Analyst Intern (MSIB)',
      from: 'Sep 2024',
      to: 'Dec 2024',
      companyLink: '',
    },
    {
      company: 'Pojok Statistik',
      position: 'Agent of Statistics for Services and Consultations',
      from: 'Feb 2024',
      to: 'Sep 2024',
      companyLink: '',
    },
    {
      company: 'LOGIKA UI 2024',
      position: 'Vice Head of Secretarial Division',
      from: 'Jun 2023',
      to: 'Feb 2024',
      companyLink: '',
    },
    {
      company: 'TOSSAKA 19th',
      position: 'Head of Secretarial Division',
      from: 'May 2022',
      to: 'Jan 2023',
      companyLink: '',
    },
    {
      company: 'HMD Matematika FMIPA UI',
      position: 'Administration and Secretarial Bureau Intern',
      from: 'Nov 2021',
      to: 'Feb 2022',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Universitas Indonesia',
      degree: 'Bachelor of Statistics (GPA: 3.34/4.00)',
      from: 'Aug 2021',
      to: 'Jan 2026',
    },
  ],
  publications: [],
  blog: {
    source: '',
    username: '',
    limit: 0,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'autumn',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'autumn',
      'coffee',
      'garden',
      'lofi',
      'wireframe'
    ],
  },
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;

// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'fer-naldy',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Topic-Level Sentiment Analysis (PLN Mobile)',
          description:
            'Executed advanced topic-level sentiment analysis on user reviews using BERT-NN, achieving 96% classification accuracy, and BERT-EFCM for topic extraction.',
          imageUrl: '',
          link: 'https://github.com/fer-naldy/Topic-Level-Sentiment-Analysis-to-User-Reviews-of-the-PLN-Mobile-Application-on-Google-Play-Store',
        },
        {
          title: 'Multi-Platform API Data Scraping',
          description:
            'Built an end-to-end Python-based API data scraping pipeline, extracting data from multiple platforms, transforming complex JSON responses into structured datasets with Pandas.',
          imageUrl: '',
          link: 'https://github.com/fer-naldy/Multi-Platform-API-Data-Scraping',
        },
        {
          title: 'Online Bookstore Database System',
          description:
            'Designed and implemented a SQL-based online bookstore database supporting full CRUD operations and customer purchase analysis to enable personalized recommendations.',
          imageUrl: '',
          link: 'https://github.com/fer-naldy/Online-Bookstore-Database-System',
        },
        {
          title: 'EDA & Data Mining on Health Data',
          description:
            'Identified key health insights using Logistic Regression, revealing the most prevalent diseases and the effects of marital status and obesity on mental health outcomes.',
          imageUrl: '',
          link: 'https://github.com/fer-naldy/EDA-Data-Mining-on-Health-Data',
        },
      ],
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

export const state = () => ({
  item: {
    name: 'Eddy Mhalli',
    picture: './photo.webp',
    headline : "💻 Lead Node.js/Vue.js developer 🤓 All around the world 🌍",
    summary : `
      As IT lover, I spend all my time to explore the unknow technologies and innovations.
      My schooling way gave me a better outlook, vision, about the professional world and helped me to see more clearly about my desires.
      My main is challenge: to be a good IT leader.`,
	  languages: [{
      code: 'fr',
      picture: './flag-french.png',
    }, {
      code: 'en',
      picture: './flag-english.png',
    }],
    externalLinks: [{
      link: 'tel:+84933612640',
      color: 'grey lighten-2',
      icon: 'mdi-phone',
      shortName: '+84 933 612 640',
    }, {
      link: 'tel:+33627036969',
      color: 'green lighten-1',
      icon: 'mdi-whatsapp',
      shortName: '+33 6 27 03 69 69',
    }, {
      link: 'mailto:eddy.mhalli@gmail.com',
      color: 'pink accent-4',
      icon: 'mdi-gmail',
      shortName: 'eddy.mhalli@gmail.com',
    }, {
      link: 'https://fr.linkedin.com/in/eddy-mhalli-232527a7',
      color: 'blue lighten-1',
      icon: 'mdi-linkedin',
      shortName: 'eddy-mhalli-232527a7',
    }, {
      link: 'https://github.com/dobobaie',
      color: 'blue-grey lighten-3',
      icon: 'mdi-github',
      shortName: 'dobobaie',
    }],
    info: [{
      icon: 'mdi-flag',
      shortName: 'French',
    }, {
      icon: 'mdi-account',
      shortName: '26 yo',
    }, {
      icon: 'mdi-map-marker',
      shortName: 'Hồ Chí Minh',
    }],
    experiences : [{
      link: "http://eddy.mhalli.fr/",
      name: "Freelance",
      status: "Lead fullstack developer & IT Consultant",
      logo: "",
      start_date: "01/2019",
      end_date: "now",
      locality: "Hô-Chi-Minh, Vietnam",
      short_description: "Developping, consulting, supervasing and leading few projects around the world. Ex realization: platform e-learning, products catalogue, food/stuffs delivery process, tools & micro-services, etc.",
      description: "<p>Creation and project support: TokenVu, FlavorBox, Marketoi, Laprerentrée, Yummmy, etc...</p><p>As Fullstack Freelancer, my Job was to create few projects from scratch, to help and support existing projects, during all the project development. Plus help and shape the development team in the compagnies.</p>",
      pins: [
        'nodejs',
        'vuejs',
        'nuxt',
        'react',
        'docker',
        'ionic',
        'postgresql',
        'rabbitmq',
        'redis',
        'aws',
        'more',
      ],
      skills: [
        "NodeJs (koa)",
        "Docker",
        "PostgreSQL",
        "RabbitMQ",
        "Redis",
        "Google services",
        "MongoDB"
      ]
    }, {
      link: "http://artips.fr/",
      name: "Artips",
      status: "Lead fullstack Developer",
      logo: "/assets/photos/artips.jpg",
      start_date: "03/2020",
      end_date: "01/2021",
      locality: "Paris, France",
      short_description: `Projects's process setting up, team leader, technical referent, projects supervisor, developping and projects architecture improvement + others cool projects.`,
      description: "<p>Creation, restructuring, micro-service maintenances and CLI applications.</p><p> My work: architecture implementation, creation of various services/CLI and cleaning/optimization code debt.</ p>",
      pins: [
        'nodejs',
        'vuejs',
        'nuxt',
        'angularjs',
        'docker',
        'mongodb',
        'postgresql',
        'rabbitmq',
        'redis',
        'firebase',
        'more',
      ],
      skills: [
        "NodeJs (koa)",
        "Docker",
        "PostgreSQL",
        "RabbitMQ",
        "Redis",
        "TestRails",
        "Google services",
        "MongoDB",
        "Telegram bot"
      ]
    }, {
      link: "http://trusk.com/",
      name: "Trusk",
      status: "Node.Js & tools developer",
      logo: "/assets/photos/trusk.jpg",
      start_date: "01/2018",
      end_date: "01/2019",
      locality: "Paris, France",
      short_description: "Creation multiple micro-services, in charge of developing few app for delays/optimization/organization tours. Development of a new code base and project architectural.",
      description: "<p>Creation, restructuring, micro-service maintenances and CLI applications.</p><p> My work: architecture implementation, creation of various services/CLI and cleaning/optimization code debt.</ p>",
      pins: [
        'nodejs',
        'react',
        'docker',
        'mongodb',
        'postgresql',
        'rabbitmq',
        'redis',
        'aws',
        'google-cloud',
      ],
      skills: [
        "NodeJs (koa)",
        "Docker",
        "PostgreSQL",
        "RabbitMQ",
        "Redis",
        "TestRails",
        "Google services",
        "MongoDB",
        "Telegram bot"
      ]
    }, {
      link: "http://fearless-vr.com/",
      name: "Fearless VR",
      status: "Co-founder and fullstack developer",
      more: "End of studies project",
      logo: "/assets/photos/FEARLESS.png",
      start_date: "01/2015",
      end_date: "01/2018",
      locality: null,
      short_description: "Team leader & main developer. Creation of multiple app with socket system, reality virtual, using Unity as well, few backoffices, desktop and mobiles app, etc. Winner of Medical Innovation Incubator by Viva Tech 2017.",
      description: "<p>Fearless is software that uses virtual reality to help people with physichic disorders such as phobias, addictions, stress and blockages, through interactive 3D scenes in which patient can immerse and surpass his virtual limits to better manage them in real life.</p><p>My job at Fearless is to verify the vision of our project and to establish and update our schedules and budgets. Apart development, I also meet specialists and communicate with them and I remain attentive to each proposal that would improve the lives of its people.</p>",
      pins: [
        'nodejs',
        'angularjs',
        'docker',
        'ionic',
        'postgresql',
        'csharp',
        'redis',
        'aws',
        'unity',
        'vr',
        'more',
      ],
      skills: [
        "Project Management",
        "Architectural designer",
        "Angular 1",
        "Angular 4",
        "TypeScript",
        "NodeJs (es 6)",
        "Express",
        "Socket.IO", 
        "MeteorJs",
        "DevOps",
        "C# Unity"
      ]
    }, {
      link: "http://www.rs2i.fr/",
      name: "RS2I",
      status: "Node.Js developer",
      logo: "/assets/photos/rs2i.jpg",
      start_date: "08/2017",
      end_date: "01/2018",
      locality: "Paris, France",
      short_description: "Creation multiple micro-services for few projects.",
      pins: [],
      skills: [
        "NodeJs",
        "XML",
        "AngularJs (7)"
      ]
    }, {
      link: "http://seitosei.com/",
      name: "SEITOSEI",
      status: "Mobile & fullstack developer",
      logo: "/assets/photos/SEITOSEI.png",
      start_date: "08/2015",
      end_date: "08/2016",
      locality: "Levallois-Perret, France",
      short_description: "Creation of two ionic mobile app from scratch with an API made from Laravel. Carrying publication on Android, iOS and XP platforms. And others sub-projects.",
      pins: [],
      skills: [
        "Jquery",
        "AngularJs (v1)",
        "Ionic (v1)",
        "Bootstrap (scss)",
        "Php (laravel)",
        "NodeJs (express)",
        "Npm (gulp)",
        "Gitlab",
        "xCode",
        "Android (store)",
        "iOs (store)",
        "Windows phone (store)"
      ]
    }, {
      link: "http://www.belair-info.fr/",
      name: "Bel Air informatique",
      status: "Fullstack developer",
      logo: "/assets/photos/BELAIR.png",
      start_date: "08/2014",
      end_date: "01/2015",
      locality: "Paris, France",
      short_description: "Project was to create from scratch an extranet for insurance companies.",
      skills: [
        "Jquery",
        "Bootstrap (scss)",
        "PHP (symphony)",
        "SVN",
        "Delphi",
        "MySQL"
      ]
    }, {
      link: "http://eddy.mhalli.fr/",
      name: "Freelance",
      status: "Fullstack developer",
      logo: "",
      start_date: "01/2008",
      end_date: "01/2013",
      locality: "Paris, France",
      short_description: "",
      description: "Diverse freelance missions for any kind of company. Each time the purpose was to create the project from scratch.",
      skills: [
        "JS (jquery)",
        "Bootstrap",
        "PHP",
        "Autoit",
        "Webradio",
        "Shell",
        "MySQL"
      ]
    }],
    formations: [{
      name: "EPITECH",
      status: "Information Technology Expert",
      locality: "Paris, France",
      logo: "/assets/photos/EPITECH.png",
      start_date: "01/2013",
      end_date: "01/2018",
      description: "",
      degrees: [{
        name: "Master in Information Technology - BAC +5"
      }, {
        name: "Bachelor in Information Technology - BAC +3"
      }]
    }, {
      name: "Laval university",
      status: "Bachelor in Software Engineering - BAC +4",
      locality: "Quebec City, Canada",
      more: "Exchange program",
      logo: "/assets/photos/ULAVAL.jpg",
      start_date: "01/2016",
      end_date: "01/2017",
      description: "",
      degrees: [{
        name: "Certificate in software engineering - BAC +4"
      }]
    }, {
      name: "High School parc de Vilgénis",
      status: "Professional baccalaureate in digital electronic systems",
      locality: "Massy, France",
      logo: "/assets/photos/VILGENIS.png",
      start_date: "01/2010",
      end_date: "01/2013",
      description: "",
      degrees: [{
        name: "Professional baccalaureate in digital electronic systems"
      }, {
        name: "Patent of professional studies digital electronic systems"
      }]
    }],
    mainProgrammingTools: [
      'nodejs',
      'vuejs',
      'nuxt',
      'docker',
      'postgresql',
      'redis',
      'rabbitmq',
      'aws',
    ],
    hobbie: {
      description: 'and many more... Like movies, cooking, sharing and of course coding ❤️',
    },
    hobbies: [{
      icon: 'mdi-airplane-takeoff',
      name: 'Traveling',
      short_description: '',
    }, {
      icon: 'mdi-flask-outline',
      name: 'Science',
      short_description: '',
    }, {
      icon: 'mdi-diving-scuba',
      name: 'Diving',
      short_description: '',
    }, {
      icon: 'mdi-boxing-glove',
      name: 'Boxing',
      short_description: '',
    }],
    // projects: [{
    //   name: "Freelance",
    //   short_description: "",
    //   pins: [],
    // }]
  },
});
  
// export const mutations = {
//   setItem(state: any, item: any): void {
//     state.item = (item && Object.assign({}, state.item, item)) || null;
//   },
//   removeItem(state: any): void {
//     state.item = null;
//   },
// };
  
export const getters = {
  get(state: any): any {
    return state.item;
  },
};

export const namespaced: boolean = true;
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    name: 'Denise Truong',
    picture: './photo.jpg',
    headline: 'TEDx Speaker | Certified Trainer & Coach | APAC-based',
    summary: ``,
    languages: [
      {
        code: 'fr',
        picture: './flag-french.png',
      },
      {
        code: 'en',
        picture: './flag-english.png',
      },
      {
        code: 'cn',
        picture: './flag-chinese.png',
      },
    ],
    externalLinks: [
      {
        link: 'tel:+33768747346',
        color: 'green lighten-1',
        icon: 'mdi-whatsapp',
        shortName: '+33 7 68 74 73 46',
      },
      {
        link: 'mailto:denise.tru@gmail.com',
        color: 'pink accent-4',
        icon: 'mdi-gmail',
        shortName: 'denise.tru@gmail.com',
      },
      {
        link: 'https://www.linkedin.com/in/truongdenise/e',
        color: 'blue lighten-1',
        icon: 'mdi-linkedin',
        shortName: 'Denise Truong',
      },
    ],
    info: [
      {
        icon: 'mdi-flag',
        shortName: 'French',
      },
      {
        icon: 'mdi-account',
        shortName: '35 yo',
      },
      {
        icon: 'mdi-map-marker',
        shortName: 'Annecy / Genève',
      },
    ],
    experiences: [
      {
        link: 'https://tydeconsulting.net/',
        name: 'TYDE',
        status: 'PDG et fondateur',
        logo: '',
        start_date: '2020',
        end_date: '2024',
        locality: 'Hô-Chi-Minh, Vietnam',
        short_description: `<ul>
          <li>Accompagner la transformation d’entreprise en capitalisant sur le développement humain</li>
          <li>Mettre en œuvre la culture d’entreprise dans des actions concrètes</li>
          <li>Développer des programmes d’entreprise pour accélérer la productivité</li>
          <li>Coaching de cadres supérieurs</li>
          <li>Gérer le P&L et développer le portefeuille clients</li>
          <li>Recruter et engager une équipe de base</li>
        </ul>`,
        description: '',
        pins: [],
        skills: [],
      },
      {
        link: 'https://idoko.co/',
        name: 'Idoko',
        status: 'Responsable pays',
        logo: '',
        start_date: '2019',
        end_date: '2019',
        locality: 'Hô-Chi-Minh, Vietnam',
        short_description: `<ul>
          <li>Concevoir des programmes d'entreprise sur mesure </li>
          <li>Coaching de middle managers et d'entrepreneurs </li>
          <li>Gérer le P&L et le portefeuille clients</li>
        </ul>`,
        description: '',
        pins: [],
        skills: [],
      },
      {
        link: 'https://www.cma-cgm.fr/',
        name: 'CMA-CGM',
        status: 'Business Developer',
        logo: '',
        start_date: '2016',
        end_date: '2018',
        locality: 'Hô-Chi-Minh, Vietnam',
        short_description: `<ul>
          <li>Combler les écarts de communication entre les bureaux locaux et étrangers</li>
          <li>Former et accompagner la mise en œuvre locale du système informatique</li>
          <li>Coordonner les opérations pour les grands comptes internationaux</li>
          <li>Piloter l'étude de marché d'un service innovant pour la supply chain domestique au Vietnam</li>
        </ul>`,
        description: '',
        pins: [],
        skills: [],
      },
      {
        link: 'https://www.bansard.com/fr',
        name: 'Bansard',
        status: 'Coordinateur',
        logo: '/assets/photos/artips.jpg',
        start_date: '2013',
        end_date: '2016',
        locality: 'Shanghai, Chine',
        short_description: `<ul>
          <li>Mettre en œuvre des KPI et des SOP pour améliorer les performances du service client</li>
          <li>Maintenir une communication interne efficace avec 11 bureaux en Chine</li>
          <li>Superviser les expéditions de bout en bout avec une équipe multinationale</li>
          <li>Évaluer les besoins du client pour concevoir des solutions logistiques sur mesure</li>
          <li>Développer avec l’équipe technique une solution informatique adaptée à l’ERP du client</li>
        </ul>`,
        description: '',
        pins: [],
        skills: [],
      },
    ],
    formations: [
      {
        name: 'Université de Nante',
        status: 'Management International',
        locality: 'Nantes, France',
        logo: '/assets/photos/EPITECH.png',
        start_date: '2014',
        end_date: '2009',
        description: '',
        degrees: [
          {
            name: 'Master of Science - BAC +5',
          },
        ],
      },
    ],
    mainProgrammingTools: [
      'typescript',
      'nestjs',
      'graphql',
      'kafka',
      'nodejs',
      'vuejs',
      'docker',
      'postgresql',
      'redis',
      'rabbitmq',
    ],
    hobbies: [
      {
        icon: 'mdi-brain',
        name: 'Bien être',
        short_description: '',
      },
      {
        icon: 'mdi-book-open-outline',
        name: 'Lecture',
        short_description: '',
      },
      {
        icon: 'mdi-yoga',
        name: 'Qi gong',
        short_description: '',
      },
      {
        icon: 'mdi-boxing-glove',
        name: 'Boxe',
        short_description: '',
      },
    ],
    hobbie: {
      description:
        'and many more... Like movies, cooking, sharing and of course coding ❤️',
    },
    // projects: [{
    //   name: "Freelance",
    //   short_description: "",
    //   pins: [],
    // }]
  }),
});

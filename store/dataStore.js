import { defineStore } from "pinia";

export const useDataStore = defineStore({
  id: "dataStore",

  state: () => ({
    language: "english",
    texts: {
      french: {
        title:
          "  Développeur Vue.js et Django. Actuellement disponible, à l'écoute d'opportunités.",
        about: {
          title: "Je m'appelle Romain. Je suis développeur d'application Web.",
          text1:
            "J'aime créer. Me lancer dans le développement web a changé beaucoup de choses pour moi, et depuis, j'essaie de pousser mon travail vers de nouveaux horizons. Heureusement, celui-ci est vaste.",
          text2:
            "Ce qui m'enthousiasme le plus dans le développement web, c'est la possibilité de concrétiser une idée, un besoin. La création ne se limite pas uniquement à l'aspect visuel, elle implique également la logique, une analyse pragmatique des besoins, ainsi que des ressources disponibles pour les réaliser.",
          text31:
            "Depuis 2022, je consacre tout mon temps au développement web. Accompagné par",
          text32:
            ",\u00A0fort de 20 ans d'expérience technique et de gestion de projets, j'ai développé mes compétences pour avoir une vue globale du métier et de la mise en œuvre de projets.",

          text4:
            "Je travaille généralement avec Vue.js pour la partie front-end et Django pour la partie back-end. Et plus important: j'aime apprendre. Cette curiosité me pousse à explorer en profondeur mes compétences actuelles et les suivantes, élargissant progressivement mon horizon.",
        },
        works: {
          text1:
            "Ces projets m'ont permis de mettre en application des technologies, des compétences, d'explorer des librairies et des frameworks, de créer des outils utiles personnellement ou tout simplement pour le plaisir.",
          text2:
            "Pour chaque projet, je porte une attention particulière à l'interaction, aux animations et aux performances afin d'offrir une expérience utilisateur agréable.",
        },
        contact: {
          content: [
            "Intéressé par mon profil, mon travail ou autre?",
            "Laissez-moi un message, je vous répondrai dès que possible.",
          ],
          link: "Ou contactez moi sur \u00A0",
        },
        projects: [
          {
            id: 1,
            title: "network",
            technologies: [
              "html",
              "tailwind css",
              "vue.js",
              "django rest",
              "jwt",
              "jest",
              "sqlite",
            ],
            subtitle:
              "Réseau social développé avec Vue.js et Django Rest Framework.",
            skills: {
              front: [
                " HTML5",
                "CSS3",
                "Tailwind CSS",
                "GSAP",
                "Vue.js",
                "Jest",
              ],
              back: ["Python", "Django REST", "JSON Web Token", "Unitest"],
              server: ["SQLite"],
            },
            description: [
              "Ce réseau social a été créé avec Vue.js et Django. Inspiré de réseaux sociaux bien connus (tel que Facebook, LinkedIn, Instagram...).",
              "Il permet aux utilisateurs de créer leur propre espace, de publier des messages texte ou des images, de participer à des discussions via les commentaires ou par messages privés.",
              "En plus des fonctionnalités de recherche classiques par nom, l'application suggère des relations pour élargir son réseau.",
              "De même, pour les sujets de discussion, il y a une section de tendances quotidiennes qui identifie les hashtags (#) et offre un accès aux sujets populaires.",
              "Ce projet sert de base solide et réutilisable pour d'autres projets.",
              "Côté serveur, le système d'authentification a été mis en place en utilisant JSON Web Tokens. Il s'agit de l'une des quatre applications Django créées (compte, chat, publication...) pour ce projet, dans le but d'assurer la modularité, la réutilisation du code, la maintenabilité et la lisibilité du code.",
              "Côté client, l'utilisation de plusieurs composants garantit une interface utilisateur cohérente et une expérience utilisateur fluide.",
            ],
            image_bg: "/network/img-bg.jpg",
            image_1: "/network/img-1.jpg",
            image_2: "/network/img-2.jpg",
            image_3: "/network/img-3.jpg",
            video: "/network/video.mp4",
          },
          {
            id: 2,
            title: "my garden",
            technologies: [
              "html",
              "css",
              "js",
              "python",
              "django",
              "postgresql",
            ],
            subtitle:
              "Application Django permettant de gérer son jardin en fonction de sa localisation.",
            skills: {
              front: [" HTML5", "Bulma", "CSS3", "JavaScript"],
              back: ["Python", "Django"],
              server: ["PostgreSQL"],
            },
            description: [
              "35 % des Français pratiquent le jardinage, j'ai donc souhaité créer un outil pour ces passionnés, amoureux du jardinage. Le rôle de cette application est à la fois informatif mais également de faciliter la gestion de son jardin.",
              "En effet, cette application permet d'adapter le jardinage en fonction du climat. Selon la localisation, en l'occurence le département, les dates relatives à differents évenements (plantation, récolte) diffèrent.",
              "Ce projet repose principalement sur le framework Django, bénéficiant ainsi de son interface d'administration et de sa sécurité. Cela dit des ajustements furent nécessaires pour réaliser des requêtes vers une vue Django sans avoir besoin de recharger la page (requête asynchrone) et améliorer l'expérience utilisateur.",
            ],
            image_bg: "/my_garden/img-bg.jpg",
            image_1: "/my_garden/img-1.jpg",
            image_2: "/my_garden/img-2.jpg",
            image_3: "/my_garden/img-3.jpg",
            video: "/my_garden/video.mp4",
          },
          {
            id: 3,
            title: "facture",
            technologies: [
              "html",
              "tailwind css",
              "vue.js",
              "nuxt",
              "django rest",
              "sqlite",
            ],
            subtitle:
              "Application web Nuxt et Django Rest Framework pour créer et gérer facilement des factures.",
            skills: {
              front: ["HTML5", "Tailwind CSS", "jsPDF", "Vue.js", "Nuxt"],
              back: ["Python", "Django REST"],
              server: ["SQLite"],
            },
            description: [
              "Cette application web permet la création rapide et facile d'une facture en tant que micro-entrepreneur.",
              "Pour cela, il suffit de s'inscrire, de créer un compte utilisateur, de créer une entreprise et de remplir le formulaire. Le calcul du total et la mise en page sont automatiques. Le document peut être téléchargé au format PDF en utilisant la bibliothèque jsPDF.",
              "Techniquement, l'application repose sur un backend Django REST pour la création d'API avec une base de données SQLite. Le frontend quant à lui est développé en Vue.js et son framework Nuxt. L'ensemble est stylisé avec Tailwind CSS.",
            ],

            image_bg: "/facture/img-bg.jpg",
            image_1: "/facture/img-1.jpg",
            image_2: "/facture/img-2.jpg",
            image_3: "/facture/img-3.jpg",
            video: "/facture/video.mp4",
          },
          {
            id: 4,
            title: "to do",
            technologies: [
              "  html ",
              "css",
              "js",
              "python",
              "django",
              "postgresql",
            ],
            subtitle:
              "Liste de tâches créée avec Django permettant de définir ses tâches et priorités pour organiser efficacement son temps.",
            skills: {
              front: ["HTML5", "CSS3", "JavaScript"],
              back: ["Python", "Django"],
              server: ["PostgreSQL"],
            },
            description: [
              "Un classique en programmation : la liste de tâches.",
              "Celle-ci a été développée avec le framework Django. Elle a été soigneusement conçue pour tirer pleinement parti de tous les avantages de ce framework.",
              "Il est possible de créer un compte, créer, lire, éditer et supprimer des tâches dans une base de données PostgreSQL de manière rapide et intuitive pour l'utilisateur. Ces données peuvent être filtrées par date de création, catégorie et priorité.",
            ],
            image_bg: "/todo/img-bg.jpg",
            image_1: "/todo/img-1.jpg",
            image_2: "/todo/img-2.jpg",
            image_3: "/todo/img-3.jpg",
            video: "/todo/video.mp4",
          },
          {
            id: 5,
            title: "artwork",
            technologies: ["html", "scss", "vue.js", "nuxt ", "gsap"],
            subtitle:
              "Page web créée avec Nuxt et GSAP en hommage à l'œuvre artistique de Yoji Shinkawa.",
            skills: {
              front: ["HTML5", "CSS3", "JavaScript", "Nuxt", "GSAP"],
              back: [],
              server: [],
            },
            description: [
              "En tant que développeur full stack, j'ai souhaité axer mon travail sur la créativité avec cette page web.",
              "Je tenais à rendre hommage au travail d'un designer que j'admire, reconnu dans le monde des jeux vidéo et la série Metal Gear Solid : Yoji Shinkawa.",
              "Pour cela, j'ai effectué un travail préparatoire de recherche de contenu, mais aussi d'inspiration, notamment en observant les meilleures pratiques sur la plateforme Awwwards.",
              "Pour réaliser cette page, j'ai principalement utilisé un support papier pour le wireframing et GSAP pour la création d'animations et les transitions.",
            ],

            image_bg: "/artwork/img-bg.jpg",
            image_1: "/artwork/img-1.jpg",
            image_2: "/artwork/img-2.jpg",
            image_3: "/artwork/img-3.jpg",
            video: "/artwork/video.mp4",
          },
          {
            id: 6,
            title: "sfc",
            technologies: ["html", "vue.js", "vuetify", "json server"],
            subtitle: "Composant Vue.js: météo, contacts et agenda",
            skills: {
              front: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "Vuetify",
                "Vue.js",
                "OpenWeatherMap",
                "Chart.js",
                "jsCalendar",
              ],
              back: [],
              server: ["JSON-server"],
            },
            description: [
              "Cette application, inspirée des outils météo, de contacts et de planification Google, a été développée avec Vue.js dans le but d'explorer et de comparer les deux approches d'API : Options et Composition.",
              "Le composant météo repose sur la bibliothèque ChartJs pour l'affichage graphique, ainsi que sur les API Mapbox Geocoding et OpenWeatherMap. Pour la planification, j'ai utilisé la bibliothèque Calendar.js. Enfin, le composant de contacts a été utilisé pour effectuer des opérations CRUD sur des données stockées dans un serveur JSON.",
              "Enfin, la bibliothèque de composants Vuetify a été utilisée pour la mise en page, les formulaires, les cartes, etc...",
            ],

            image_bg: "/sfc/img-bg.jpg",
            image_1: "/sfc/img-1.jpg",
            image_2: "/sfc/img-2.jpg",
            image_3: "/sfc/img-3.jpg",
            video: "/sfc/video.mp4",
          },

          {
            id: 7,
            title: "shooter",
            technologies: ["python", "pygame"],
            subtitle: "jeu 2D réalisé avec Python et la bibliothèque Pygame.",
            skills: {
              front: ["Pygame", "Python"],
              back: [],
              server: [],
            },
            description: [
              "Ce projet a une place spéciale pour moi. Ce n'est pas le plus impressionnant techniquement, ni le plus abouti. C'est le premier.",
              "Je l'ai créé en apprenant la programmation orientée objet. Souhaitant approfondir le concept et l'appliquer, j'ai créé avec la bibliothèque Pygame ce jeu de tir en 2D, un jeu vidéo classique qui a marqué mon enfance.",
              "Quelques icônes, des mouvements, des projections, des explosions, un peu d'aléatoire, des interactions et la magie opère : le désir de continuer.",
            ],

            image_bg: "/shooter/img-bg.jpg",
            image_1: "/shooter/img-1.jpg",
            image_2: "/shooter/img-2.jpg",
            image_3: "/shooter/img-3.jpg",
            video: "/shooter/video.mp4",
          },
        ],
      },
      english: {
        title:
          "  Web full stack developer Vue.js & Django. Currently available, looking for oportunity.",
        about: {
          title: "I'm Romain. A web application developer.",
          text1:
            "I like to create. Getting into web development changed a lot of things for me, and since then, I try to push my work to new horizons. Luckily, the horizon is vast.",
          text2:
            "What excites me the most about web developement is being able to bring an idea or a need to fruition. Creation is not only visual but involves logic, a pragmatic analysis of needs, and the resources available to do it.",
          text31:
            "Since 2022, I have been dedicating 24/7 to developing my skills in this field. Mentored by, \u00A0",
          text32:
            "\u00A0 backed by 20 years of technic and manage projects experience, I have developed my skills to have a comprehensive view of the developer profession, project implementation, and allow me to stand on my own two feet.",
          text4:
            " I usually work with Vue.js for the front and Django for the back. And most important: I like to learn. This curiosity drives me to explore in-depth my current skills and the next one's, gradually broadening my horizon.",
        },
        works: {
          text1:
            "These projects serve various purposes, whether for practicing skills, implementing technologies, exploring libraries and frameworks, or simply for fun.",
          text2:
            "But for each project I pay particular attention to the interaction, animations and performance in order to give to users pleasant ux.",
        },
        contact: {
          content: [
            "Interested in my profile, my work or else?",
            "Leave me a message, i'll write you back asap.",
          ],
          link: "Or join me on\u00A0",
        },
        projects: [
          {
            id: 1,
            title: "network",
            technologies: [
              "html",
              "tailwind css",
              "vue.js",
              "django rest",
              "jwt",
              "sqlite",
            ],
            subtitle:
              "Social network built with Vue.js and Django Rest Framework, inspired by social networks you probably already know.",
            skills: {
              front: [
                " HTML5",
                "CSS3",
                "Tailwind CSS",
                "GSAP",
                "Vue.js",
                "Jest",
              ],
              back: ["Python", "Django REST", "JSON Web Token", "Unitest"],
              server: ["SQLite"],
            },
            description: [
              "This social network was built with Vue.js and Django. Inspired by well-known social networks (such as Facebook, LinkedIn, Instagram...).",
              "It allows users to create their own space, post text or image messages, engage in discussions through comments or direct private messaging.",
              "In addition to the classic search features by name, the application suggests connections to expand his network.",
              "Similarly, for discussion topics, there is a daily trends section that identifies hashtags (#) and provides access to trending topics.",
              "This project serves as a solid, reusable foundation for other projects.",
              "Backend, the authentication system was implemented using JSON Web Tokens. Is one of fourth Django applications created (account, chat, post...) for this project with the goals of modularity, code reusability, maintainability, and code readability.",
              "Frontend, the use of multiple components ensures a consistent user interface and a smooth user experience.",
            ],
            image_bg: "/network/img-bg.jpg",
            image_1: "/network/img-1.jpg",
            image_2: "/network/img-2.jpg",
            image_3: "/network/img-3.jpg",
            video: "/network/video.mp4",
          },
          {
            id: 2,
            title: "my garden",
            technologies: [
              "html",
              "css",
              "js",
              "python",
              "django",
              "postgresql",
            ],
            subtitle:
              "Django application allowing to manage one's garden based on one's location.",
            skills: {
              front: [" HTML5", "Bulma", "CSS3", "JavaScript"],
              back: ["Python", "Django"],
              server: ["PostgreSQL"],
            },
            description: [
              "35% of French people garden, thus in this project, I wanted to create a tool for these enthusiasts, lovers of gardening. The role of this application is both informational and also aids in management.",
              "This application allows for adapting gardening according to the climate. Depending on the location, the department, the planting, or harvesting dates are different.",
              "This project primarily relies on the Django framework, thereby benefiting from its administration interface and its security but obliging me to make adjustments to perform requests to a Django view without needing to reload the page (asynchronous request) and improve the user experience.",
            ],
            image_bg: "/my_garden/img-bg.jpg",
            image_1: "/my_garden/img-1.jpg",
            image_2: "/my_garden/img-2.jpg",
            image_3: "/my_garden/img-3.jpg",
            video: "/my_garden/video.mp4",
          },
          {
            id: 3,
            title: "facture",
            technologies: [
              "html",
              "tailwind css",
              "vue.js",
              "nuxt",
              "django rest",
              "sqlite",
            ],
            subtitle:
              "Web application built with Nuxt and Django Rest Framework to create and manage invoices easily.",
            skills: {
              front: ["HTML5", "Tailwind CSS", "jsPDF", "Vue.js", "Nuxt"],
              back: ["Python", "Django REST"],
              server: ["SQLite"],
            },
            description: [
              "This web application allows for the quick and easy creation of an invoice as independant.",
              "To do this, all that is needed is to register, create a user account, create a business and complete the form. The total and the layout are automatic. The document can be downloaded in PDF format using the jsPDF library.",
              "Technically, the application is built on a Django REST backend for creating APIs with an SQLite database. The frontend is in Vue.js, by extension, Nuxt and Tailwind CSS framework.",
            ],

            image_bg: "/facture/img-bg.jpg",
            image_1: "/facture/img-1.jpg",
            image_2: "/facture/img-2.jpg",
            image_3: "/facture/img-3.jpg",
            video: "/facture/video.mp4",
          },
          {
            id: 4,
            title: "to do",
            technologies: [
              "  html ",
              "css",
              "js",
              "python",
              "django",
              "postgresql",
            ],
            subtitle:
              "To-do list created with Django allowing to define one's tasks and priorities in order to efficiently organize one's time.",
            skills: {
              front: ["HTML5", "CSS3", "JavaScript"],
              back: ["Python", "Django"],
              server: ["PostgreSQL"],
            },
            description: [
              "A classic in programming: the to-do list. ",
              "This one was developed with the Django framework. It was thought out in advance to take full advantage of all the benefits of this framework. ",
              "It is possible to create an account, create, read, edit, and delete tasks in a PostgreSQL database in a way that is quick and intuitive for the user. This data can be filtered by creation date, category, and priority",
            ],
            image_bg: "/todo/img-bg.jpg",
            image_1: "/todo/img-1.jpg",
            image_2: "/todo/img-2.jpg",
            image_3: "/todo/img-3.jpg",
            video: "/todo/video.mp4",
          },
          {
            id: 5,
            title: "artwork",
            technologies: ["html", "scss", "vue.js", "nuxt ", "gsap"],
            subtitle:
              "Web page created with Nuxt and GSAP to pay tribute to the artistic work of Yoji Shinkawa.",
            skills: {
              front: ["HTML5", "CSS3", "JavaScript", "Nuxt", "GSAP"],
              back: [],
              server: [],
            },
            description: [
              "As a full stack developer, I wanted to focus my work on creativity with this web page.",
              " I wanted to honor the work of a designer I like, recognized in the world of video games and the Metal Gear Solid serie: Yoji Shinkawa.",
              "For this, I did some preparatory work for content research but also for inspiration, especially by observing what is best through the Awwwards platform.",
              "To do this, I mainly used paper support for wireframing and GSAP for the creation of animations and transitions.",
            ],

            image_bg: "/artwork/img-bg.jpg",
            image_1: "/artwork/img-1.jpg",
            image_2: "/artwork/img-2.jpg",
            image_3: "/artwork/img-3.jpg",
            video: "/artwork/video.mp4",
          },
          {
            id: 6,
            title: "sfc",
            technologies: ["html", "vue.js", "vuetify", "json server"],
            subtitle:
              "Single file component for weather, contact, planning, created with Vue.js.",
            skills: {
              front: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "Vuetify",
                "Vue.js",
                "OpenWeatherMap",
                "Chart.js",
                "jsCalendar",
              ],
              back: [],
              server: ["JSON-server"],
            },
            description: [
              "This application, inspired by Google's weather, contact, and planning tools, was developed with Vue.js with the purpose of exploring and comparing both API: Options and Composition.",
              "The weather component relies on the ChartJs library for graphic display, and the Mapbox Geocoding and OpenWeatherMap APIs. For the planning, I used the Calendar.js library. Finally, the contact component was used to manipulate CRUD operations on data stored in JSON server.",
              "At last, Vuetify component library was used for the wireframe, forms, cards etc...",
            ],

            image_bg: "/sfc/img-bg.jpg",
            image_1: "/sfc/img-1.jpg",
            image_2: "/sfc/img-2.jpg",
            image_3: "/sfc/img-3.jpg",
            video: "/sfc/video.mp4",
          },

          {
            id: 7,
            title: "shooter",
            technologies: ["python", "pygame"],
            subtitle:
              "A classic 2D video game made with Python and Pygame library.",
            skills: {
              front: ["Pygame", "Python"],
              back: [],
              server: [],
            },
            description: [
              "This project holds a special place for me. It’s not the most impressive, nor the most accomplished. It's my first one.",
              "I created it while learning object-oriented programming. Wishing to go deeper into the concept and also to apply it, I created with python's library this little  2D shooter, a classic video game that marked my childhood.",
              "A few icons, some movement, projections, explosions, randomness, interactions and magic happens: the desire to continue.",
            ],

            image_bg: "/shooter/img-bg.jpg",
            image_1: "/shooter/img-1.jpg",
            image_2: "/shooter/img-2.jpg",
            image_3: "/shooter/img-3.jpg",
            video: "/shooter/video.mp4",
          },
        ],
      },
    },
  }),

  getters: {
    getProjectById: (state) => (id, lang) => {
      const projects = state.texts[lang].projects;
      return projects.find((project) => project.id === id);
    },
  },

  actions: {
    initStore() {
      if (localStorage.getItem("language")) {
        this.language = localStorage.getItem("language", this.language);
      }
    },

    //maj des info de langue
    setLanguage(choice) {
      this.language = choice;
      localStorage.setItem("language", choice);
    },
  },
});

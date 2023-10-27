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
            "Depuis 2022, je consacre tout mon temps au développement web. Accompagné par, \u00A0",
          text32:
            "\u00A0 fort de 20 ans d'expérience technique et de gestion de projets, j'ai développé mes compétences pour avoir une vue globale du métier et de la mise en œuvre de projets.",

          text4:
            "Je travaille généralement avec Vue.js pour la partie front-end et Django pour la partie back-end. Et plus important: j'aime apprendre. Cette curiosité me pousse à explorer en profondeur mes compétences actuelles et les suivantes, élargissant progressivement mon horizon.",
        },
        works: {
          text1:
            "Ces projets m'ont permis de mettre en application des technologies, des compétences, d'explorer des librairies et des frameworks, de créer des outils utilent personnellement ou tout simplement pour le plaisir.",
          text2:
            "Pour chaque projet, je porte une attention particulière à l'interaction, aux animations et aux performances afin d'offrir une expérience utilisateur agréable.",
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
              "Réseau social construit avec Vue.js et Django Rest Framework, inspiré des réseaux sociaux que vous connaissez probablement déjà.",
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
              "Ce réseau social a été créé avec Vue.js et Django. Inspiré de réseaux sociaux bien connus (comme Facebook, LinkedIn, Instagram...).",
              "Il permet aux utilisateurs de créer leur propre espace, de publier des messages texte ou des images, de participer à des discussions via des commentaires ou des messages privés directs.",
              "En plus des fonctionnalités de recherche classiques par nom, l'application suggère des connexions pour élargir son réseau.",
              "De même, pour les sujets de discussion, il y a une section de tendances quotidiennes qui identifie les hashtags (#) et offre un accès aux sujets populaires.",
              "Ce projet sert de base solide et réutilisable pour d'autres projets.",
              "Côté serveur, le système d'authentification a été mis en place en utilisant JSON Web Tokens. Il s'agit de l'une des quatre applications Django créées (compte, chat, publication...) pour ce projet, dans le but d'assurer la modularité, la réutilisation du code, la maintenabilité et la lisibilité du code.",
              "Côté client, l'utilisation de plusieurs composants garantit une interface utilisateur cohérente et une expérience utilisateur fluide.",
            ],
            image_bg: "/network/img-bg.png",
            image_1: "/network/img-1.png",
            image_2: "/network/img-2.png",
            image_3: "/network/img-3.png",
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
            image_bg: "/my_garden/img-bg.png",
            image_1: "/my_garden/img-1.png",
            image_2: "/my_garden/img-2.png",
            image_3: "/my_garden/img-3.png",
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

            image_bg: "/facture/img-bg.png",
            image_1: "/facture/img-1.png",
            image_2: "/facture/img-2.png",
            image_3: "/facture/img-3.png",
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
            image_bg: "/todo/img-bg.png",
            image_1: "/todo/img-1.png",
            image_2: "/todo/img-2.png",
            image_3: "/todo/img-3.png",
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
              " I wanted to honor the work of a designer I adore, recognized in the world of games and the magnificent Metal Gear Solid series: Yoji Shinkawa.",
              "For this, I did some preparatory work for content research but also for inspiration, especially by observing what is best through the Awwwards platform.",
              "To do this, I mainly used paper support for wireframing and GSAP for the creation of animations and transitions.",
            ],

            image_bg: "/artwork/img-bg.png",
            image_1: "/artwork/img-1.png",
            image_2: "/artwork/img-2.png",
            image_3: "/artwork/img-3.png",
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
              "At last, Vuetify component library was used for the wireframe, forms, cards...",
            ],

            image_bg: "/sfc/img-bg.png",
            image_1: "/sfc/img-1.png",
            image_2: "/sfc/img-2.png",
            image_3: "/sfc/img-3.png",
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
              "This project holds a special place for me. It’s not the biggest, nor the most beautiful. It's the first one.",
              "I created it while learning object-oriented programming. Wishing to go deeper into the concept and also to apply it, I created with python's library this little  2D shooter, a classic video game that marked my childhood.",
              "A few icons, some movement, projections, explosions, randomness, interactions and magic happens: the desire to continue.",
            ],

            image_bg: "/shooter/img-bg.png",
            image_1: "/shooter/img-1.png",
            image_2: "/shooter/img-2.png",
            image_3: "/shooter/img-3.png",
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
            image_bg: "/network/img-bg.png",
            image_1: "/network/img-1.png",
            image_2: "/network/img-2.png",
            image_3: "/network/img-3.png",
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
            image_bg: "/my_garden/img-bg.png",
            image_1: "/my_garden/img-1.png",
            image_2: "/my_garden/img-2.png",
            image_3: "/my_garden/img-3.png",
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

            image_bg: "/facture/img-bg.png",
            image_1: "/facture/img-1.png",
            image_2: "/facture/img-2.png",
            image_3: "/facture/img-3.png",
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
            image_bg: "/todo/img-bg.png",
            image_1: "/todo/img-1.png",
            image_2: "/todo/img-2.png",
            image_3: "/todo/img-3.png",
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
              " I wanted to honor the work of a designer I adore, recognized in the world of games and the magnificent Metal Gear Solid series: Yoji Shinkawa.",
              "For this, I did some preparatory work for content research but also for inspiration, especially by observing what is best through the Awwwards platform.",
              "To do this, I mainly used paper support for wireframing and GSAP for the creation of animations and transitions.",
            ],

            image_bg: "/artwork/img-bg.png",
            image_1: "/artwork/img-1.png",
            image_2: "/artwork/img-2.png",
            image_3: "/artwork/img-3.png",
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
              "At last, Vuetify component library was used for the wireframe, forms, cards...",
            ],

            image_bg: "/sfc/img-bg.png",
            image_1: "/sfc/img-1.png",
            image_2: "/sfc/img-2.png",
            image_3: "/sfc/img-3.png",
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
              "This project holds a special place for me. It’s not the biggest, nor the most beautiful. It's the first one.",
              "I created it while learning object-oriented programming. Wishing to go deeper into the concept and also to apply it, I created with python's library this little  2D shooter, a classic video game that marked my childhood.",
              "A few icons, some movement, projections, explosions, randomness, interactions and magic happens: the desire to continue.",
            ],

            image_bg: "/shooter/img-bg.png",
            image_1: "/shooter/img-1.png",
            image_2: "/shooter/img-2.png",
            image_3: "/shooter/img-3.png",
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
      console.log("init store");

      if (localStorage.getItem("language")) {
        console.log("langage present dans le store");
        this.language = localStorage.getItem("language", this.language);
        console.log(
          "le langage est:",
          localStorage.getItem("language", this.language)
        );
      }
    },

    //maj des info de langue
    setLanguage(choice) {
      console.log("set language");
      this.language = choice;
      console.log("choix du langage:", choice);
      localStorage.setItem("language", choice);
    },
  },
});

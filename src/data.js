export const projects = [
  {
    title: "Ambush!!!",
    subtitle: "Python & Pygame",
    description:
      "Ambush!!! est un jeu 2d en Python. Le joueur doit afronter des vagues incessantes d'ennemis. Il doit résister le plus longtemps possible et ainsi obtenir le meilleur score. Disponible sur Windows, Mac et Linux.",
    image: "ambush/ambush_preview.gif",
    details: {
      stack: ["Python", "Pygame", "PyInstaller", "Complex Logics"],
      callToActions: [
        {
          label: "Code source",
          link: "https://github.com/OGR-67/ambush",
          type: "code",
        },
        {
          label: "Télécharger",
          link: "/projects/ambush/ambush_win.zip",
          type: "download",
          os: "windows",
        },
        {
          label: "Télécharger",
          link: "/projects/ambush/ambush_osx.zip",
          type: "download",
          os: "mac",
        },
        {
          label: "Télécharger",
          link: "/projects/ambush/ambush_linux.zip",
          type: "download",
          os: "linux",
        },
      ],
    },
  },
  {
    title: "Ecommer",
    subtitle: "Projet d'entrainement à React et au payment Stripe",
    description:
      "Cette application est un faux site e-commerce. Elle utilise l'API de Stripe pour le paiement. Le backend de cette application étant hébergé sur le plan gratuit de render, un temps de mise en route de 1 minute environ est à prévoir. Vous pouvez utiliser la fausse CB de stripe '4242 4242 4242 4242' pour simuler un payement",
    image: "./ecommer_preview.gif",
    details: {
      stack: ["React", "Strapi", "Stripe", "MaterialUI", "Yup", "Vite"],
      callToActions: [
        {
          label: "Voir le code",
          link: "https://github.com/OGR-67/ecommerce_client",
          type: "code",
        },
        {
          label: "Visiter",
          link: "https://ecommerce-client-alpha-blue.vercel.app/",
          type: "live-preview",
        },
      ],
    },
  },
  // {
  //   title: "ChatChat",
  //   subtitle: "React, Express & Websockets",
  //   description:
  //     "Cette application est un chat en temps réel. Elle utilise des websockets pour permettre à plusieurs utilisateurs de discuter en direct. Elle est également dotée d'un système de chat global et de chat par tag.",
  //   image: "./project-3.gif",
  //   link: "https://reactbootcamp.com",
  //   details: {
  //     stack: [],
  //     callToActions: [
  //       {
  //         link: "",
  //         type: "code",
  //       },
  //       {
  //         label: "Visiter",
  //         link: "",
  //         type: "live-preview",
  //       },
  //       {
  //         label: "Télécharger",
  //         link: "",
  //   //         type: "download",
  //   //         os: "windows",
  //   //       }
  //   //     ]
  //   //   }
  //   // },
  {
    title: "JSXLab",
    subtitle: "Un clone des carnets Jupyter en JSX",
    description:
      "Initier depuis une CLI, vous pouvez écrire du code JavaScript/JSX exécutable, du markdown et créer des graphiques. Les modifications sont persistantes car elles sont enregistrées dans un fichier.",
    image: "jsxlab_preview.gif",
    details: {
      stack: [
        "React / Redux",
        "Node / Express",
        "TypeScript",
        "Commander",
        "Tailwind CSS",
        "Vite",
        "Lerna",
        "ESBuild",
      ],
      callToActions: [
        {
          label: "Code source",
          link: "https://github.com/OGR-67/jsxlab-project/tree/main/packages/cli",
          type: "code",
        },
        {
          label: "Voir sur NPM",
          link: "https://www.npmjs.com/package/jsxlab",
          type: "live-preview",
        },
      ],
    },
  },
];

export const testimonials = [
  {
    quote:
      "Lors de mon arrivée en stage chez Komportementalist, Olivier a tout de suite su me mettre à l'aise. J'ai toujours eu le soutien et les conseils nécessaires pour mener à bien les tâches qui m'ont été confiées. Je recommande vivement Olivier pour son professionnalisme et sa gentillesse.",
    image: "/romanie-de-meyer.jpg",
    name: "Romanie De Meyer",
    company: "Stage Dev Front @Komportementalist",
  },
  {
    quote:
      "Olivier s'est occupé de mon onboarding chez Komportementalist. Il a su me guider et m'accompagner dans la découverte de l'entreprise et de ses outils. Il a toujours été à l'écoute et disponible pour répondre à mes questions. Collaborer avec Olivier a été un réel plaisir, je le recommande vivement.",
    image: "/clement-muth.jpg",
    name: "Clément Muth",
    company: "Mission Freelance Dev Fullstack @Komportementalist",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node, Express",
  "PostgreSQL, MongoDB",
  "HTML, CSS, SASS",
  "Tailwind CSS",
  "Python, Django, Flask",
  "Docker",
  "Git, GitHub, GitHub Actions",
];

export const softSkills = [
  "Autonomies",
  "Esprit d'équipe",
  "Rigueur",
  "Curiosité",
  "Communication",
  "Adaptabilité",
];

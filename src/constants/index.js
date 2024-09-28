export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'React Ecommerce Dashboard',
    desc: 'This is a Ecommerce Admin Dashboard .Using chart js , React table all content is visualized.This is a great application for Ecommerce dashboard.Open link and click on visit dashboard',
    subdesc: 'Built app with React, Tailwind CSS, TypeScript.',
    href: 'https://react-admin-dashboard-using-typescript.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },

      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Project Mele',
    desc: 'This is a real time project we made for our college . It automatically do the seating arrangements and generate required pdfs for attendance and other things.At last just clicking on the send mail button will send the mails to all the students with their seating information.',
    subdesc: '',
    href: 'https://meleproject.netlify.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Github Profile Viewer',
    desc: "To View a GitHub Profile I have developed this website using vuejs and just typing your name will show you the details of your GitHub profile. As part of my vuejs journey I did this project and deployed though it's a small project I like it and hopy you too.",
    subdesc: 'you can go ahead and try by clicking on the link below.',
    href: 'https://git-hub-profile-viewer-nine.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'vue.js',
        path: '/assets/vuejs.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Random Posts App',
    desc: 'In the next.js journey I built this app . I learned a lot making this . Feel free to check out the app it was good for begginers.In this app I have learned Dynamic routing and server side components and client side components and static site generation and few other things.',
    subdesc: 'Built with Next.js 14 to check random post using an api.I also learned authjs after this',
    href: 'https://nextjs-post-app-chi.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'next.js',
        path: '/assets/nextjs2.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Node.js',
    title:
      'Node.js is a runtime environment that allows developers to run JavaScript on the server side, making it possible to build scalable and high-performance backend applications. It is well-suited for handling asynchronous, non-blocking operations and is commonly used for real-time applications like chat apps and APIs.',
    icon: '/assets/nodejs.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Typescript',
    title:
      'TypeScript is a strongly typed programming language that builds on JavaScript, allowing developers to catch errors early through type checking. It enhances code quality, scalability, and maintainability, especially in large projects, by adding a layer of safety without sacrificing flexibility.',
    icon: '/assets/typescript.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Next.js',
    title:
      'Next.js is a popular React framework that offers server-side rendering, static site generation, and API routes, making it ideal for building SEO-friendly, high-performance web applications. With built-in features like automatic routing, image optimization, and fast refresh, Next.js simplifies the development of modern web apps.',
    icon: '/assets/nextjs2.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'React.js',
    title:
      'React is a popular JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It allows developers to create reusable UI components, making the development process more efficient and organized.',
    icon: '/assets/react.svg',
    animation: 'salute',
  },
];

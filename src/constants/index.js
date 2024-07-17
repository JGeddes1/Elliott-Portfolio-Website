import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    photoshop,
    illustrator,
    autocad,
    revit,
    defaultjob,
  } from "../assets";

  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Photoshop",
      icon: photoshop,
    },
    {
      title: "Illustrator",
      icon: illustrator,
    },
    {
      title: "AutoCad",
      icon: autocad,
    },
    {
      title: "Revit",
      icon: revit,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Storefront Worker",
      company_name: "John Smail & Sons",
      icon: defaultjob,
      iconBg: "#383E56",
      date: "November 2013 - February 2015",
      points: [
        "Whilst studying for my A levels, I worked for two years in a well known and respected hardware/ furniture store which taught me time management skills and how to serve and deal with the public. During this employment, one of my duties was to work in a small team to carry and deliver heavy furniture around Northumberland. I built up a trustworthy reputation and was all",
      ],
    },
    {
      title: "Factory Operator",
      company_name: "Marlish Water",
      icon: defaultjob,
      iconBg: "#E6DEDD",
      date: "June 2016 - June 2018",
      points: [
        "In the interim between school and university, I worked for a water bottling company, called Marlish Water Ltd, as a factory operator. I had to quickly learn and adapt to the working environment as it was such a fast paced factory. I had to work within and maintain a safe and hygienic environment. Although I did not work there long, I was involved in more advanced jobs, such as stripping down and cleaning the bottling machines and helping with delivery paperwork.",
        "Please see a copy of a referance from previous works:",
        " //dvqlxo2m2q99q.cloudfront.net/000_clients/1375524/file/elliott-young-reference.jpg",
      ],
    },
    {
      title: "Assistant Architect",
      company_name: "McNicholas Architects",
      icon: defaultjob,
      iconBg: "#383E56",
      date: "July 2018 - July 2019",
      points: [
        "My first experience of working in the architectural industry, was a part-time post during my first two years at university, in a domestic orientated company called McNicholas Architects, based in Harrogate. During this employment, I learned how to take surveys of existing client’s buildings and by using digital software, turned them into planning and building regulations packages. I learned how to approach clients in their own homes and gained a more in-depth knowledge of domestic dwelling's building regulations and procedures for alterations and extensions.",

      ],
    },
    {
      title: "Placement Student",
      company_name: "Michael Dyson Associates",
      icon: defaultjob,
      iconBg: "#E6DEDD",
      date: "August 2020 - December 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Architectural Technologist",
      company_name: "CSM+ Architects",
      icon: defaultjob,
      iconBg: "#E6DEDD",
      date: "August 2020 - December 2021",
      points: [
        "During my time at CSM I have vastly developed my architectural software skills with REVIT, BIM & NBS Chorus. Whilst also learning how to work on larger projects within the healthcare sector.",

      ],
    },
    {
      title: "Architectural Technologist",
      company_name: "North Tyneside Council",
      icon: defaultjob,
      iconBg: "#E6DEDD",
      date: "January 2021 - Present",
      points: [
        "During my time at CSM I have vastly developed my architectural software skills with REVIT, BIM & NBS Chorus. Whilst also learning how to work on larger projects within the healthcare sector.",

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
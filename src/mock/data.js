import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shaun Mukherjee | Full Stack Engineer', // e.g: 'Name | Developer'
  lang: 'EN', // e.g: en, es, fr, jp
  description: 'Hi!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Shaunak.',
  subtitle: "I'm the developer you want, and the human you need.",
  cta: 'Interested? Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hey there! I'm a recent Computer Science Masters graduate from Johns Hopkins University, having worked most recently as a Lead Developer at an edutech startup. Through my gap year, I've sharpened my skills and enjoyed developing various applications. Creativity and work ethic are my main principles.",
  paragraphTwo: "I specialize in full-stack software development in a variety of languages and frameworks, and have led several teams in various projects throughout my educational and professional career.",
  paragraphThree: "Apart from Pythoning my way through highly Reactive environments in Javascripted lands, I enjoy playing/watching football, podcasting, standups, singing, and unique hikes. ",
  resume: 'https://drive.google.com/file/d/1tWxmQReKRgeDL1ILaajZaWKcbPsfAVME/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'morty.png',
    title: 'RICKANDMORTY',
    info: 'A full interactive app to view and favourite characters from the beloved TV show, built on ReactJS + NodeJS + GraphQL',
    info2: 'It features a fully immersive UI with all characters from the RicknMorty API shown to be viewed, added and removed by users',
    url: 'https://github.com/shaunakmukherjee/rickandmorty',
    repo: '', 

  },
  {
    id: nanoid(),
    img: 'ic_launcher-playstore.png',
    title: 'TREQUIZTA',
    info: 'A football trivia app built on Kotlin',
    info2: 'It allows users to choose their difficulty level and answer questions taken from independent repositories about the world of football',
    url: 'https://github.com/shaunakmukherjee/Trequizta',
    repo: '', 
  },
  {
    id: nanoid(),
    img: 'adaptive-icon.png',
    title: 'FINITO',
    info: 'Finito is an interactive, minimalistic to-do app built on React and React-Native',
    info2: 'It features a calming UI that minimizes stress and manages productivity.',
    url: 'https://github.com/shaunakmukherjee/Finito',
    repo: '',
  },
  
  {
    id: nanoid(),
    img: 'logo_ijamu.png',
    title: 'iJAMU',
    info: 'A social media application website for musicians and artists, developed on Python (Django) with HTML/CSS as frontend',
    info1: 'It allows one to search, add and collaborate with likeminded musicians all around the world sharing your own interests.',
    info2: 'Collaborators : Rohit Ravoori, Chi Young Shin.',
    url: 'https://github.com/shaunakmukherjee/iJamU-the-jamming-app',
    repo: '', 
  },
  {
    id: nanoid(),
    img: 'grey.jpg',
    title: 'SHOPBOT',
    info: 'An automated web scraping tool built on Python and information retrieval concepts',
    info1: 'It scours the Barnes & Noble repository and facilitate actions of online book shopping.',
    info2: 'Collaborator : Vijayram Illa',
    url: 'https://github.com/shaunakmukherjee/Shopping_Bot',
    repo: '', 
  },
  {
    id: nanoid(),
    img: 'grey.jpg',
    title: 'UNIVERSITYVISITS / YOONI',
    info: 'Frontend HTML/CSS code for University Visits - a website dedicated to organizing visits for college/high school students to various universities.',
    info1: 'Worked with UX/UI engineer to develop frontend coupled with Python-based backend.',
    info2: 'Collaborator : Youjin Jang',
    url: 'https://github.com/shaunakmukherjee/universityvisits',
    repo: '', 
  },
  {
    id: nanoid(),
    img: 'jhu_logo.png',
    title: 'RESEARCH THESIS',
    info: 'A detailed study on Distributed DoS attacks and algorithms for their detection and mitigation',
    info2: 'Done under the guidance of Prof. Vladimir Braverman, under the department of Computer Science at Johns Hopkins University.',
    url: 'https://www.researchgate.net/publication/329786869_A_Detailed_Study_on_Distributed_Denial-of-Service_attacks_and_algorithms_pertaining_to_their_detection_and_mitigation',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Yes, I would love to collaborate with like-minded people to do cool things that matter!',
  btn: 'Hit me up',
  email: 'shaunak.mukherjee94@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/theshaunak_twit',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shaunak-mukherjee/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shaunakmukherjee',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

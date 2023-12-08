//  icons
import {

  FiLinkedin,
  FiPhone,
  FiGithub,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/projects/Project1.jpg';
import Project2 from './assets/img/projects/Project2.jpg';
import Project3 from './assets/img/projects/Project3.png';
import Project4 from './assets/img/projects/Project4.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nodejs.png';
import SkillImg6 from './assets/img/skills/java.png';
import SkillImg7 from './assets/img/skills/python.jpeg';
import SkillImg8 from './assets/img/skills/sql.jpeg';

// testimonial images


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'education',
    href: 'education',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  {
    name: 'project',
    href: 'portfolio',
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiMail />,
    href: 'mailto:shruthi.nandakumar@slu.edu',
    target:"_blank"
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/snandakumar2912',
    target:"_blank"
  },
  {
    icon: <FiMapPin />,
    href: 'https://www.google.com/maps/place/St.+Louis,+MO/@38.6531004,-90.243462,11z/data=!3m1!4b1!4m6!3m5!1s0x87d8b4a9faed8ef9:0xbe39eaca22bbe05b!8m2!3d38.6270025!4d-90.1994042!16zL20vMDZ3eHc?entry=ttu',
    target:"_blank"
  },
];

// companies

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Bank Management System',
    category: 'Team Project',
    info:"This is a mini project. The main aim of the project is to manage the details of bank account of the account holder such as transactions, loans, services etc. using Database Management System concepts.",
    github: "https://drive.google.com/drive/folders/1BFFlUj2pv5c8A2M_SavQ_7cFUAWmG4vF",
    tech:"Python | Tkinter | SQL"
  },
  {
    id: '2',
    image: Project2,
    name: 'Snake and Ladder Game',
    category: 'Team Project',
    info:"This is a mini project. Aim of the project is to navigate one's game piece, according to die rolls, from the start to finish, helped by climbing ladders but hindered by falling down snakes. The player who is first to bring their token to the last square of the track is the winner",
    github: "https://drive.google.com/drive/folders/1ENPYI_g_QBDL5o7AddMtWKJw3L5tkAYt",
    tech:"ComputerGraphics | OpenCV"
  },
  {
    id: '3',
    image: Project3,
    name: 'Website on Doll Shop',
    category: 'Solo Project',
    info:"The Doll World website is a comprehensive online platform dedicated to doll enthusiasts, collectors, and those interested in the art and history of dolls. ",
    github: "https://cs.slu.edu/student/snandakumar/Project1/home.html",
    tech:"HTML | CSS | Javascript"
  },
  {
    id: '4',
    image: Project4,
    name: 'Attractions Website',
    category: 'Solo Project',
    info:"The New York Travel Destination Website is a useful and attractive web tool devoted to highlighting the wonders and attractions of New York, one of the most well-liked tourist destinations in the United States. This website gives visitors a comprehensive look into New York's culture, history, geography, and tourist attractions.",
    github: "https://cs.slu.edu/student/snandakumar/hw2/index.html",
    tech:"HTML | CSS"
  },


];

export const education = [
  {
    id: 1,
    degree: 'Your Degree',
    university: 'University Name',
    duration: 'Year - Year',
  },
  // Add more education entries as needed
];

// skill
export const skills = [
  { name: 'HTML 5', image: SkillImg1, percent: 80 },
  { name: 'CSS 3', image: SkillImg2, percent: 60 },
  { name: 'Javasript', image: SkillImg3, percent: 80 },
  { name: 'React', image: SkillImg4, percent: 60 },
  { name: 'NodeJS', image: SkillImg5, percent: 80 },
  { name: 'Java', image: SkillImg6, percent: 60 },
  { name: 'Python', image: SkillImg7, percent: 80 },
  { name: 'SQL', image: SkillImg8, percent: 60 },
  // ... other skills
];

// services


// testimonials

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'shruthi.nandakumar@slu.edu',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'St. Louis, Missouri',
    // description: 'Serving clients worldwide',
  },
  {
    icon: <FiPhone />,
    title: 'Mobile Number',
    subtitle: '+1 314-305-6675',
  }
];

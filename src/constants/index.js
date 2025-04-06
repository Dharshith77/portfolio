import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  figma,
  meta,
  shopify,
} from "../assets";

export const personalInfo = {
  name: "Dharshith Erra",
  role: "Software Developer",
  description: "A passionate software developer with a strong foundation in web development, backend engineering, and creative problem solving.",
  email: "dharshitherra@gmail.com",
  phone: "9392406455",
  github: "https://github.com/Dharshith77",
  linkedin: "https://www.linkedin.com/in/dharshith-erra/",
  resume: "https://drive.google.com/file/d/1Pjv2bw0n3oIQgpzqihy9LBy8hPGL6b8f/view?usp=sharing", // Resume link
};

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
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
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Bike rental",
    icon: shopify,
    iconBg: "#383E56",
    //date: "Jan 2022 - Jan 2023",
    points: [
      "Built a full-stack bike rental web application using Flask, SQLAlchemy, and Oracle Database.",
      "Implemented secure user authentication and an admin panel for managing bike inventory and bookings.",
      "Enabled users to book bikes, upload images, and view rental history through a responsive UI.",
      "Integrated image handling and binary storage, displaying bike images dynamically.",
      "Followed clean architecture and modular coding practices for maintainability and scalability.",
    ],
  },
  {
    title: "Desktop Application Developer",
    company_name: "Speech-to-Text App",
    icon: meta,
    iconBg: "#383E56",
   // date: "Jan 2023 - Present",
    points: [
      "Developed a Python-based GUI application for real-time speech-to-text conversion using the Google Speech Recognition API.",
      "Designed an intuitive interface with Tkinter for user-friendly interaction and voice-to-text control.",
      "Integrated text-to-speech functionality and support for saving recognized text to files.",
      "Handled multi-threading to ensure smooth and responsive performance during speech recognition.",
      "Implemented support for punctuation and special characters, enhancing recognition accuracy and usability..",
    ],
  },
];

import bikeRentalImg from "../assets/bikerental.png";
import speechToTextImg from "../assets/speechtotext.png";
import tifftoPdfImg from "../assets/tifftopdf.png";

const projects = [
  {
    name: "Bike Rental Management System",
    description:
      "A web-based application to manage bike rentals, bookings, and returns. Admin panel for managing users, tracking rentals, and generating reports.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "html/css", color: "pink-text-gradient" },
    ],
    image: bikeRentalImg,
    source_code_link: "https://github.com/Dharshith77/Bikerentalmanagement", 
  },
  {
    name: "Speech to Text Recognition",
    description:
      "Converts real-time speech into accurate text using Python. Useful for voice-controlled apps and accessibility tools.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "speechrecognition", color: "green-text-gradient" },
      { name: "pyaudio", color: "pink-text-gradient" },
    ],
    image: speechToTextImg,
    source_code_link: "https://github.com/Dharshith77/Speech-to-text", 
  },
  {
    name: "TIFF to PDF Converter Bot",
    description:
      "Telegram bot that converts TIFF image files into high-quality PDF documents instantly. Built using Python and deployed on Railway.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "telegram-bot", color: "green-text-gradient" },
      { name: "railway", color: "pink-text-gradient" },
    ],
    image: tifftoPdfImg,
    source_code_link: "https://github.com/Dharshith77/tifftopdf-bot",
  },
];

export { services, technologies, experiences, projects };

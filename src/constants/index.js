import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  python2,
  javascript2,
  java2,
  git,
  mysql,
  mongodb,
  expressjs,
  // vite,
  threejs,
  migrate,
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
    id: "skill",
    title: "skill",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  // { title: "C", icon: c },
  // { title: "C++", icon: cpp },
  { title: "JavaScript", icon: javascript },
  { title: "Java", icon: java },
  { title: "Python", icon: python },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript2 },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "Python", icon: python2 },
  { name: "Java", icon: java2 },
  { name: "git", icon: git },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "Express.js", icon: expressjs },
  // { name: "Vite", icon: vite },
];

export const experiences = [
  {
    title: "Migrate",
    company_name: "Clerk",
    icon: migrate,
    iconBg: "#161329",
    date: "2012 - 2018",
    points: [
      "Review, update, track the order processing status into the system",
      "Organize and archive order records",
    ],
  },
];

export const projects = [{}];

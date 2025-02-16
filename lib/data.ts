import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import authApp from "@/public/Auth_app.jpg";
import Ecommerce from "@/public/ecommerce.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IT Support - XALKIADAKIS A.E",
    location: "Heraklion of Crete",
    description:
      "I worked as an IT support in a big company. Diagnoses and resolves hardware, software, and network issues to assist users with their technical needs. ",
    icon: React.createElement(CgWorkAlt),
    date: "December 2022 - November 2023",
  },
  {
    title:
      "Udemy Course: The Ultimate React Course 2024: React, Next.js, Redux & More",
    location: "Miami, FL",
    description:
      "I completed the course after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2022 - October 2022",
  },

  {
    title: "Freelance Full Stack Developer | Karpadu.com",
    location: "Heraklion of Crete",
    description:
      "Designed and developed web applications for clients, built and optimized scalable backend services using React, Express.js, MySQL.",
    icon: React.createElement(FaReact),
    date: "February 2024 - present",
  },
] as const;

export const projectsData = [
  {
    url: "https://mern-authapp-tpbf.onrender.com/",
    title: "AuthApp",
    description:
      "Created a safe and feature-rich authentication application that allows users to sign up, log in, and manage their accounts while utilizing strong security measures. ",
    tags: [
      "React",
      "Express.js",
      "Zustand",
      "Restfull APIs",
      "MongoDB",
      "MySQL",
      "Tailwind",
      "Redis",
    ],
    imageUrl: authApp,
  },
  {
    url: "https://ecommerce-app-t60p.onrender.com/",
    title: "E-commerce",
    description:
      " Included safe, real-time payment integration and classified product displays into a contemporary e-commerce website.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "MongoDB",
      "Express.js",
    ],
    imageUrl: Ecommerce,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Express.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "MySQL",
  "Framer Motion",
] as const;

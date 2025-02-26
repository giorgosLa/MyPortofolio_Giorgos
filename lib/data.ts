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
    title: "Full stack developer – Freelance ",
    location: " ",
    description:
      "Build new components or update existing ones. Ensure components are reusable and maintainable by following best practices like hooks. Debug issues in the UI, including styling, state management, or API integration. ",
    icon: React.createElement(CgWorkAlt),
    date: "August 2024 - Present",
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

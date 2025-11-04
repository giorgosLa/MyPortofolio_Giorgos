import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import authApp from "@/public/Auth_app.jpg";
import Ecommerce from "@/public/ecommerce.png";
import Mediagram from "@/public/mediagr.jpg";
import Karpadu from "@/public/karpadu.jpg";

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
    title: "Full stack developer – Karpadu ",
    location: "Heraklion, Greece",
    icon: React.createElement(CgWorkAlt),
    description:
      "I worked on building a modern car rental platform using Next.js and Tailwind CSS. Developed and optimized responsive UI components, ensuring strong performance, accessibility, and SEOacross devices.",
    date: "Jan 2024 - Present",
  },
  {
    title: "Full stack developer – Freelancer ",
    location: "Heraklion, Greece",
    description:
      "Build new components or update existing ones. Ensure components are reusable and maintainable by following best practices like hooks. Debug issues in the UI, including styling, state management, or API integration. ",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 — December 2023",
  },
] as const;

export const projectsData = [
  {
    url: "https://www.karpadu.com",
    title: "Karpadu - Car Rental Platform",
    description:
      " My main focus was delivering a smooth, mobile-friendly booking process and maintaining clean, scalable code aligned with modern React and Next.js best practices.",
    tags: ["React", "TypeScript", "Tailwind", "Next.js", "Framer Motion"],
    imageUrl: Karpadu,
  },
  {
    url: "https://www.mediagram.gr/",
    title: "Mediagram - Digital Marketing Agency",
    description:
      " Developed a high-performance landing page for a digital agency using Next.js and Tailwind CSS. Focused on responsive design, smooth animations, and SEO optimization to increase conversions and improve brand presentation.",
    tags: ["React", "TypeScript", "Tailwind", "Next.js", "Framer Motion"],
    imageUrl: Mediagram,
  },
  {
    url: "https://mern-authapp-tpbf.onrender.com/",
    title: "AuthApp",
    description:
      "Created a safe and feature-rich authentication application that allows users to sign up, log in, and manage their accounts while utilizing strong security measures. ",
    tags: [
      "React",
      "Node.js",
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
    tags: ["React", "TypeScript", "Tailwind", "Zustand", "MongoDB", "Node.js"],
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

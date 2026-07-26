import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Abhishek",
  initials: "SS",
  url: "https://github.com/abhishekck31",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "B.Tech student and aspiring Software Engineer focused on Data Structures & Algorithms and full-stack development. I build modern, scalable web applications using JavaScript, React, Next.js, and backend tools, with a strong focus on clean UI and performance.",
  summary:
    "Aspiring Software Engineer currently in 6th semester. Actively solving DSA problems daily and building real-world projects like SaaS platforms and business websites. Passionate about full-stack development, system design fundamentals, and building impactful tech products.",
  avatarUrl: "/me.png",
  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "Django",
    "Django REST Framework",
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
    "PythonAnywhere",
    "AWS",
    "Figma",
    "PostgreSQL",
    "MySQL"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "abhishek.ck3110@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhishekck31",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishekck/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/theabhishekx22",
        icon: Icons.x,
        navbar: true,
      },
      Cal: {
        name: "Book a Call",
        url: "https://cal.com/abhishek31",
        icon: Icons.calendar,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Taranova Solutions Private Limited",
      badges: [],
      href: "#",
      location: "On-site",
      title: "Software Engineering Intern",
      logoUrl: "/taranova.png",
      start: "April 2026",
      end: "May 2026",
      description:
        "• Autonomous LLM Workflows & Integration: Engineered an autonomous, multi-agent LLM workflow using FastAPI, Django, and NLP feature engineering for scanned PDF invoice classification and metadata tagging, automating structured JSON synchronization to Tally with 100% GSTN schema compliance.\n• Model Fine-Tuning & Performance Optimization: Self-hosted and fine-tuned Gemma 3 (27B) on an on-prem NVIDIA DGX Spark, cutting per-invoice data validation latency from 9s to 2s while eliminating paid API dependencies and establishing robust backend ingestion pipelines.",
    },
    {
      company: "Refurbo",
      badges: [],
      href: "https://refurbo.in/",
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/refurbo.png",
      start: "January 2026",
      end: "March 2026",
      description:
        "• Modular UI Component Architecture: Developed a responsive React, TypeScript, and Tailwind CSS component library across 10+ production screens, implementing high-performance image features that directly reduced checkout drop-off rates.\n• State Management & Code Reliability: Hardened application state management and error boundaries to eliminate rendering failures, maintaining a zero-defect pull request (PR) record across cross-device deployments using Git.",
    },
    {
      company: "Unacademy",
      href: "https://unacademy.com/",
      badges: [],
      location: "On-site",
      title: "Operations Analyst Intern",
      logoUrl: "/Unacademy.png",
      start: "June 2025",
      end: "August 2025",
      description:
        "• Process Automation & REST APIs: Architected a Flask REST API synchronized with Google Apps Script to automate internal reporting workflows, achieving a 95%+ reduction in manual operational processing time alongside Figma UI/UX prototyping.\n• Data Extraction & Competitive Intelligence: Built a scalable Python data extraction and scraping pipeline to collect and analyze metadata from 500+ competitor streams, delivering critical market distribution insights for marketing campaigns.",
    },
  ],
  education: [
    {
      school: "CMR University",
      href: "",
      degree: "Bachelor of Technology in Information Technology — GPA: 7.9 / 10.0",
      logoUrl: "/cmru.png",
      start: "July 2023",
      end: "May 2027",
    },
    {
      school: "REVA Independent PU College",
      href: "",
      degree: "12th Grade (PCMC) — Percentage: 90.02%",
      logoUrl: "/reva_pu_logo.png",
      start: "June 2021",
      end: "March 2023",
    },
    {
      school: "Sri Lakshmi Public School",
      href: "",
      degree: "10th Grade (CBSE) — Percentage: 80.5%",
      logoUrl: "/slps_logo.png",
      start: "June 2020",
      end: "May 2021",
    },
  ],
  projects: [
    {
      title: "MotoKids Toys",
      href: "https://github.com/samiksha0shukla/context-memory",
      //dates: "2024 - Present",
      active: true,
      description:
        "Built a full-stack e-commerce platform for Motoikids Toys with Next.js and Django, deployed on PythonAnywhere with secure API-driven product management. Implemented Razorpay payment integration and Shiprocket logistics to enable end-to-end automated checkout and fulfillment.",
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "NextJS",
        "Razorpay",
        "Shiprocket",
        "PythonAnywhere",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.motokidstoys.com/",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "",
      video: "",
    },
    {
      title: "nextlimiter",
      href: "https://github.com/abhishekck31/nextlimiter",
      //dates: "2024",
      active: true,
      description:
        "nextlimiter is a rate-limiting middleware for Next.js applications. It provides a simple and efficient way to implement rate limiting to protect your API routes from abuse. Published on npm with 25+ weekly downloads.",
      technologies: [
        "TypeScript",
        "NextJS",
        "Node.js",
        "npm",
        "GitHub",
      ],
      links: [
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/nextlimiter",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhishekck31/nextlimiter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Alog-Rythm 2.0",
      dates: "March 27th - 28th, 2025",
      location: "Gopalan College of Engineering",
      description:
        "From an idea to execution, Prajwal G and I built something that stood out—and it paid off! 🏆 We clinched 1st place in the Web Crafting - Alog-Rythm2.0 event at Gopalan College of Engineering! The competition was intense, and every team brought their A-game, but our approach to design, functionality, and execution helped us take the top spot.A great experience, a solid learning curve, and a reminder that clean, well-thought-out development always wins.",
      image: "/",
      links: [],
    },
    {
      title: "SJCIT CSE Technotsava Hackathon",
      dates: "April 3rd 2025",
      location: "SJCIT Chikkaballapura",
      description:
        "We secured 1st place in the Frontend Track at the SJCIT CSE Technotsava Hackathon! Me and Prajwal G built Timeline Explorer, a tool designed to visualize events and milestones in a clean, interactive way. It was exciting to bring the idea to life within the hackathon timeframe and see it resonate with the judges.",
      image: "/",
      win: "1st Place Winner",
      links: [],
    },
    {
      title: "Silver Spectrum Techfest-2025",
      dates: "October 2025",
      location: "New Horizon College of Engineering",
      description:
        "Won 1st Place and a cash prize of ₹10,000 in the Coding Contest at Silver Spectrum Techfest-2025!It was a fantastic challenge that tested our problem-solving skills. A huge thank you to New Horizon College of Engineering for the opportunity!",
      win: "1st Place Winner",
      links: [],
    },
  ],
} as const;

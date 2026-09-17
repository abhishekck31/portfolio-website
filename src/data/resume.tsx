import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Abhishek C K",
  initials: "ACK",
  url: "https://github.com/abhishekck31",
  location: "Bangalore, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru,+Karnataka",
  description:
    "Software Engineer specializing in AI/ML systems, multi-stage LLM pipelines, and high-performance full-stack web applications.",
  summary:
    "Software Engineer with hands-on experience architecting and deploying production-ready applications across AI/ML pipelines, distributed systems, and modern web platforms. Experienced in on-prem LLM deployment (Gemma 3 27B on NVIDIA DGX Spark), distributed rate limiting (nextlimiter on npm), automated data pipelines with pandas and Gemini API, and building high-performance web applications with React, TypeScript, Next.js, and FastAPI.",
  avatarUrl: "/Mypicture.png",
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "LLMs",
    "Prompt Engineering",
    "Agentic AI",
    "Multi-Stage LLM Pipelines",
    "NLP",
    "Ollama",
    "Gemini API",
    "pandas",
    "FastAPI",
    "Django",
    "Node.js",
    "REST APIs",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "MySQL",
    "SQLite",
    "Redis",
    "GitHub",
    "Vercel",
    "Postman",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS"
  ],
  skillsByCategory: {
    "Languages": ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    "AI & ML": [
      "LLMs",
      "Prompt Engineering",
      "Agentic AI",
      "Multi-Stage LLM Pipelines",
      "NLP",
      "Ollama",
      "Gemini API",
      "pandas"
    ],
    "Backend & APIs": ["FastAPI", "Django", "Node.js", "REST APIs"],
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    "Databases": ["MySQL", "SQLite", "Redis"],
    "Tools": ["GitHub", "Vercel", "Postman"],
    "CS Fundamentals": [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS"
    ]
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "abhishek.ck3110@gmail.com",
    tel: "6361067517",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhishekck31",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhisheckck/",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/aabhishek31/",
        icon: Icons.leetcode,
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
        url: "mailto:abhishek.ck3110@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Taranova Solutions Private Limited",
      badges: ["Python", "FastAPI", "LLMs", "Prompt Engineering", "NLP", "pdfplumber", "REST APIs"],
      href: "#",
      location: "Bangalore, Karnataka (On-site)",
      title: "Software Engineer Intern",
      logoUrl: "/taranova.png",
      start: "Apr 2026",
      end: "May 2026",
      description:
        "• Conducted **domain research** on Indian GST rules and Tally workflows to define data requirements before building a **multi-stage document processing pipeline** — orchestrating a **modular LLM workflow** (**FastAPI**, **Django**) with **pdfplumber** to extract fields from **unstructured PDF invoices** and variable-schema Excel files, normalising layouts into a canonical **JSON schema**.\n\n• Deployed and **prompt-engineered** a self-hosted **Gemma 3 (27B)** LLM on an on-prem **NVIDIA DGX Spark** to extract and validate invoice metadata (GSTIN, HSN codes, tax heads) against **GST rules**, cutting per-invoice latency from **9s to 2s**.\n\n• Engineered an **entity-matching stage** resolving extracted parties, tax heads, and stock items against a synced master-data catalogue — applying **text normalisation** and **similarity matching** to auto-tag records, detect duplicates, and flag unmatched entries for review.",
    },
    {
      company: "Refurbo",
      badges: ["React", "TypeScript", "Tailwind CSS", "Git"],
      href: "https://refurbo.in/",
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/refurbo.png",
      start: "Jan 2026",
      end: "Mar 2026",
      description:
        "• Built a modular, responsive **React** and **TypeScript** component library adopted across **10+ production screens**.\n\n• Implemented a high-performance **Image Zoom** feature using **Tailwind CSS**, directly reducing checkout drop-off rates.\n\n• Hardened **state management** with proper loading, error, and empty-state handling, maintaining a **zero-defect PR record** via **Git**.",
    },
    {
      company: "Unacademy",
      href: "https://unacademy.com/",
      badges: ["Python", "pandas", "YouTube Data API v3", "BeautifulSoup", "Gemini API", "SQL"],
      location: "Bangalore, Karnataka (On-site)",
      title: "Operations Analyst Intern",
      logoUrl: "/Unacademy.png",
      start: "June 2025",
      end: "Aug 2025",
      description:
        "• Built a **Python** data pipeline (**YouTube Data API v3**, **BeautifulSoup**, **pandas**) to extract and analyse weekly competitor channel metrics, driving a ranking improvement from **5th to 2nd position** over 5 weeks.\n\n• Fed competitor data into **Gemini API** prompts for **AI-driven analysis** with structured output, enabling data-driven content decisions at scale.\n\n• Built an **automation script** to pull Google Form response data, auto-fill and validate exam results on the portal, cutting per-student processing time from **~30–35s to ~8–10s**.",
    },
  ],
  education: [
    {
      school: "CMR University (CMRU)",
      href: "https://www.cmr.edu.in/",
      degree: "Bachelor of Technology — Information Technology — GPA: 7.9 / 10.0",
      logoUrl: "/cmr_university_logo.png",
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
      title: "nextlimiter — Distributed Rate Limiting Library",
      href: "https://npmjs.com/package/nextlimiter",
      active: true,
      description:
        "Published a production-ready **Node.js rate-limiting library** on **npm** implementing **5 distinct algorithms** (sliding window, token bucket, and more). Engineered a **Redis-backed atomic Lua script** store to eliminate race conditions across distributed server instances. Integrated **Prometheus metrics** for real-time observability and automated **CI/CD** pipelines via **GitHub Actions**.",
      technologies: [
        "Node.js",
        "Redis",
        "Lua Scripts",
        "Prometheus",
        "GitHub Actions",
        "TypeScript",
        "npm",
      ],
      links: [
        {
          type: "NPM",
          href: "https://npmjs.com/package/nextlimiter",
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
    },
    {
      title: "Full-Stack E-Commerce Platform with Automated Fulfillment",
      href: "https://www.motokidstoys.com",
      active: true,
      description:
        "Architected a full-stack e-commerce platform using **Next.js**, **Django REST Framework**, and **SQLite**. Integrated **Razorpay** and **Shiprocket APIs** to auto-generate shipments on payment confirmation, cutting **manual order placement by ~90%**. Optimized **SQLite** indexing to boost **search/query throughput by 4x** and automated customer notifications, cutting **manual communication overhead by ~80%**.",
      technologies: [
        "Next.js",
        "Django REST Framework",
        "SQLite",
        "Razorpay",
        "Shiprocket API",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.motokidstoys.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Alog-Rythm 2.0 (2025)",
      dates: "March 2025",
      location: "Gopalan College of Engineering",
      description:
        "Secured **1st place** in the Web Crafting Track at Gopalan College of Engineering. Built a standout, high-performance web platform praised for clean design aesthetics, responsive execution, and solid architecture under intense hackathon competition.",
      image: "",
      win: "1st Place Winner",
      links: [],
    },
    {
      title: "Silver Spectrum Techfest 2025",
      dates: "October 2025",
      location: "New Horizon College of Engineering",
      description:
        "Secured **1st place + ₹10,000 cash prize** in the Coding Contest at New Horizon College of Engineering, excelling in algorithms, data structures, and rapid problem solving.",
      image: "",
      win: "1st Place Winner",
      links: [],
    },
    {
      title: "Technotsava 8.0",
      dates: "April 2025",
      location: "SJCIT Chikkaballapura",
      description:
        "Secured **1st place** in the Frontend Track at the SJCIT CSE Hackathon. Architected Timeline Explorer, an interactive visualization tool for events and milestones in a clean, intuitive interface.",
      image: "",
      win: "1st Place Winner",
      links: [],
    },
  ],
} as const;

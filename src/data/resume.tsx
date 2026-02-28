import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
      company: "Refurbo",
      badges: [],
      href: "https://refurbo.in/",
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/refurbo.png",
      start: "January 2026",
      end: "Present",
      description:
        "• Working on real-world frontend features and bug fixes in a product-based environment.\n• Debugged complex UI rendering issues, including incorrect image mapping after sorting and filtering operations. \n• Collaborated using Git & GitHub, handling pull requests, code updates, and clean commit practices.\n• Focused on performance, clean UI, and maintainable code rather than quick fixes",
    },
    {
      company: "Unacademy",
      href: "https://unacademy.com/",
      badges: [],
      location: "Onsite",
      title: "Operations Analyst Intern",
      logoUrl: "/unacademy.png",
      start: "June 2025",
      end: "July 2025",
      description:
        "• Engineered a Flask API & Google Apps Script system to fully automate student performance reporting, saving 95%+ in manual work.\n•  Built a custom internal tool with Retool to manage and streamline the entire YouTube content publishing pipeline, improving team efficiency.\n• Automated competitor analysis using Python (Web Scraping) and conducted data analysis on 500+ videos to optimize content strategy.",
    },
  ],
  education: [
    {
      school: "CMR University",
      href: "",
      degree: "Bachelor of Technology in Information Technology",
      logoUrl: "/cmru.png",
      start: "2023",
      end: "2027",
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
      title: "AIxAI",
      href: "https://github.com/samiksha0shukla/AIxAI",
      //dates: "2024",
      active: true,
      description:
        "MCP-powered system that generates Pydantic AI agents using multi-agent LangGraph workflows. Crawls and chunks docs, stores in Supabase with OpenAI embeddings. Provides semantic search and RAG-based answers.",
      technologies: [
        "Agentic AI",
        "MultiAgent Workflow",
        "Pydantic AI",
        "LangGraph",
        "Supabase",
        "Agentic RAG",
        "MCP",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://aixai-mkfm.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/samiksha0shukla/AIxAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "HomeSage",
      href: "https://github.com/samiksha0shukla/HomeSage",
      //dates: "2024",
      active: true,
      description:
        "Smart companion for real estate price prediction and analytics. Leverages ML for accurate predictions and personalized property recommendations.",
      technologies: [
        "Python",
        "Machine Learning",
        "Data Analytics",
        "Data Visualization",
        "Data Engineering",
        "Feature Engineering",
        "EDA",
        "Prediction Models",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/samiksha0shukla/HomeSage",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "n8n",
      href: "https://github.com/samiksha0shukla/n8n",
      //dates: "2024",
      active: true,
      description:
        "Visual workflow automation platform built with React and FastAPI. Design, connect, and automate workflows in real time with a drag-and-drop interface.",
      technologies: [
        "React",
        "FastAPI",
        "Pydantic",
        "SQLAlchemy",
        "Python",
        "Workflow Automation",
        "Real-time",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/samiksha0shukla/n8n",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Transformers Research",
      href: "https://arxiv.org/pdf/1706.03762",
      active: true,
      description:
        "Deep dive into 'Attention Is All You Need' paper. Implementing transformer architecture from scratch, studying self-attention mechanisms and positional encodings.",
      technologies: [
        "PyTorch",
        "Transformers",
        "Self-Attention",
        "NLP",
        "Deep Learning",
        "Research",
      ],
      links: [
        {
          type: "Paper",
          href: "https://arxiv.org/pdf/1706.03762",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Tiny Recursive Model",
      href: "https://arxiv.org/pdf/2510.04871",
      active: true,
      description:
        "Researching efficient recursive model architectures and parameter-efficient approaches for LLMs. Exploring recursive computation and memory optimization in neural networks.",
      technologies: [
        "PyTorch",
        "LLMs",
        "Model Optimization",
        "Recursive Networks",
        "Deep Learning",
        "Research",
      ],
      links: [
        {
          type: "Paper",
          href: "https://arxiv.org/pdf/2510.04871",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon (SIH)",
      dates: "August 25th - 26th, 2022",
      location: "India",
      description:
        "Represented 6-member team in designing IoT-based Sewage Problem Alert system, securing top finalist position among 30,000+ participating teams. Developed a comprehensive solution for real-time sewage monitoring and alerting.",
      image: "/SIH2.webp",
      links: [],
    },
    {
      title: "Hack JKLU",
      dates: "March 3rd - 4th, 2023",
      location: "India",
      description:
        "Conceptualised and prototyped Blockchain-based eVault system with 256-bit encryption, earning 3rd place recognition for innovation. Built a secure digital vault solution leveraging blockchain technology for enhanced data protection.",
      image: "/jklulogo.jpg",
      win: "3rd Place Winner",
      links: [],
    },
  ],
} as const;

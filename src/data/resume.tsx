import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import eurlImg from '@/../public/eurl.png'
import vitalisImg from '@/../public/vitalis.png'
import { FaCrown } from "react-icons/fa";

export const DATA = {
  name: "Vijesh Shetty",
  initials: "VS",
  url: "https://vijesh.vercel.app",
  location: "Bangalore, India",
  locationLink: "https://lh5.googleusercontent.com/p/AF1QipPz_1tNzJsMmm3EfrKGJneK8WNp_MYrcDn4r_zI=w533-h240-k-no",
  description:
    "Full Stack Developer",
  summary:
    "Currently pursuing a B.E. in Information Science and Engineering at RV College of Engineering. I am passionate about Web development and Blockchain Technology. I have hands-on experience in building full stack applications ",
  avatarUrl: "/mypic.jpeg",
  skills: [
    "Next.js",
    "React",
    "TailwindCSS",
    "Typescript",
    "Node.js",
    "Express",
    "Redis",
    "Postgres",
    "Docker",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "./Resume.pdf", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "vijeshsshetty@gmail.com",
    tel: "+91 7795639998",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/VijeshVS",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vijeshsshetty/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/vijeshsshetty", // Placeholder if no X handle exists
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:vijeshsshetty@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "IEEE-RVCE",
      href: "https://rvce.edu.in/ieee",
      badges: [],
      location: "RVCE, Bangalore",
      title: "Web Developer",
      logoUrl: "/ieee-rvce.jpeg",
      start: "April 2024",
      end: "November 2024",
      description:
        "Collaborated on the CSITSS RVCE 2024 website to optimize the user interface and improve design responsiveness for enhanced usability.",
    },
  ],
  education: [
    {
      school: "RV College of Engineering",
      href: "https://rvce.edu.in",
      degree: "B.E. in Information Science and Engineering",
      logoUrl: "/rvce.jpeg",
      start: "2023",
      end: "2027",
    },
    {
      school: "Expert PU College",
      href: "https://expert.edu.in",
      degree: "Pre-University PCMC",
      logoUrl: "/expert.jpeg",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Vitalis",
      href: "https://github.com/VijeshVS/Vitalis",
      dates: "November 2024",
      active: true,
      description:
        "A decentralized healthcare platform facilitating secure and transparent interactions between doctors and patients, developed during a 36-hour hackathon at NMIT.",
      technologies: [
        "Next.js",
        "Web3.js",
        "IPFS",
        "Solidity",
        "TailwindCSS",
      ],
      image: vitalisImg,
      links: [
        {
          type: "Repository",
          href: "https://github.com/VijeshVS/Vitalis",
          icon: <Icons.github className="h-4 w-4" />,
        },
        {
          type: "Website",
          href: "https://vitalis.shrishdeshpande.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "EatMyURL",
      href: "https://eurl.dev",
      dates: "March 2024 - June 2024",
      active: true,
      description:
        "A link-shortening tool with advanced analytics, offering insights into engagement, devices, and geographic data.",
      technologies: [
        "Next.js",
        "Kafka",
        "Redis",
        "Clickhouse",
        "Express",
      ],
      image: eurlImg,
      links: [
        {
          type: "Repository",
          href: "https://github.com/vigneshshettyin/EatMyURL",
          icon: <Icons.github className="h-4 w-4" />,
        },
        {
          type: "Website",
          href: "https://eurl.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      
    },

    {
      title: "Muncipalty Action Center",
      dates: "Nov 2023 – Jan 2024",
      active: true,
      description:
        "Developed an Android application to monitor the quality of water resources in real-time, integrated ESP32 to collect data and commit it to Firebase Realtime Database, and used MPAndroidChart to seamlessly analyze and visualize the quality of water over time.",
      technologies: [
        "Java",
        "Firebase",
        "Arduino C"
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/VijeshVS/rssbuddy",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },

    {
      title: "RSS Buddy",
      dates: "Jun 2023 - Sep 2023",
      active: true,
      description:
        "Developed and continuously managed a web application for petrol bunk dealers, enabling seamless credit management, comprehensive bill tracking, and gaining client and dealer recognition.",
      technologies: [
        "Flask",
        "Python",
        "Postgres",
        "SqlAlchemy",
        "Jenkins"
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/VijeshVS/rssbuddy",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
    
  ],
  hackathons: [

    {
      title: "GenAI Hackathon",
      dates: "November 29,2024",
      location: "RV College of Engineering Bangalore",
      description:
        "Built an AI-powered workflow to help doctors diagnose diseases faster. The AI interacts with patients to gather information and arrive at a preliminary diagnosis, which is then sent to doctors for review. Doctors can review the report, add medications or remarks, and finalize the diagnosis. Patients can view the finalized report and prescriptions through their portal.",
      image:
        "/acc.jpeg",
      links: [
        {
          title: "Winner",
          icon: <FaCrown className="h-4 w-4"/>,
          href: "#"
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/VijeshVS/AyuConnect",
        },
      ],
    },
    {
      title: "Quanta-A-Maze 2.0",
      dates: "November 14-16, 2024",
      location: "NMIT Bangalore",
      description:
        "Developed during a 36-hour hackathon at NMIT-Bangalore, Vitalis is a decentralized healthcare platform promoting transparency between doctors and patients. It automates authentication, appointment booking, and the issuance of medical records using smart contracts. The platform ensures secure sharing of medical documents through asymmetric encryption, enabling seamless collaboration and trust within the healthcare ecosystem.",
      image: "/qbit.jpeg",
      technologies: ["NextJs"],
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/VijeshVS/Vitalis",
        },
      ],
    },
  ],
} as const;

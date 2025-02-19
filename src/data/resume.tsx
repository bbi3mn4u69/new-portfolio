import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import soma from "@/../public/icons/soma.png";
import deltaImg from "@/../public/icons/deltain.png"
import { FaCrown, FaDev } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import tip from "@/../public/icons/tip.png";
import virtualstagingart from "@/../public/icons/virtualstagingart.png";
import paraform from "@/../public/icons/paraform.png";


export const DATA = {
  name: "Huy",
  initials: "QHP",
  url: "https://vijesh.vercel.app",
  location: "Hanoi, Vietnam",
  locationLink:
    "https://lh5.googleusercontent.com/p/AF1QipPz_1tNzJsMmm3EfrKGJneK8WNp_MYrcDn4r_zI=w533-h240-k-no",
  description: "Full Stack Developer",
  summary:
    "I am currently pursuing a Software Development major at Swinburne University of Technology in Australia. I am deeply passionate about web development and blockchain technology, and have gained practical experience in building full-stack applications.",
  avatarUrl: "icons/huy.jpeg",
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
    email: "qh.namviet@gmail.com",
    tel: "+61 414625358",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bbi3mn4u69",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/huy-pham-085620297/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/vijeshsshetty",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:qh.namviet@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Lyra Technologies",
      href: "https://www.lyratechnologies.com.au/",
      badges: [],
      location: "RVCE, Bangalore",
      title: "Junior Web Developer",
      logoUrl: "icons/lyra-logo.svg",
      start: "Dec 2023",
      end: "Dec 2024",
      description: `Lyra is a leading digital product studio that helps startups and scale-ups design, build, and ship incredible products.

As a software engineer, I have worked with key stakeholders on delivering successful products to companies such as Concept Education and VirtualStaging.art.

Tech Stack: Next.js, Typescript, Postgres, Tailwind, GCP`,
    },
  ],
  education: [
    {
      school: "Swinburne University of Technology",
      href: "https://www.swinburne.edu.au",
      degree: "Software Development @ Swinburne University, GPA: 3.65",
      logoUrl: "icons/swinburne.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Phan Huy Chu - Dong Da Highschool",
      href: "https://www.phc.edu.vn/",
      degree: "GPA: 9.1",
      logoUrl: "icons/phanhuychu.png",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Delta Institute",
      href: "https://www.deltainstitute.co/",
      dates: "November 2024",
      active: true,
      description:
        "Delta Institute offered students to build the skills they’ll need to get an internship during college and a job after graduating.",
      technologies: ["Framer", "Next js", "Postgre DB", "TRPC", "Tailwind CSS", "NextUI CSS framework", "Schadcn CSS framework"],
      image: deltaImg,
      links: [
        {
          type: "Website",
          href: "https://www.deltainstitute.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Soma Capital",
      href: "https://somacap.com/",
      dates: "March 2024 - June 2024",
      active: true,
      description:
        "Soma Capital is a venture capital firm that invests in startups that use technology to improve humanity",
      technologies: ["Next.js","Prisma ORM", "TRPC", "Postgre DB", "Tailwind CSS", "Tremo CSS framework"],
      image: soma,
      links: [
        {
          type: "Website",
          href: "https://somacap.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },

    {
      title: "Tipriyo",
      dates: "Nov 2023 – Jan 2024",
      href: "https://www.tipriyo.ai/en",
      active: true,
      image: tip,
      description:
        "Tiprio is a product that easily generates unlimited furnished images of your home in less than a minute",
      technologies: ["Next js", "Prisma ORM", "TRPC", "Supabase DB", "Tailwind CSS"," Next js"," Prisma ORM", "Postgre DB",
        "TRPC", "Tailwind CSS", "NextUI CSS framework"," Schadcn CSS framework"],
      links: [
        {
          type: "Website",
          href: "https://www.tipriyo.ai/en",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },

    {
      title: "VirtualStaging.art",
      dates: "Jun 2023 - Sep 2023",
      active: true,
      image: virtualstagingart,
      description:
        "Virtual staging.Art allows users to enhance and transform a vacant or poorly furnished property using computer generated furniture",
      technologies: ["Next js", "Prisma ORM", "TRPC", "Supabase DB", "Tailwind CSS", "Next js"," Prisma ORM", "Postgre DB",
        "TRPC"," Tailwind CSS", "and other CSS framework"],
      links: [
        {
          type: "Website",
          href: "https://www.virtualstaging.art/en",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Paraform",
      dates: "Jun 2023 - Sep 2023",
      active: true,
      image: paraform,
      href: "https://www.paraform.com/",
      description:
        "Paraform is a talent platform where startups post referral bounties for open roles and anyone can claim that by successfully referring someone",
      technologies: ["Next js", "Prisma ORM", "TRPC", "Postgre DB", "Tailwind CSS", "TanStack"],
      links: [
        {
          type: "Website",
          href: "https://www.paraform.com/",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
  ],
  awards: [
    {
      title: "Swinburne Emerging Leader Program",
      dates: "Nov, 2024",
      location: "Swinburne University of Technology ",
      description:
        "The Swinburne Emerging Leader Program is an initiative designed to identify and nurture high-potential students, providing them with opportunities to develop critical leadership skills and enhance their employability through practical experiences and mentorship, preparing them for future professional roles within their chosen fields",
      image: "/acc.jpeg",
      links: [
        {
          title: "Winner",
          icon: <FaCrown className="h-4 w-4" />,
          href: "#",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/VijeshVS/AyuConnect",
        },
        {
          title: "Certificate",
          icon: <GrCertificate className="h-3 w-3" />,
          href: "https://drive.google.com/file/d/1V4k2IBulhvp5WF4M5pBWBe3ilBY4OsVJ/view?usp=drive_link",
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
        {
          title: "Devfolio",
          icon: <FaDev className="h-4 w-4" />,
          href: "https://devfolio.co/projects/vitalis-beaf",
        },
        {
          title: "Certificate",
          icon: <GrCertificate className="h-3 w-3" />,
          href: "https://drive.google.com/file/d/1lLWOtniAj1DU7YWJq3E41FM3xD3GBZHc/view?usp=drive_link",
        },
      ],
    },
  ],
} as const;

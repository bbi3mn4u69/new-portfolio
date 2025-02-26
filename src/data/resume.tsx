import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import soma from "@/../public/icons/soma.png";
import deltaImg from "@/../public/icons/deltain.png";
import { FaCrown, FaDev, FaRegNewspaper, FaSearch } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import tip from "@/../public/icons/tip.png";
import virtualstagingart from "@/../public/icons/virtualstagingart.png";
import paraform from "@/../public/icons/paraform.png";
import tradingPlatform from "@/../public/trading_platform.png";

export const DATA = {
  name: "Huy",
  initials: "QHP",
  url: "https://new-portfolio-lake-sigma.vercel.app/",
  location: "Hanoi, Vietnam",
  locationLink: "",
  description: "Full Stack Developer",
  summary:
    "I am currently pursuing a Software Development major at Swinburne University of Technology in Australia. I am deeply passionate about web development and blockchain technology, and have gained practical experience in building full-stack applications.",
  avatarUrl: "/icons/qhp.jpeg",
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
    "Javascript",
    "C",
    "C#",
    "Prisma ORM",
    "TRPC",
    "DB Management",
    "Python",
    "HTML",
    "CSS",
    "Ruby",
    "SQL",
    "Kotlin",
    "Swift",
    "PHP",
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
        name: "Email",
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
        "Delta Institute offered students to build the skills they'll need to get an internship during college and a job after graduating.",
      technologies: [
        "Framer",
        "Next js",
        "Postgre DB",
        "TRPC",
        "Tailwind CSS",
        "NextUI CSS framework",
        "Schadcn CSS framework",
      ],
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
      technologies: [
        "Next.js",
        "Prisma ORM",
        "TRPC",
        "Postgre DB",
        "Tailwind CSS",
        "Tremo CSS framework",
      ],
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
      technologies: [
        "Next js",
        "Prisma ORM",
        "TRPC",
        "Supabase DB",
        "Tailwind CSS",
        " Next js",
        " Prisma ORM",
        "Postgre DB",
        "TRPC",
        "Tailwind CSS",
        "NextUI CSS framework",
        " Schadcn CSS framework",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.tipriyo.ai/en",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
    },

    {
      title: "VirtualStaging.art",
      dates: "Jun 2023 - Sep 2023",
      href: "https://www.virtualstaging.art/en",
      active: true,
      image: virtualstagingart,
      description:
        "Virtual staging.Art allows users to enhance and transform a vacant or poorly furnished property using computer generated furniture",
      technologies: [
        "Next js",
        "Prisma ORM",
        "TRPC",
        "Supabase DB",
        "Tailwind CSS",
        "Next js",
        " Prisma ORM",
        "Postgre DB",
        "TRPC",
        " Tailwind CSS",
        "and other CSS framework",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.virtualstaging.art/en",
          icon: <Icons.globe className="h-4 w-4" />,
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
      technologies: [
        "Next js",
        "Prisma ORM",
        "TRPC",
        "Postgre DB",
        "Tailwind CSS",
        "TanStack",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.paraform.com/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Trading Platform",
      dates: "Oct 2023 - Mar 2023",
      active: true,
      image: tradingPlatform,
      href: "#",
      description: `Full Stack Trading Platform with React, Tailwinds, Nodejs, D3js chart and Solidity smart contract. 
The project features smooth Tailwind CSS animations, full responsiveness, and secure credential authentication. It supports search and filter functions, buying and selling of cryptocurrencies through smart contracts, and real-time transaction history and balance updates. React Toast handles error notifications, while D3 candlestick charts and hover tooltips display detailed crypto data. The backend includes an efficient API design for seamless blockchain integration.`,
      technologies: ["React", "Tailwind CSS", "Node js", "D3 js", "Solidity"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/bbi3mn4u69/COS30049-Computing_Technology_Innovation_Project",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
  ],
  awards: [
    {
      title: "Swinburne Emerging Leader Program",
      dates: "Nov, 2024",
      location: "Hawthorn Campus, Australia",
      description:
        "The Swinburne Emerging Leader Program is an initiative designed to identify and nurture high-potential students, providing them with opportunities to develop critical leadership skills and enhance their employability through practical experiences and mentorship, preparing them for future professional roles within their chosen fields",
      image: "icons/swinburne.png",
      links: [
        {
          title: "Certificate",
          icon: <GrCertificate className="h-3 w-3" />,
          href: "./quanghuy-cert.pdf",
        },
      ],
    },
    {
      title: "Swinburne International Excellence Undergraduate Scholarship",
      dates: "Dec, 2022",
      location: "Hawthorn Campus, Australia",
      description:
        "This scholarship is a merit-based scholarship offered to international students commencing an undergraduate or postgraduate course at Swinburne University Hawthorn campus.",
      // technologies: [""],
      image: "icons/swinburne.png",
      links: [
        {
          title: "Certificate",
          icon: <GrCertificate className="h-3 w-3" />,
          href: "./nguyen-quang-huy-pham-scholarship.pdf",
        },
      ],
    },
    {
      title: "International Science and Engineering Fair Finalist",
      dates: "Dec, 2022",
      location: "Atlanta, Georgia",
      description: `The International Science and Engineering Fair (ISEF) is an annual science competition for high school students. It's considered the top pre-college science competition in the world.`,
      // technologies: [""],
      image: "/isef.png",
      links: [
        {
          title: "Abstract Search",
          icon: <FaSearch className="h-3 w-3" />,
          href: "https://abstracts.societyforscience.org/Home/FullAbstract?Category=Behavioral%20and%20Social%20Sciences&FinalistLastName=Pham&IsGetAllAbstracts=True&FairCountry=Viet%20Nam&FairState=Any%20State&SelectedIsefYears%5B0%5D=0&projectId=22858",
        },
      ],
    },
    {
      title: "Vietnam Science and Engineering Fair Champion",
      dates: "Oct, 2022",
      location: "Hanoi, Vietnam",
      description: `The "Vietnam Science and Engineering Fair" (ViSEF) is a national-level competition in Vietnam where high school students showcase their science and engineering projects, essentially serving as the Vietnamese qualifier for the international "International Science and Engineering Fair" (ISEF) where students can compete against peers from around the world; it is organized by the Vietnamese Ministry of Education and Training`,
      // technologies: [""],
      image: "/visef.png",
      links: [
        {
          title: "Certificate",
          icon: <GrCertificate className="h-3 w-3" />,
          href: "./huy-visef-cert.jpg",
        },
        {
          title: "News",
          icon: <FaRegNewspaper className="h-3 w-3" />,
          href: "https://dantri.com.vn/giao-duc/hai-nam-sinh-gen-z-chinh-phuc-giai-khoa-hoc-ky-thuat-quoc-te-20221229115915248.htm",
        },
      ],
    },
    {
      title: "Vietnam Science and Engineering Fair - 2nd - district-level",
      dates: "Oct, 2021",
      location: "Hanoi, Vietnam",
      description: `The "Vietnam Science and Engineering Fair" (ViSEF) is a national-level competition in Vietnam where high school students showcase their science and engineering projects, essentially serving as the Vietnamese qualifier for the international "International Science and Engineering Fair" (ISEF) where students can compete against peers from around the world; it is organized by the Vietnamese Ministry of Education and Training`,
      // technologies: [""],
      image: "/visef.png",
      links: [
        {
          title: "Certificate",
          icon: <GrCertificate className="h-3 w-3" />,
          href: "./huy-visef-cert.jpg",
        },
      ],
    },
  ],
} as const;

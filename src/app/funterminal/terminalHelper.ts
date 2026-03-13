import { flushSync } from "react-dom";

export const avaiableCommands = [
  {
    command: "theme-dark",
    description: "Change the theme to dark",
    response: "Theme changed to dark",
  },
  {
    command: "theme-light",
    description: "Change the theme to light",
    response: "Theme changed to light",
  },
  {
    command: "find-dev",
    description: "Find a developer",
    response: "sudo find awesome-developer --location 'Melbourne - Australia'\nDeveloper found! Initializing Quang Huy.exe...",
  },
  {
    command: "stats",
    description: "Show stats",
    response: "Loading player stats:\n\nLevel 21 Full-Stack Developer\nClass: Code Wizard 🧙‍♂️\nSpecial Power: Turning coffee into code ☕",
  },
  {
    command: "education",
    description: "Show education history",
    response: "Education Quest Progress:\n\nSwinburne University: Completed\nAchievement Unlocked: GPA 3.65 🌟\nRMIT University: In Progress\nSkill Tree Unlocked: Next.js Ninja 🥷, TypeScript Tamer 🐯, CSS Sorcerer 🔮, Database Whisperer 🗃️",
  },
  {
    command: "skills",
    description: "Show available skills",
    response: "Skill Tree Unlocked: Next.js Ninja 🥷, TypeScript Tamer 🐯, CSS Sorcerer 🔮, Database Whisperer 🗃️",
  },
  {
    command: "experience",
    description: "Show available skills",
    response: "Prev Mission: Crafting digital wonders @ VirtualStaging, Tipriyo, Paraform, Status: Turning bugs into features",
  },
  {
    command: "achievements",
    description: "Show achievements",
    response: "Side Quest Achievements: Survived International Science Fair Boss Battle, Defeated Vietnam Science Fair Final Boss, Earned 'Emerging Leader' Badge",
  },
  {
    command: "warning",
    description: "Show creativity warning",
    response: "WARNING: High levels of creativity detected! Side effects may include: Spontaneous problem-solving, Excessive innovation, Uncontrollable desire to optimize code",
  },
  {
    command: "help",
    description: "Show help",
    response: "Available commands:\n\nfind-dev        Locate the developer\ncontact         Show contact information\nstats           Show developer stats\neducation       Show education history\nskills          Show skill tree\nexperience      Show past missions\nachievements    Show achievements\nwarning         Show creativity warning\nhire --dev quanghuy --mode beast",
  },
  {
    command: "contact",
    description: "Show contact information",
    response: "Contact information: Email: qh.namviet@gmail.com, Phone: +61 414625358, Address: 1/20 Launder st, Hawthorn, VIC 3122, Australia",
  },
  {
    command: "clear",
    description: "Clear the terminal",
    response: "",
  },
  {
    command: "exit",
    description: "Exit the terminal",
    response: "Exiting terminal...",
  },
  {
    command: "ls",
    description: "List the files in the current directory",
    response: "Directory contents: Quang Huy.exe, Quang Huy.pdf, Quang Huy.txt",
  },
  {
    command: "cd",
    description: "Change the directory",
    response: "Changed directory to: Quang Huy's Folder",
  },
  {
    command: "hire --dev quanghuy --mode beast",
    description: "Hire the developer",
    response: "Developer hired! Initializing Quang Huy.exe...",
  },

  {
    command: "coffee",
    description: "Turn coffee into code",
    response: "Coffee turned into code! Initializing Quang Huy.exe...",
  },
];
export const initialTerminalArray: string[] =  [
];


export const toggleTheme = async () => {
  await document.startViewTransition(() => {
    flushSync(() => {
      const newTheme = !document.documentElement.classList.contains("dark")
      document.documentElement.classList.toggle("dark")
      localStorage.setItem("theme", newTheme ? "dark" : "light")
    })
  }).ready

  const { top, left, width, height } =
    document.documentElement.getBoundingClientRect()
  const x = left + width / 2
  const y = top + height / 2
  const maxRadius = Math.hypot(
    Math.max(left, window.innerWidth - left),
    Math.max(top, window.innerHeight - top)
  )

  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${maxRadius}px at ${x}px ${y}px)`,
      ],
    },
    {
      duration: 400,
      easing: "ease-in-out",
      pseudoElement: "::view-transition-new(root)",
    }
  )
}
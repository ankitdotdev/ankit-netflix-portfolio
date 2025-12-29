// import { FaJava } from "react-icons/fa6";
import { SkillSetsProps } from "../../types/skills/skillsSetTypes";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiMongodb,
  SiRedux,
  SiApachenetbeanside,
  SiSupabase,
  SiFirebase,
  SiPrisma,
  SiMongoose,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { TbSquareRoundedLetterZFilled } from "react-icons/tb";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { RiFlowChart } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";

// Languages
export const languages: SkillSetsProps = {
  title: "Languages",
  skillCard: [
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      context: "Typed superset of JavaScript.",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      context: "Core language of the web.",
    },
    {
      icon: <FaJava />,
      name: "Java",
      context: "Object-oriented, general-purpose language.",
    },
  ],
};
export const frontend: SkillSetsProps = {
  title: "Frontend",
  skillCard: [
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      context: "React framework for SSR & SSG.",
    },
    {
      icon: <SiReact />,
      name: "React",
      context: "UI library for building components.",
    },
    {
      icon: <SiCss3 />,
      name: "CSS3",
      context: "Cascading Style Sheets for styling.",
    },
    {
      icon: <SiHtml5 />,
      name: "HTML5",
      context: "Markup language for the web.",
    },
  ],
};

export const backend: SkillSetsProps = {
  title: "Backend",
  skillCard: [
    // 🔹 Core Backend
    {
      icon: <SiNodedotjs />,
      name: "Node.js",
      context: "JavaScript runtime for backend.",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      context: "Minimal backend framework for Node.js.",
    },
    {
      icon: <SiApachenetbeanside />,
      name: "RESTful API",
      context: "Standard for designing scalable APIs.",
    },

    // 🔹 Databases & ORM/ODM
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      context: "Document-oriented NoSQL database.",
    },
    {
      icon: <SiMongoose />,
      name: "Mongoose",
      context: "ODM for MongoDB schemas, validation, and queries.",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
      context: "Type-safe ORM supporting SQL & NoSQL databases.",
    },

    // 🔹 BaaS Platforms
    {
      icon: <SiFirebase />,
      name: "Firebase",
      context: "Serverless backend — DB, auth, hosting, cloud functions.",
    },
    {
      icon: <SiSupabase />,
      name: "Supabase",
      context: "Open-source Firebase alternative powered by Postgres.",
    },

    // 🔹 System Design
    {
      icon: <RiFlowChart />,
      name: "System Design",
      context: "Scalable architecture, design patterns, and microservices.",
    },
  ],
};

export const stateManagement: SkillSetsProps = {
  title: "State Management",
  skillCard: [
    {
      icon: <TbSquareRoundedLetterZFilled />,
      name: "Zustand",
      context: "Lightweight state management for React.",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
      context: "Predictable state container for JavaScript apps.",
    },
    {
      icon: <TbCircleLetterCFilled />,
      name: "Context API",
      context: "Built-in React feature for global state.",
    },
  ],
};
export const tools: SkillSetsProps = {
  title: "Tools",
  skillCard: [
    { icon: <SiGit />, name: "Git", context: "Version control system." },
    { icon: <SiGithub />, name: "GitHub", context: "Code hosting platform." },
    {
      icon: <SiPostman />,
      name: "Postman",
      context: "API testing & collaboration tool.",
    },
    {
      icon: <DiVisualstudio />,
      name: "VS Code",
      context: "Code editor of choice.",
    },
  ],
};

export const deployment: SkillSetsProps = {
  title: "Deployment",
  skillCard: [
    {
      icon: <SiVercel />,
      name: "Vercel",
      context: "Hosting for Next.js & frontend apps.",
    },
    { icon: <SiNetlify />, name: "Netlify", context: "Web hosting & CI/CD." },
  ],
};

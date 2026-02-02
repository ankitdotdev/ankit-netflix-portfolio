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
  SiMysql,
  SiAmazon,
  SiDocker,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { TbSquareRoundedLetterZFilled } from "react-icons/tb";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { RiFlowChart } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";

export const languages: SkillSetsProps = {
  title: "Languages",
  skillCard: [
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      context: "Strongly typed superset of JavaScript.",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      context: "Core programming language for web and backend.",
    },
    {
      icon: <FaJava />,
      name: "Java",
      context: "Object-oriented language for backend applications.",
    },
  ],
};

export const frontend: SkillSetsProps = {
  title: "Frontend",
  skillCard: [
    {
      icon: <SiReact />,
      name: "React",
      context: "Component-based UI library.",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      context: "React framework for SSR, SSG, and performance.",
    },
    {
      icon: <SiHtml5 />,
      name: "HTML5",
      context: "Markup language for structuring web content.",
    },
    {
      icon: <SiCss3 />,
      name: "CSS3",
      context: "Styling language for responsive layouts.",
    },
  ],
};

export const backend: SkillSetsProps = {
  title: "Backend & APIs",
  skillCard: [
    {
      icon: <SiNodedotjs />,
      name: "Node.js",
      context: "JavaScript runtime for scalable backend services.",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      context: "Minimal framework for REST APIs.",
    },
    {
      icon: <SiApachenetbeanside />,
      name: "RESTful APIs",
      context: "Designing scalable and stateless APIs.",
    },
  ],
};

export const databases: SkillSetsProps = {
  title: "Databases & ORMs",
  skillCard: [
    {
      icon: <SiMysql />,
      name: "MySQL",
      context: "Relational database using SQL.",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      context: "NoSQL document-oriented database.",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
      context: "Type-safe ORM for SQL & NoSQL databases.",
    },
    {
      icon: <SiMongoose />,
      name: "Mongoose",
      context: "ODM for MongoDB schemas and queries.",
    },
  ],
};

export const cloudDevOps: SkillSetsProps = {
  title: "Cloud & DevOps",
  skillCard: [
    {
      icon: <SiAmazon />,
      name: "AWS",
      context: "Cloud platform for compute, storage, and networking.",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
      context: "Containerization for consistent deployments.",
    },
  ],
};

export const baas: SkillSetsProps = {
  title: "Backend as a Service",
  skillCard: [
    {
      icon: <SiFirebase />,
      name: "Firebase",
      context: "Serverless backend with auth, DB, and functions.",
    },
    {
      icon: <SiSupabase />,
      name: "Supabase",
      context: "Open-source backend powered by PostgreSQL.",
    },
  ],
};

export const systemDesign: SkillSetsProps = {
  title: "System Design",
  skillCard: [
    {
      icon: <RiFlowChart />,
      name: "System Design",
      context: "Scalable architectures, design patterns, and microservices.",
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
      context: "Predictable state container for applications.",
    },
    {
      icon: <TbCircleLetterCFilled />,
      name: "Context API",
      context: "Built-in React global state solution.",
    },
  ],
};

export const tools: SkillSetsProps = {
  title: "Tools",
  skillCard: [
    { icon: <SiGit />, name: "Git", context: "Version control system." },
    { icon: <SiGithub />, name: "GitHub", context: "Code hosting and collaboration." },
    {
      icon: <SiPostman />,
      name: "Postman",
      context: "API testing and debugging.",
    },
    {
      icon: <DiVisualstudio />,
      name: "VS Code",
      context: "Primary development environment.",
    },
  ],
};

export const deployment: SkillSetsProps = {
  title: "Deployment",
  skillCard: [
    {
      icon: <SiVercel />,
      name: "Vercel",
      context: "Frontend and Next.js deployments.",
    },
    {
      icon: <SiNetlify />,
      name: "Netlify",
      context: "Hosting with CI/CD support.",
    },
  ],
};


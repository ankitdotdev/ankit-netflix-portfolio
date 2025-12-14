import {
  FaLaptopCode, // dev work
  FaUsersCog, // leadership
  FaUniversity, // university / degree
  FaSchool, // school
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

export const experiences = [
  // ✅ Work Experience
  {
    title: "Backend Developer (Lead)",
    subtitle: "Stew Digital Solutions Pvt Ltd",
    date: "May 2025 – Present",
    description: [
      "Adopted and implemented a scalable, maintainable backend architecture using modern technologies and modular class-based design, enabling long-term system growth.",
      "Led and coordinated a team of 5 developers, managing project planning, task breakdown, execution, and end-to-end delivery for 12+ client projects.",
      "Contributed as a core team member beyond development by improving workflows across software development and digital marketing teams to support company growth.",
      "Streamlined internal management processes by introducing Notion for task tracking, documentation, and planning, improving team visibility and coordination.",
    ],
    icon: <FaUsersCog />,
  },
  {
    title: "Full Stack Developer",
    subtitle: "Corbin Technology Solutions Pvt Ltd",
    date: "Dec 2023 – Sep 2024",
    description: [
      "Developed and maintained backend services for complex applications across LMS, CMS, eCommerce, and healthcare domains, handling real-world business logic.",
      "Designed and implemented secure REST APIs, managed database schemas and operations, and integrated JWT-based authentication for core system workflows.",
      "Applied Clean Architecture principles to improve code structure, scalability, and long-term maintainability across projects.",
      "Built and supported admin dashboards, appointment booking systems, and payment gateway integrations as part of end-to-end feature delivery.",
      "Collaborated closely with clients, designers, and frontend developers to gather requirements and deliver features on time.",
    ],
    icon: <FaLaptopCode />,
  },

  // ✅ Education
  {
    title: "MBA (Business Analytics)",
    subtitle: "Amity University Online",
    date: "Jul 2024 – Present",
    description: [
      "Pursuing MBA with specialization in Business Analytics, focusing on data-driven decision making.",
    ],
    icon: <SiGoogleanalytics />,
  },
  {
    title: "B.Sc. IT",
    subtitle: "SIA College, Dombivli",
    date: "Jun 2020 – Jun 2023",
    description: [
      "Graduated with 8.83 SGPA, strong foundation in software development and IT concepts.",
    ],
    icon: <FaUniversity />,
  },
  {
    title: "HSC (12th Grade)",
    subtitle: "SIA Junior College",
    date: "Jun 2018– May 2020 ",
    description: ["Completed Higher Secondary Education with Science ."],
    icon: <FaSchool />,
  },
];

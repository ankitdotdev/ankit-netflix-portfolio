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
    title: "Sr. Backend Developer (Lead)",
    subtitle: "Stew Digital Solutions",
    date: "May 2025 – Present",
    description: [
      "Backend Lead responsible for guiding a team of 4–5 developers, managing project planning, task tracking, and client communication.",
      "Designed and implemented a streamlined process for efficient progress tracking and delivery management.",
      "Spearheaded migration of legacy systems to modern tech stacks and Clean Architecture, improving scalability, maintainability, and overall performance.",
      "Acted as a core team member contributing to both backend development and system integrations, ensuring robust and reliable solutions.",
    ],
    icon: <FaUsersCog />,
  },
  {
    title: "Full Stack Developer",
    subtitle: "Corbin Technology Solutions Pvt Ltd",
    date: "Dec 2023 – Sep 2024",
    description: [
      "Directed a small team of developers, overseeing backend development and successful delivery of projects across multiple domains including LMS, CMS, eCommerce, and healthcare.",
      "Applied Clean Architecture principles to design modular and maintainable systems, improving scalability and long-term code quality.",
      "Engineered secure RESTful APIs, optimized database schemas, and implemented core business logic to support critical application functionalities.",
      "Integrated backend services with features such as role-based admin dashboards, appointment booking systems, and payment gateways, ensuring seamless user experiences.",
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

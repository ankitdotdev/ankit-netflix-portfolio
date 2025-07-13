import { MainProfileTypes } from "../types/MainProfileTypes";

const MainProfile: MainProfileTypes[] = [
  {
    role: "recruiter",
    heroBanner: {
      videoSrc:
        "/videos/heroBanner/recruiter.gif",
      title: "Ankit Mishra – Full Stack Developer",
      description:
        "I build intelligent, scalable, and high-performance web applications by blending clean architecture, backend mastery, and modern frontend frameworks. Let’s turn ideas into powerful digital experiences.",
      ctas: [
        {
          label: "Resume",
          icon: "/icons/resume.svg",
          route: "/resume",
        },
        {
          label: "Contact Me",
          icon: "/icons/contact.svg",
          route: "/contact",
        },
      ],
    },
  },
];

export default MainProfile;

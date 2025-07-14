import { MainProfileTypes } from "../types/MainProfileTypes";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const MainProfile: MainProfileTypes[] = [
  {
    role: "recruiter",
    heroBanner: {
      videoSrc:
        // "/videos/heroBanner/recruiter.gif",
        "/videos/heroBanner/intro2.mp4",
      title: "Ankit Mishra – Full Stack Developer",
      description:
        "I build intelligent, scalable, and high-performance web applications by blending clean architecture, backend mastery, and modern frontend frameworks. Let’s turn ideas into powerful digital experiences.",
      ctas: [
        {
          label: "Resume",
          icon: <FaPlay />,
          route:
            "https://drive.google.com/file/d/1J_ZoqTb83OMFngKq_Z5RAJ1mqZNwuUCa/view?usp=sharing",
          variant: "primary",
        },
        {
          label: "LinkedIn",
          icon: <IoIosInformationCircleOutline />,
          route: "https://www.linkedin.com/in/ankit-ravindra-mishra-19050121a/",
          variant: "secondary",
        },
      ],
    },
  },
 {
    role: "developer",
    heroBanner: {
      videoSrc:
        // "/videos/heroBanner/recruiter.gif",
        "/videos/heroBanner/developer.mp4",
      title: "Ankit Mishra – Full Stack Developer",
      description:
        "I build intelligent, scalable, and high-performance web applications by blending clean architecture, backend mastery, and modern frontend frameworks. Let’s turn ideas into powerful digital experiences.",
      ctas: [
        {
          label: "Resume",
          icon: <FaPlay />,
          route:
            "https://drive.google.com/file/d/1J_ZoqTb83OMFngKq_Z5RAJ1mqZNwuUCa/view?usp=sharing",
          variant: "primary",
        },
        {
          label: "LinkedIn",
          icon: <IoIosInformationCircleOutline />,
          route: "https://www.linkedin.com/in/ankit-ravindra-mishra-19050121a/",
          variant: "secondary",
        },
      ],
    },
  },
   {
    role: "stalker",
    heroBanner: {
      videoSrc:
        // "/videos/heroBanner/recruiter.gif",
        "/videos/heroBanner/stalker.mp4",
      title: "Ankit Mishra – Full Stack Developer",
      description:
        "I build intelligent, scalable, and high-performance web applications by blending clean architecture, backend mastery, and modern frontend frameworks. Let’s turn ideas into powerful digital experiences.",
      ctas: [
        {
          label: "Resume",
          icon: <FaPlay />,
          route:
            "https://drive.google.com/file/d/1J_ZoqTb83OMFngKq_Z5RAJ1mqZNwuUCa/view?usp=sharing",
          variant: "primary",
        },
        {
          label: "LinkedIn",
          icon: <IoIosInformationCircleOutline />,
          route: "https://www.linkedin.com/in/ankit-ravindra-mishra-19050121a/",
          variant: "secondary",
        },
      ],
    },
  },
   {
    role: "adventure",
    heroBanner: {
      videoSrc:
        // "/videos/heroBanner/recruiter.gif",
        "/videos/heroBanner/adventure.mp4",
      title: "Ankit Mishra – Full Stack Developer",
      description:
        "I build intelligent, scalable, and high-performance web applications by blending clean architecture, backend mastery, and modern frontend frameworks. Let’s turn ideas into powerful digital experiences.",
      ctas: [
        {
          label: "Resume",
          icon: <FaPlay />,
          route:
            "https://drive.google.com/file/d/1J_ZoqTb83OMFngKq_Z5RAJ1mqZNwuUCa/view?usp=sharing",
          variant: "primary",
        },
        {
          label: "LinkedIn",
          icon: <IoIosInformationCircleOutline />,
          route: "https://www.linkedin.com/in/ankit-ravindra-mishra-19050121a/",
          variant: "secondary",
        },
      ],
    },
  },
];

export default MainProfile;

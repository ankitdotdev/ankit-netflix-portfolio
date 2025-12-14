import { MainProfileTypes } from "../types/MainProfileTypes";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const RESUME_LINK =
  "https://drive.google.com/file/d/1wHKFGUHs-Ouj1bx6bNyUhDQhYv_u-JRV/view?usp=sharing";
const MainProfile: MainProfileTypes[] = [
  {
    role: "recruiter",

    heroBanner: {
      videoSrc:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXpqOXo3Ym5lbjI4YXM0eWttbDNvaHBrbnd2NXFzdmg4OWxhcHJsaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif",
      title: "Ankit Mishra – Full Stack Developer",
      description:
        "I build intelligent, scalable, and high-performance web applications by blending clean architecture, backend mastery, and modern frontend frameworks. Let’s turn ideas into powerful digital experiences.",
      ctas: [
        {
          label: "Resume",
          icon: <FaPlay />,
          route: RESUME_LINK,
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
    topPicks: [
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754749437/guys-skate-pool_1_movwtf.jpg",
        label: "Skills",
        route: "/skills",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754830928/hacker-working-darkness_1_cjoc4w.jpg",
        label: "Projects",
        route: "/projects",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754836821/scenery-highway-countryside-sunset_1_bexrfu.jpg",
        label: "Experience",
        route: "/work-experience",
      },
      // {
      //   image:
      //     "https://res.cloudinary.com/doqckc96f/image/upload/v1754749437/guys-skate-pool_1_movwtf.jpg",
      //   label: "Recommendations",
      //   route: "/skills",
      // },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754837707/cyberpunk-urban-scenery_1_jcxyq1.jpg",
        label: "Certifications",
        route: "/skills",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754838279/beautiful-miami-bayside-marketplace-scene_1_z73hqh.jpg",
        label: "Contact Me",
        route: "/contact-me",
      },
    ],
    continueWatching: [
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754840113/download_1_ercdkp.jpg",
        label: "Music",
        route: "/music",
      },

      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754839695/Reading_Books_Aesthetic_Pictures_vzsodr.jpg",
        label: "Reading",
        route: "/reading",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754840389/blogs_alacyr.jpg",
        label: "Blogs",
        route: "/blogs",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754850231/download_2_1_zm1jme.jpg",
        label: "Games",
        route: "/games",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754841408/Japan_Tokyo_Street_Night_Desktop_Wallpaper_blsndm.jpg",
        label: "Contact Me",
        route: "/contact",
      },
    ],
  },
  {
    role: "developer",
    heroBanner: {
      videoSrc: "https://i.gifer.com/81RA.gif",

      title: "Ankit Mishra – Full Stack Developer",
      description:
        "I build intelligent, scalable, and high-performance web applications by blending clean architecture, backend mastery, and modern frontend frameworks. Let’s turn ideas into powerful digital experiences.",
      ctas: [
        {
          label: "Resume",
          icon: <FaPlay />,
          route: RESUME_LINK,
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
    topPicks: [
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754749437/guys-skate-pool_1_movwtf.jpg",
        label: "Skills",
        route: "/skills",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754830928/hacker-working-darkness_1_cjoc4w.jpg",
        label: "Projects",
        route: "/projects",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754836821/scenery-highway-countryside-sunset_1_bexrfu.jpg",
        label: "Experience",
        route: "/work-experience",
      },
      // {
      //   image:
      //     "https://res.cloudinary.com/doqckc96f/image/upload/v1754749437/guys-skate-pool_1_movwtf.jpg",
      //   label: "Recommendations",
      //   route: "/skills",
      // },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754837707/cyberpunk-urban-scenery_1_jcxyq1.jpg",
        label: "Certifications",
        route: "/skills",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754838279/beautiful-miami-bayside-marketplace-scene_1_z73hqh.jpg",
        label: "Contact Me",
        route: "/contact-me",
      },
    ],
    continueWatching: [
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754840113/download_1_ercdkp.jpg",
        label: "Music",
        route: "/music",
      },

      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754839695/Reading_Books_Aesthetic_Pictures_vzsodr.jpg",
        label: "Reading",
        route: "/reading",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754840389/blogs_alacyr.jpg",
        label: "Blogs",
        route: "/blogs",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754850231/download_2_1_zm1jme.jpg",
        label: "Games",
        route: "/games",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754841408/Japan_Tokyo_Street_Night_Desktop_Wallpaper_blsndm.jpg",
        label: "Contact Me",
        route: "/contact",
      },
    ],
  },
  {
    role: "stalker",
    heroBanner: {
      videoSrc: "https://i.gifer.com/QBnX.gif",

      title: "Ankit Mishra – Full Stack Developer",
      description:
        "I build intelligent, scalable, and high-performance web applications by blending clean architecture, backend mastery, and modern frontend frameworks. Let’s turn ideas into powerful digital experiences.",
      ctas: [
        {
          label: "Resume",
          icon: <FaPlay />,
          route: RESUME_LINK,
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
    topPicks: [
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754749437/guys-skate-pool_1_movwtf.jpg",
        label: "Skills",
        route: "/skills",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754830928/hacker-working-darkness_1_cjoc4w.jpg",
        label: "Projects",
        route: "/projects",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754836821/scenery-highway-countryside-sunset_1_bexrfu.jpg",
        label: "Experience",
        route: "/work-experience",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754837707/cyberpunk-urban-scenery_1_jcxyq1.jpg",
        label: "Certifications",
        route: "/skills",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754838279/beautiful-miami-bayside-marketplace-scene_1_z73hqh.jpg",
        label: "Contact Me",
        route: "/contact-me",
      },
    ],

    continueWatching: [
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754840113/download_1_ercdkp.jpg",
        label: "Music",
        route: "/music",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754839695/Reading_Books_Aesthetic_Pictures_vzsodr.jpg",
        label: "Reading",
        route: "/reading",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754840389/blogs_alacyr.jpg",
        label: "Blogs",
        route: "/blogs",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754850231/download_2_1_zm1jme.jpg",
        label: "Games",
        route: "/games",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754841408/Japan_Tokyo_Street_Night_Desktop_Wallpaper_blsndm.jpg",
        label: "Contact Me",
        route: "/contact",
      },
    ],
  },
  {
    role: "adventure",
    heroBanner: {
      videoSrc: "https://i.gifer.com/3dof.gif",

      title: "Ankit Mishra – Full Stack Developer",
      description:
        "I build intelligent, scalable, and high-performance web applications by blending clean architecture, backend mastery, and modern frontend frameworks. Let’s turn ideas into powerful digital experiences.",
      ctas: [
        {
          label: "Resume",
          icon: <FaPlay />,
          route: RESUME_LINK,
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
    topPicks: [
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754749437/guys-skate-pool_1_movwtf.jpg",
        label: "Skills",
        route: "/skills",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754830928/hacker-working-darkness_1_cjoc4w.jpg",
        label: "Projects",
        route: "/projects",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754836821/scenery-highway-countryside-sunset_1_bexrfu.jpg",
        label: "Experience",
        route: "/work-experience",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754837707/cyberpunk-urban-scenery_1_jcxyq1.jpg",
        label: "Certifications",
        route: "/skills",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754838279/beautiful-miami-bayside-marketplace-scene_1_z73hqh.jpg",
        label: "Contact Me",
        route: "/contact-me",
      },
    ],

    continueWatching: [
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754840113/download_1_ercdkp.jpg",
        label: "Music",
        route: "/music",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754839695/Reading_Books_Aesthetic_Pictures_vzsodr.jpg",
        label: "Reading",
        route: "/reading",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754840389/blogs_alacyr.jpg",
        label: "Blogs",
        route: "/blogs",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754850231/download_2_1_zm1jme.jpg",
        label: "Games",
        route: "/games",
      },
      {
        image:
          "https://res.cloudinary.com/doqckc96f/image/upload/v1754841408/Japan_Tokyo_Street_Night_Desktop_Wallpaper_blsndm.jpg",
        label: "Contact Me",
        route: "/contact",
      },
    ],
  },
];

export default MainProfile;

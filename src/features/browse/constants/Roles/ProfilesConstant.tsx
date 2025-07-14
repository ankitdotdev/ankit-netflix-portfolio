import { ProfileProps } from "../../types/Roles/Roles";

export const ProfilseData: ProfileProps[] = [
  {
    slug: "recruiter",
    image: "/rolesImages/blue.png",
    label: "Recruiter",
    route: "/profile/recruiter",
  },
  {
    slug: "developer",

    image: "/rolesImages/grey.png",
    label: "Developer",
    route: "/profile/developer",
  },
  {
    slug: "stalker",

    image: "/rolesImages/red.png",
    label: "Stalker",
    route: "/profile/stalker",
  },
  {
    slug: "adventure",
    image: "/rolesImages/yellow.png",
    label: "Adventure",
    route: "/profile/adventure",
  },
];

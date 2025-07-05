"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { ProfilseData } from "@/features/browse/constants/Roles/ProfilesConstant";
import { useParams, usePathname, useRouter } from "next/navigation";

interface NavItems {
  label: string;
  route: string;
}

const navItems: NavItems[] = [
  {
    label: "Home",
    route: "/profile/:profileId",
  },
  {
    label: "Professional",
    route: "/work-experience",
  },
  {
    label: "Skills",
    route: "/skills",
  },
  {
    label: "Projects",
    route: "/projects",
  },
  {
    label: "Hire Me",
    route: "/profile/:profileId",
  },
];

const Navbar = () => {
  const { id } = useParams();
  const pathName = usePathname();
  const router = useRouter();
  const [profile, setProfile] = useState("/rolesImages/blue.png");

  useEffect(() => {
    const profileImage = ProfilseData.find((profile) => profile.label === id);
    if (profileImage) {
      setProfile(profileImage.image);
    }
  }, [id]);
  const excludedPath: string[] = ["/", "/browse"];
  if (excludedPath.includes(pathName)) {
    return null;
  }

  return (
    <nav className={styles.navContainer}>
      {/* Left Area */}
      <div className={styles.navLeft}>
        <Image
          src="/logo.png"
          alt="Logo"
          height={30}
          width={180}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
        <ul className={styles.navLinks}>
          {navItems.map((nav, index) => (
            <li key={index}>
              <Link href={nav.route}>{nav.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Area */}
      <div className={`${styles.navRight} ${styles.profile}`}>
        <Image
          src={profile}
          alt="Profile Logo"
          height={40}
          width={40}
          onClick={() => router.push("/browse")}
        />
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import { ProfilseData } from "@/features/browse/constants/Roles/ProfilesConstant";
import { useParams, usePathname, useRouter } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";

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
  const [profile, setProfile] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const browseButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const profileImage = ProfilseData.find((profile) => profile.slug === id);
    if (profileImage) {
      setProfile(profileImage.image);
    }
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        browseButtonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !browseButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  const excludedPath: string[] = ["/", "/browse"];
  if (excludedPath.includes(pathName)) return null;

  const getRoute = (route: string) =>
    route.includes(":profileId") ? route.replace(":profileId", id as string) : route;

  return (
    <nav className={styles.navContainer}>
      {/* Left */}
      <div className={styles.navLeft}>
        <Image
          src="/logo.png"
          alt="Logo"
          height={30}
          width={180}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        />

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className={styles.navLinks}>
            {navItems.map((nav, index) => (
              <li key={index}>
                <Link href={getRoute(nav.route)}>{nav.label}</Link>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Browse Button */}
        {isMobile && (
          <div className={styles.mobileMenuContainer}>
            <div
              ref={browseButtonRef}
              className={styles.browseButton}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>Browse</span>
              <IoMdArrowDropdown
                className={`${styles.browseIcon} ${isOpen ? styles.rotated : ""}`}
                size={20}
              />
            </div>

            <div
              ref={dropdownRef}
              className={`${styles.mobileDropdown} ${isOpen ? styles.open : ""}`}
            >
              <ul className={styles.mobileDropdownLinks}>
                {navItems.map((nav, index) => (
                  <li key={index}>
                    <Link
                      href={getRoute(nav.route)}
                      onClick={() => setIsOpen(false)}
                    >
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Right - Profile */}
      <div className={`${styles.navRight} ${styles.profile}`}>
        <Image
         src={profile || "/rolesImages/blue.png"} 
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

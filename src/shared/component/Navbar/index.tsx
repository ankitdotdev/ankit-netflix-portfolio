"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import { ProfilseData } from "@/features/browse/constants/Roles/ProfilesConstant";
import { useParams, usePathname, useRouter } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { useProfileStore } from "@/zustand/store/profile/profile";

interface NavItems {
  label: string;
  route: string;
}

const navItems: NavItems[] = [
  { label: "Home", route: "/profile/:profileId" },
  { label: "Professional", route: "/work-experience" },
  { label: "Skills", route: "/skills" },
  { label: "Projects", route: "/projects" },
  { label: "Hire Me", route: "/contact-me" },
];

const Navbar = () => {
  const { profileId, setProfileId } = useProfileStore();
  const params = useParams<{ id?: string }>();
  const id = params?.id;
  const pathName = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const browseButtonRef = useRef<HTMLDivElement>(null);

  // Keep Zustand + localStorage in sync
  useEffect(() => {
    if (id) {
      setProfileId(id);
      localStorage.setItem("profileId", id);
    } else {
      const storedId = localStorage.getItem("profileId");
      if (storedId) {
        setProfileId(storedId);
        if (pathName.startsWith("/profile")) {
          router.replace(`/profile/${storedId}`);
        }
      }
    }
  }, [id, setProfileId, pathName, router]);

  // Mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown on outside click
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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  // Hide Navbar on excluded paths
  const excludedPath = ["/", "/browse"];
  if (excludedPath.includes(pathName)) return null;

  const getRoute = (route: string) =>
    route.includes(":profileId")
      ? route.replace(":profileId", profileId || "")
      : route;

  const profileImage =
    ProfilseData.find((p) => p.slug === profileId)?.image ||
    "/rolesImages/blue.png";

  return (
    <nav className={styles.navContainer}>
      {/* Left Section */}
      <div className={styles.navLeft}>
        <Image
          src="/logo.png"
          alt="Logo"
          height={30}
          width={180}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        />

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className={styles.navLinks}>
            {navItems.map((nav) => (
              <li key={nav.label}>
                <Link href={getRoute(nav.route)}>{nav.label}</Link>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div className={styles.mobileMenuContainer}>
            <div
              ref={browseButtonRef}
              className={styles.browseButton}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span>Browse</span>
              <IoMdArrowDropdown
                className={`${styles.browseIcon} ${
                  isOpen ? styles.rotated : ""
                }`}
                size={20}
              />
            </div>

            <div
              ref={dropdownRef}
              className={`${styles.mobileDropdown} ${
                isOpen ? styles.open : ""
              }`}
            >
              <ul className={styles.mobileDropdownLinks}>
                {navItems.map((nav) => (
                  <li key={nav.label}>
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

      {/* Right Section */}
      <div className={`${styles.navRight} ${styles.profile}`}>
        <Image
          src={profileImage}
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

import React from "react";
import CertificationCard from "./components/certificationsCard";
import { SiUdemy } from "react-icons/si";

const certs = [
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "Issued Sep 2024",
    href: "https://www.udemy.com/certificate/UC-2e3a7346-3483-4849-9e66-4fd49c10bb64/",
    Icon: SiUdemy,
  },
];

export default function CertificationsGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 24,
        width: "100%",
        maxWidth: 1100,
        margin: "0 auto",
        padding: 24,
      }}
    >
      {certs.map((c, i) => (
        <CertificationCard key={i} {...c} />
      ))}
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./ProfileCard.module.css";
import { ProfileProps } from "../../types/Roles/Roles";

const RoleCard: React.FC<ProfileProps> = ({ image, route, label,slug }) => {
  return (
    <Link href={route} className={style.card}>
      <div className={style.imageWrapper}>
        <Image
          src={image}
          alt={label}
          width={200}
          height={200}
          className={style.image}
          onClick={() => {
            localStorage.setItem("profileImage", label);
            localStorage.setItem("profileId", slug);
          }}
        />
      </div>
      <h3 className={style.label}>{label}</h3>
    </Link>
  );
};

export default RoleCard;

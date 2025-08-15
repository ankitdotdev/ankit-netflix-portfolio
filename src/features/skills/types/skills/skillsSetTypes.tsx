import { ReactNode } from "react";

export interface SkillSetsProps {
  title: string;
  skillCard: {
    icon: ReactNode;
    name: string;
    context: string;
  }[];
}
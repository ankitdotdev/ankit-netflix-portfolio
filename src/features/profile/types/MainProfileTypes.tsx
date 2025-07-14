import { ReactNode } from "react";

export type CTA = {
  label: string;
  icon: ReactNode;
  route: string;
  variant?:"primary" | "secondary";
};

export type HeroBannerTypes = {
  videoSrc: string;
  title: string;
  description: string;
  ctas: CTA[];
};

// export type ImageCard = {
//   image: string;
//   label: string;
//   route: string;
// };

export interface MainProfileTypes {
    role:string;
  heroBanner: HeroBannerTypes;
//   topPicks: ImageCard[];
//   continueWatching: ImageCard[];
}


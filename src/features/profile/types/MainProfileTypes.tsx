export type CTA = {
  label: string;
  icon: string;
  route: string;
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


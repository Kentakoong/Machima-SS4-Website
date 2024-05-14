import Image, { ImageProps } from "next/image";

export const LinkedInLogo = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image src="/social/linkedin.png" alt="LinkedIn" {...props} />
);

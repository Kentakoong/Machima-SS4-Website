import Image, { ImageProps } from "next/image";

export const InstagramLogo = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image src="/social/instagram.png" alt="Instagram" {...props} />
);

import Image, { ImageProps } from "next/image";

export const GitHubLogo = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image src="/social/github.png" alt="LinkedIn" {...props} />
);

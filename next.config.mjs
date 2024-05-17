import createJiti from "jiti";
import { fileURLToPath } from "node:url";
import createMDX from "@next/mdx";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/utils/env.ts");

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);

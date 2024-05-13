import createJiti from "jiti";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/utils/env.ts");

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["drive.google.com"],
  },
};

export default nextConfig;

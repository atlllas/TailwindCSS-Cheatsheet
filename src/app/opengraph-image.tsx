import { ImageResponse } from "next/og";
import { OG_IMAGE_SIZE, OgImageContent } from "@/lib/og-image";

export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export const alt = "Tailwind CSS v4 Cheatsheet";

export default function Image() {
  return new ImageResponse(<OgImageContent />, { ...size });
}

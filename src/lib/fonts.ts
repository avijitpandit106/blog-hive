import { MuseoModerno, Poppins } from "next/font/google";

export const museo = MuseoModerno({
  subsets: ["latin"],
  variable: "--font-logo",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});
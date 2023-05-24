import "@/styles/globals.css";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["greek"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Drone Landing Page",
  description:
    "Visual artists use drones to capture beautiful new images and camera angles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}

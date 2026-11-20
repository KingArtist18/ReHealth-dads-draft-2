import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "ReHealth Dads | Become the Man You Want to Be", template: "%s | ReHealth Dads" },
  description:
    "Coaching and practical support for fathers who want to become the man they want to be, one small win at a time.",
};

export const viewport: Viewport = { themeColor: "#1F5A92" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sharan Krishna Vaka | Cybersecurity & Digital Forensics",
  description:
    "Portfolio of Sharan Krishna Vaka — cybersecurity, ethical hacking, vulnerability assessment, and digital forensics.",
  keywords: [
    "cybersecurity",
    "digital forensics",
    "VAPT",
    "ethical hacking",
    "Sharan Krishna Vaka"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

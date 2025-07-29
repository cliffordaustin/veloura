import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Veloura",
  description: "Built with Tailwind CSS v4",
};

const ppeditorial = localFont({
  src: [
    {
      path: "../../public/fonts/editorial-font/ppeditorialnew-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/editorial-font/ppeditorialnew-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/editorial-font/ppeditorialnew-ultrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/editorial-font/ppeditorialnew-ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/editorial-font/ppeditorialnew-ultralightitalic.otf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-ppeditorial",
});

const synonym = localFont({
  src: [
    {
      path: "../../public/fonts/synonym/synonm-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/synonym/synonm-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/synonym/synonm-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/synonym/synonm-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-synonym",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <meta name="theme-color" content="#f8f6d6" />
      <body
        className={`antialiased bg-cream text-primary ${ppeditorial.variable} ${synonym.variable} ${synonym.className}`}
      >
        {children}
      </body>
    </html>
  );
}

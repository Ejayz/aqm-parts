import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";
import "react-image-gallery/styles/css/image-gallery.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Assured Quality Manufacturing - CNC Machining & 3D Printing in Brooklet, GA",
  description:
    "Assured Quality Manufacturing provides high-quality CNC machining, 3D printing, and product design services. Contact us for your fabrication needs!",
  keywords:
    "CNC machining, 3D printing, sheet metal fabrication, product design, prototypes, Assured Quality Manufacturing, Brooklet GA",
  authors: [{ name: "Assured Quality Manufacturing" }],
  openGraph: {
    title: "Assured Quality Manufacturing - Quality CNC & 3D Printing Services",
    description:
      "Transform your ideas into reality with our advanced CNC machining and 3D printing services in Brooklet, GA.",
    url: "https://www.aqm.parts",
    images: "/path-to-your-image.jpg", // Replace with the actual image path
  },
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico", // Favicon path
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/assets/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/assets/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/assets/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/assets/favicon_io/site.webmanifest" />
      </head>

      <body className={`${inter} antialiased `} data-theme="light">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FileFlow Hub",
  description:
    "Explore the future of file storage with our comprehensive full-stack application. Featuring advanced capabilities such as seamless organization management, secure file uploads, efficient file handling, role-based authorization, authentication for enhanced security, automated cron deletes, a user-friendly favorites system, and a convenient trash feature. Elevate your file storage experience with our user-centric application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ConvexClientProvider>
          <Header />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}

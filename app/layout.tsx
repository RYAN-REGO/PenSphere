import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
    
export const metadata: Metadata = {
  title: "Medium Clone",
  description: "Share your knowledge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
          <html lang="en">
      <body className={fontSans.variable}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}

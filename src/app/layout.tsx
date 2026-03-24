import type { Metadata } from "next";
import { Inter, Roboto, Syncopate } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/hooks/useAuth";
import { Toaster } from "sonner";
import { CartProvider } from "@/hooks/useCart";

const synocorpate = Syncopate({
  subsets: ["latin"],
  variable: "--font-syncopate",
  weight: ["700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Velocity Tech Academy",
  description: "Number 1 IT training platform in Bangladesh",
  keywords: [
    "Number 1 IT training platform in Bangladesh",
    "Best IT training platform in Bangladesh",
    "Best IT training platform in Dhaka",
    "Best web development company in Dhaka",
    "Best web development company in Bangladesh",
    "react js development",
    "Mahmood Hassan Rameem",
    "MERN stack development",
    "Graphics Design",
    "Networking",
    "CCNA, CCNP, CCIE, MTCNA, MTCNE",
    "CCNA",
    "CCNP",
    "CCIE",
    "MTCNA",
    "MTCNE",
    "UI / UX",
    "Digital Marketing",
    "Mobile App Development",
    "Video Editing",
    "VFX",
    "3D Animation",
    "3D Modeling",
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "LLM",
    "web development",
    "web design",
    "Bangladesh",
    "ROL Studio Bangladesh",
    "Next.js",
  ],
  openGraph: {
    title: "Velocity Tech Academy",
    description: "Number 1 IT training platform in Bangladesh",
    url: "https://rolstudiobangladesh.vercel.app/",
    siteName: "Velocity Tech Academy",
    images: [
      {
        url: "https://rolstudiobangladesh.vercel.app/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${synocorpate.variable} ${inter.variable} ${roboto.variable} antialiased`}
    >
      <AuthProvider>
        <CartProvider>
          <body className="font-inter flex min-h-full flex-col">
            {children}
            <Toaster richColors position="bottom-right" />
          </body>
        </CartProvider>
      </AuthProvider>
    </html>
  );
}

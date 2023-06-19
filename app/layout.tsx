import "./globals.css";
import Header from "@/components/navigation/header";
import Navbar from "@/components/navigation/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-y-hidden">
      <body className={inter.className}>
        <div className="flex flex-row bg-slate-100 overflow-y-auto">
          <Navbar />
          <div className="flex flex-col w-screen overflow-y-auto">
            <Header />
            <div className="h-screen">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

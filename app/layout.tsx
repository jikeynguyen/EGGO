import type { Metadata } from "next";
import "./globals.css";

import { Nunito } from "next/font/google";
import { Navbar } from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";

import LoginModel from "./components/models/LoginModel";
import RegisterModel from "./components/models/RegisterModel";
import RentModel from "./components/models/RentModel";
import SearchModel from "./components/models/SearchModel";
import Footer from "./components/Footer/Footer";

import ToasterProvider from "./providers/ToasterProvider";
import { getCurrentUser } from "./actions/getCurrentUser";

export const metadata: Metadata = {
  title: "EGGO",
  description: "This is a great place for you to set up a playground for entertainment activities and connect quickly, safely, and conveniently ✨",
  /* icons: {icon: '/Users/thinhpld0/Desktop/IU/Startup/youtube2/test/Your-Hotel-Hotel-Booking-Using-NEXTJS-/app/icon.png'} */
  
};


const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/icon.png" sizes="32x32" type="image/png" />
        <style>{`body { font-family: ${font.className}; }`}</style>
      </head>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModel />
          <RegisterModel />
          <LoginModel />
          <RentModel />
          <Navbar currentUser={currentUser} />

          
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}

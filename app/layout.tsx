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
  description: "Đây là nơi tuyệt vời để bạn thiết lập sân chơi cho các hoạt động thể thao, giải trí và kết nối nhanh chóng, an toàn và thuận tiện ✨",

  
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

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { usePathname } from "next/navigation";
import Sidebar from "./admin/AdminComponents/Sidebar";
import AdminFooter from "./admin/AdminComponents/AdminFooter";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin");
  //function to add 2 numbers?
  return (
    <html lang="en">
      <body>
        {isAdminRoute ? (
          <div className=" flex relative ">
            <Sidebar />
            <div className="flex-grow pl-[350px] mt-[100px]">{children}</div>
          </div>
        ) : (
          <>
         
            <Navbar /> {children} 
          </>
        )}

        <div className="relative">
          {isAdminRoute ? <AdminFooter /> : <Footer />}
        </div>
      </body>
    </html>
  );
}

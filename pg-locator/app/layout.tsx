import { Nunito } from "next/font/google";

import "./globals.css"
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";



export const metadata = {
  title: "Pg-Locator",
  description: "Pg-Locator",
}

const font = Nunito({
  subsets: ["latin"],
});

export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();


  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal/>
          <LoginModal />
          <RegisterModal />
           <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
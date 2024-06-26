import Nav from "./(components)/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OpenSource Suggestions",
  description:
    "Suggestions of OpenSource projects or regular project ideas for developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <div className="flex flex-col h-screen max-h-screen">
            <Nav />
            <div className="flex-grow overflow-y-auto bg-page text-default-textcolor">
              {children}
            </div>
          </div>
        </body>
      </UserProvider>
    </html>
  );
}

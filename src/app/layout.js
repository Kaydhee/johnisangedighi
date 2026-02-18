import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "../lib/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JohnIsangedighi.ng",
  description: "excellence in service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

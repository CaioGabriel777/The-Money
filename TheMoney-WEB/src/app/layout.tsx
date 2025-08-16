import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Header  from "@/components/Header";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // nome da variável CSS.
  display: 'swap',
})


export const metadata: Metadata = {
  title: "The Money",
  description: "Transformando seu dinheiro com tecnologia.",
};

export default function RootLayout({

  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}

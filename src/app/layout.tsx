import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// import { DM_Sans, Poppins } from 'next/font/google'

// const dmSans = DM_Sans({ weight: ["400", "500", "700"], variable: "--font-dmsans", subsets: ['latin-ext'] })
// const poppins = Poppins({ weight: ["400", "500", "700"], variable: "--font-poppins", subsets: ['latin']})

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

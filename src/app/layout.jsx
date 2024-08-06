import { Montagu_Slab, Montserrat } from "next/font/google";
import "./globals.css";

const montagu_slab = Montagu_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montagu-slab",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "E-book Store",
  description: "E-book Store is an online store for e-book lovers. From where you can find all of your books online and available.You can also Sell your books online at your own cost and you can purchase them at your own cost",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montagu_slab.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}

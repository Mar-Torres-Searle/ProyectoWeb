import localFont from "next/font/local";
import "./globals.css";
import Nvbar from "@/components/Nvbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pokemon App",
  description: "App para ver pokemons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
        <meta name="keywords" content=""></meta>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nvbar></Nvbar>
        {children}
      </body>
    </html>
  );
}

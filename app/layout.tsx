import "./globals.css";
import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "CarNova",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        {/* Add the following line to include your favicon */}
        <link rel='icon' href='/app/favicon.ico' />
        <title>{metadata.title}</title>
      </head>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

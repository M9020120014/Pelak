/* --- Base ------------------------------------------------------------------------------------- */
import "@/styles/globals.css";
/* --- Lib -------------------------------------------------------------------------------------- */
import { textFont, titleFont } from "@/lib/fonts";
/* --- Components ------------------------------------------------------------------------------- */
import Providers from "@/components/Providers";
/* --- Functions -------------------------------------------------------------------------------- */
/* --- Root Layout -------------------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={textFont.variable + " " + titleFont.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Pelak is a platform for creating and managing your own website." />
        <meta name="keywords" content="Pelak, website, platform, create, manage" />
        <meta name="author" content="Pelak" />
        <meta name="robots" content="index, follow" />
        <meta name="google" content="notranslate" />
        <title>Pelak</title>
      </head>
      <body className="transition duration-300 px-012-3">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}


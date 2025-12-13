'use client';

import { ThemeProvider } from "next-themes";

/* --- Functions -------------------------------------------------------------------------------- */
/* --- Providers ---------------------------------------------------- */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
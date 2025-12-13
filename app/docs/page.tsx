"use client";

import { redirect } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import {UI as P} from "@/components/ui/Pelak";

export default function HomePage() {
  return (
    <main className="w-full max-w-7xl mx-auto min-h-screen flex-col gap-008-2 justify-censter items-stretch pt-110-C">

      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold animate-bounce text-center">Docs</h1>
        <ThemeSwitcher />
        <button onClick={() => redirect("/")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Home </button>
      </div>

      <p>How to install dependencies and structure your app.</p>
      <br />

      <button onClick={() => redirect("/docs/color")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Colors </button>
      <button onClick={() => redirect("/docs/size")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Sizes </button>
      <br />      <br />

      <button onClick={() => redirect("/docs/input")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Inputs </button>
      <button onClick={() => redirect("/docs/button")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Buttons </button>
      <button onClick={() => redirect("/docs/icon")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Icons </button>

      <br />
      <br />

      <P.Input placeholder="Input" />
      <br />
      <br />
      <P.Button>Button</P.Button>

      <P.Icon/>
    </main>
  );
}

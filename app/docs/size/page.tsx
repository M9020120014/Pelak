"use client";

import { redirect } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function SizePage() {
  return (
    <main className="w-full max-w-7xl mx-auto min-h-screen flex-col gap-008-2 justify-censter items-stretch pt-110-C">

      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold animate-bounce text-center">Sizes</h1>
        <ThemeSwitcher />
        <button onClick={() => redirect("/docs")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Docs </button>
      </div>


      <h2 className=" bg-Border text-Shadow my-008-2 p-004-1 text-center">Border Width</h2>
      <div className="flex flex-col bg-Panel rounded-md p-008-2 gap-008-2">
        <div className="bg-Background text-Foreground border-0 border-Border p-1 rounded-xs text-center">border-0</div>
        <div className="bg-Background text-Foreground border-sm border-Border p-1 rounded-xs text-center">border-sm</div>
        <div className="bg-Background text-Foreground border-md border-Border p-1 rounded-xs text-center">border-md</div>
        <div className="bg-Background text-Foreground border-lg border-Border p-1 rounded-xs text-center">border-lg</div>
      </div>

      <h2 className=" bg-Border text-Shadow my-008-2 p-004-1 text-center">Shadow</h2>
      <div className="flex flex-col bg-Panel rounded-md p-034-7 gap-034-7">
        <div className="bg-Background text-Primary text-shadow-0 shadow-Shadow shadow-0 p-1 rounded-xs text-center">shadow-0</div>
        <div className="bg-Background text-Primary text-shadow-1 shadow-Shadow shadow-1 p-1 rounded-xs text-center">shadow-1</div>
        <div className="bg-Background text-Primary text-shadow-2 shadow-Shadow shadow-2 p-1 rounded-xs text-center">shadow-2</div>
        <div className="bg-Background text-Primary text-shadow-1b shadow-Shadow shadow-1b p-1 rounded-xs text-center">shadow-1b</div>
        <div className="bg-Background text-Primary text-shadow-2b shadow-Shadow shadow-2b p-1 rounded-xs text-center">shadow-2b</div>
      </div>


    </main>
  );
}

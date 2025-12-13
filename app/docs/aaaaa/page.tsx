"use client";

import { redirect } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function AaaaaPage() {
  return (
    <main className="w-full max-w-7xl mx-auto min-h-screen flex-col gap-008-2 justify-censter items-stretch pt-110-C">

      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold animate-bounce text-center">aaaaa</h1>
        <ThemeSwitcher />
        <button onClick={() => redirect("/docs")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Docs </button>
      </div>





    </main>
  );
}

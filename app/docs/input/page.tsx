"use client";

import { redirect } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import {UI as P} from "@/components/ui/Pelak";

export default function InputPage() {
  return (
    <main className="w-full max-w-7xl mx-auto min-h-screen flex-col gap-008-2 justify-censter items-stretch pt-110-C">


      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold animate-bounce text-center">Inputs</h1>
        <ThemeSwitcher />
        <button onClick={() => redirect("/docs")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Docs </button>
      </div>



      <h2 className=" bg-Border text-Shadow my-008-2 p-004-1 text-center">Inputs</h2>
      <div className="flex flex-col bg-Panel rounded-md p-034-7 gap-034-7">
        <P.Input type="button" placeholder="button" />
        <P.Input type="checkbox" placeholder="selection" />
        <P.Input type="color" placeholder="color" />
        <P.Input type="date" placeholder="date" />
        <P.Input type="datetime-local" placeholder="datetime-local" />
        <P.Input type="email" placeholder="email" />
        <P.Input type="file" placeholder="file" />
        <P.Input type="hidden" placeholder="hidden" />
        <P.Input type="image" placeholder="image" />
        <P.Input type="month" placeholder="month" />
        <P.Input type="number" placeholder="number" />
        <P.Input type="password" placeholder="password" />
        <P.Input type="radio" placeholder="radio" />
        <P.Input type="range" placeholder="range" />
        <P.Input type="reset" placeholder="reset" />
        <P.Input type="search" placeholder="search" />
        <P.Input type="submit" placeholder="submit" />
        <P.Input type="tel" placeholder="tel" />
        <P.Input type="text" placeholder="text" />
        <P.Input type="time" placeholder="time" />
        <P.Input type="url" placeholder="url" />
        <P.Input type="week" placeholder="week" />
        <P.Input disabled type="button" placeholder="button" />
        <P.Input disabled type="checkbox" placeholder="selection" />
        <P.Input disabled type="color" placeholder="color" />
        <P.Input disabled type="date" placeholder="date" />
        <P.Input disabled type="datetime-local" placeholder="datetime-local" />
        <P.Input disabled type="email" placeholder="email" />
        <P.Input disabled type="file" placeholder="file" />
        <P.Input disabled type="hidden" placeholder="hidden" />
        <P.Input disabled type="image" placeholder="image" />
        <P.Input disabled type="month" placeholder="month" />
        <P.Input disabled type="number" placeholder="number" />
        <P.Input disabled type="password" placeholder="password" />
        <P.Input disabled type="radio" placeholder="radio" />
        <P.Input disabled type="range" placeholder="range" />
        <P.Input disabled type="reset" placeholder="reset" />
        <P.Input disabled type="search" placeholder="search" />
        <P.Input disabled type="submit" placeholder="submit" />
        <P.Input disabled type="tel" placeholder="tel" />
        <P.Input disabled type="text" placeholder="text" />
        <P.Input disabled type="time" placeholder="time" />
        <P.Input disabled type="url" placeholder="url" />
        <P.Input disabled type="week" placeholder="week" />
      </div>


    </main>
  );
}

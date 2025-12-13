"use client";

import { redirect } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { UI as P } from "@/components/ui/Pelak";
import { useState } from "react";

export default function IconPage() {
  const [active, setActive] = useState(false);
  const [activeFit, setActiveFit] = useState(false);
  return (
    <main className="w-full max-w-7xl mx-auto min-h-screen flex-col gap-008-2 justify-censter items-stretch pt-110-C">

      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold animate-bounce text-center">Icon</h1>
        <ThemeSwitcher />
        <button onClick={() => redirect("/docs")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Docs </button>
      </div>

      <div className="flex flex-row gap-2">
        <P.Button Size="lg" ThemeProps="default" Theme="secondary">
          salam
        </P.Button>

        <P.Button Theme="primary" Size="lgIcon" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
          <P.Icon Active={active} />
        </P.Button>
        <P.Button ThemeProps="outline" Theme="secondary" Size="lgIcon" onMouseEnter={() => setActiveFit(true)} onMouseLeave={() => setActiveFit(false)}>
          <P.Icon ActiveFit={activeFit} />
        </P.Button>

        <P.Button Size="lg" ThemeProps="outline" Theme="secondary">
          salam
        </P.Button>

        <div className="p-20 bg-Error">

          <P.Button Size="lg" ThemeProps="outline" Theme="black" className="m-5">
            salam
          </P.Button>
          <P.Button Size="lg" ThemeProps="outline" Theme="white">
            salam
          </P.Button>


          <P.Button Size="lg" ThemeProps="default" Theme="black" className="m-5">
            salam
          </P.Button>
          <P.Button Size="lg" ThemeProps="default" Theme="white">
            salam
          </P.Button>

          <P.Button Size="lg" ThemeProps="ghost" Theme="black" className="m-5">
            salam
          </P.Button>
          <P.Button Size="lg" ThemeProps="ghost" Theme="white">
            salam
          </P.Button>


          <P.Button Size="lg" ThemeProps="link" Theme="black" className="m-5">
            salam
          </P.Button>
          <P.Button Size="lg" ThemeProps="link" Theme="white">
            salam
          </P.Button>

        </div>

      </div>
    </main>
  );
}

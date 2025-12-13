"use client";

import { redirect } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function ColorPage() {
  return (
    <main className="w-full max-w-7xl mx-auto min-h-screen flex-col gap-008-2 justify-censter items-stretch pt-110-C">

      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold animate-bounce text-center">Colors</h1>
        <ThemeSwitcher />
        <button onClick={() => redirect("/docs")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Docs </button>
      </div>


      <h2 className=" bg-Border text-Shadow my-008-2 p-004-1 text-center">Background</h2>
      <div className="flex flex-row justify-stretch items-stretch gap-2 w-full">
        <div className="flex-1 bg-Background rounded-md pb-056-M p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Background</div>
        </div>
        <div className="flex-1 bg-Panel rounded-md pb-056-M p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Panel</div>
        </div>
        <div className="flex-1 bg-Border rounded-md pb-056-M p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Border</div>
        </div>
        <div className="flex-1 bg-Mid rounded-md pb-056-M p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Mid</div>
        </div>
        <div className="flex-1 bg-Shadow rounded-md pb-056-M p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Shadow</div>
        </div>
        <div className="flex-1 bg-Text rounded-md pb-056-M p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Text</div>
        </div>
        <div className="flex-1 bg-Foreground rounded-md pb-056-M p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Foreground</div>
        </div>
      </div>
      
      <h2 className=" bg-Border text-Shadow my-008-2 p-004-1 text-center">Colors</h2>
      <div className="flex flex-row justify-stretch items-stretch gap-2 w-full text-Background">
        <div className="flex-1 bg-Primary rounded-md pb-034-7 p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Primary</div>
          <div className="bg-PrimaryDark p-1 rounded-xs text-center mt-008-2">PrimaryDark</div>
          <div className="bg-PrimaryLight p-1 rounded-xs text-center mt-008-2">PrimaryLight</div>
        </div>
        <div className="flex-1 bg-Secondary rounded-md pb-034-7 p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Secondary</div>
          <div className="bg-SecondaryDark p-1 rounded-xs text-center mt-008-2">SecondaryDark</div>
          <div className="bg-SecondaryLight p-1 rounded-xs text-center mt-008-2">SecondaryLight</div>
        </div>
        <div className="flex-1 bg-Third rounded-md pb-034-7 p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Third</div>
          <div className="bg-ThirdDark p-1 rounded-xs text-center mt-008-2">ThirdDark</div>
          <div className="bg-ThirdLight p-1 rounded-xs text-center mt-008-2">ThirdLight</div>
        </div>
        <div className="flex-1 bg-Success rounded-md pb-034-7 p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Success</div>
          <div className="bg-SuccessDark p-1 rounded-xs text-center mt-008-2">SuccessDark</div>
          <div className="bg-SuccessLight p-1 rounded-xs text-center mt-008-2">SuccessLight</div>
        </div>
        <div className="flex-1 bg-Error rounded-md pb-034-7 p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Error</div>
          <div className="bg-ErrorDark p-1 rounded-xs text-center mt-008-2">ErrorDark</div>
          <div className="bg-ErrorLight p-1 rounded-xs text-center mt-008-2">ErrorLight</div>
        </div>
        <div className="flex-1 bg-Warning rounded-md pb-034-7 p-008-2">
          <div className="bg-White text-Black border border-Black p-1 rounded-xs text-center">Warning</div>
          <div className="bg-WarningDark p-1 rounded-xs text-center mt-008-2">WarningDark</div>
          <div className="bg-WarningLight p-1 rounded-xs text-center mt-008-2">WarningLight</div>
        </div>
      </div>


    </main>
  );
}

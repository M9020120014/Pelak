"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { UI as P } from "@/components/ui/Pelak";

export default function ButtonPage() {
  const [active, setActive] = useState(false);
  return (
    <main className="w-full max-w-7xl mx-auto min-h-screen flex-col gap-008-2 justify-censter items-stretch pt-110-C">

      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold animate-bounce text-center">Buttons</h1>
        <ThemeSwitcher />
        <button onClick={() => redirect("/docs")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80"> Docs </button>
      </div>

      <br />
      <br />
      <P.Button>Dark</P.Button>
      <P.Button Theme="light">Light</P.Button>
      <P.Button Theme="primary">Primary</P.Button>
      <P.Button Theme="secondary">Secondary</P.Button>
      <P.Button Theme="third">Third</P.Button>
      <P.Button Theme="success">Success</P.Button>
      <P.Button Theme="error">Error</P.Button>
      <P.Button Theme="warning">Warning</P.Button>
      <br />
      <br />
      <P.Button ThemeProps="outline">Dark</P.Button>
      <P.Button ThemeProps="outline" Theme="light">Light</P.Button>
      <P.Button ThemeProps="outline" Theme="primary">Primary</P.Button>
      <P.Button ThemeProps="outline" Theme="secondary">Secondary</P.Button>
      <P.Button ThemeProps="outline" Theme="third">Third</P.Button>
      <P.Button ThemeProps="outline" Theme="success">Success</P.Button>
      <P.Button ThemeProps="outline" Theme="error">Error</P.Button>
      <P.Button ThemeProps="outline" Theme="warning">Warning</P.Button>
      <br />
      <br />
      <P.Button ThemeProps="ghost">Dark</P.Button>
      <P.Button ThemeProps="ghost" Theme="light">Light</P.Button>
      <P.Button ThemeProps="ghost" Theme="primary">Primary</P.Button>
      <P.Button ThemeProps="ghost" Theme="secondary">Secondary</P.Button>
      <P.Button ThemeProps="ghost" Theme="third">Third</P.Button>
      <P.Button ThemeProps="ghost" Theme="success">Success</P.Button>
      <P.Button ThemeProps="ghost" Theme="error">Error</P.Button>
      <P.Button ThemeProps="ghost" Theme="warning">Warning</P.Button>
      <br />
      <br />
      <P.Button ThemeProps="link">Dark</P.Button>
      <P.Button ThemeProps="link" Theme="light">Light</P.Button>
      <P.Button ThemeProps="link" Theme="primary">Primary</P.Button>
      <P.Button ThemeProps="link" Theme="secondary">Secondary</P.Button>
      <P.Button ThemeProps="link" Theme="third">Third</P.Button>
      <P.Button ThemeProps="link" Theme="success">Success</P.Button>
      <P.Button ThemeProps="link" Theme="error">Error</P.Button>
      <P.Button ThemeProps="link" Theme="warning">Warning</P.Button>
      <br />
      <br />
      <P.Button Size="smIcon">
        <P.Icon Icon="home"/>
      </P.Button>
      <P.Button Size="mdIcon">
        <P.Icon />
      </P.Button>
      <P.Button Size="lgIcon">
        <P.Icon Icon="home"/>
      </P.Button>
      <br />
      <br />
      <P.Button ThemeProps="ghost" onClick={() => setActive(!active)}>
        <P.Icon className="size-080-A" Active={active}/>
      </P.Button>
      <br />
      <br />
      <P.Button disabled>Button</P.Button>
      <P.Button ThemeProps="outline" disabled>Button</P.Button>
      <P.Button ThemeProps="ghost" disabled>Button</P.Button>
      <P.Button ThemeProps="link" className="underline-dashed" disabled>Button</P.Button>
      <br />
      <br />
      <P.Button Size="lg">
        <P.Icon Icon="home" />
        Button
      </P.Button>
      <br />
      <br />
      <P.Button>
        <P.Icon Icon="home" />
        Button
      </P.Button>
      <br />
      <br />
      <P.Button Size="sm">
        <P.Icon Icon="home" />
        Button
      </P.Button>

    </main>
  );
}

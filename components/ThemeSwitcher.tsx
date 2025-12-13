"use client";

import { useTheme } from "next-themes"
import { useEffect, useState, startTransition } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    startTransition(() => {
      setMounted(true)
    })
  }, [])

  if (!mounted) return null

  return (
      <button onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")} className="bg-Foreground text-Background p-2 rounded-md hover:opacity-80">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
  )
};
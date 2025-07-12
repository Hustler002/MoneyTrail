"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="px-2 py-1 text-xs border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      {children}
    </>
  );
}

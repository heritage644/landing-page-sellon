"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

type Theme = "light" | "dark";

type ThemeToggleProps = {
  className?: string;
};

const THEME_STORAGE_KEY = "sellonit-theme";
const THEME_CHANGE_EVENT = "sellonit-theme-change";

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const syncTheme = () => {
      setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
    };

    syncTheme();
    window.addEventListener(THEME_CHANGE_EVENT, syncTheme);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, syncTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The visual theme still changes when browser storage is unavailable.
    }

    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <button
      className={`theme-toggle ${className}`.trim()}
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun size={19} weight="regular" aria-hidden="true" />
      ) : (
        <Moon size={19} weight="regular" aria-hidden="true" />
      )}
    </button>
  );
}

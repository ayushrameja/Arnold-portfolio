"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "akd-theme";

function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readThemeFromDom(): ThemeMode {
  if (typeof document === "undefined") {
    return "light";
  }

  const domTheme = document.documentElement.dataset.theme;
  return domTheme === "dark" || domTheme === "light" ? domTheme : getSystemTheme();
}

function applyTheme(theme: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
}

export default function ThemeToggle() {
  // Start with null to avoid hydration mismatch — server doesn't know the theme
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    // Read the actual theme only on the client after mount
    setTheme(readThemeFromDom());

    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(readThemeFromDom());
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => applyTheme(isDark ? "light" : "dark")}
      className="ui-surface-card ui-card-shadow inline-flex h-10 w-10 items-center justify-center rounded-full border transition hover:opacity-90 sm:h-11 sm:w-11"
      aria-label={theme ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      title={theme ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      aria-pressed={theme ? isDark : undefined}
    >
      {/* Render Sun as default for SSR, swap to Moon on client if dark */}
      {theme === null || !isDark ? (
        <Sun className="size-4 text-[var(--text-primary)] sm:size-[1.05rem]" aria-hidden="true" />
      ) : (
        <Moon className="size-4 text-[var(--text-primary)] sm:size-[1.05rem]" aria-hidden="true" />
      )}
    </button>
  );
}

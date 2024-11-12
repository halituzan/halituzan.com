"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-200 focus:outline-none outline-none focus:ring-0 focus:ring-none focus:ring-none
        ${isDark ? "bg-default-200" : "bg-default-200"}`}
      role='switch'
      aria-checked={isDark}
    >
      <span className='sr-only'>Toggle theme</span>
      <div
        className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transform transition-transform duration-200 flex items-center justify-center
          ${isDark ? "translate-x-8" : "translate-x-0"}`}
      >
        {isDark ? (
          <Moon size={16} className='text-blue-600' />
        ) : (
          <Sun size={16} className='text-yellow-600' />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;

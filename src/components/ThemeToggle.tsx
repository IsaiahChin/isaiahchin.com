"use client";

import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <button className="p-2">
        <FiSun size="1.6rem" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-inherit p-2 rounded-xl hover:scale-125 active:scale-100 transition-transform group"
    >
      {theme === "dark" ? (
        <FiSun size="1.6rem" className="group-hover:stroke-amber-400" />
      ) : (
        <FiMoon size="1.6rem" className="group-hover:stroke-violet-600" />
      )}
    </button>
  );
}

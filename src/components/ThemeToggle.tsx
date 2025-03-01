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
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      className="hover:scale-125 active:scale-100 opacity-0 animate-fade-in transition-[transform,_opacity]"
    >
      {theme == "dark" ? <FiSun size={"2rem"} /> : <FiMoon size={"2rem"} />}
    </button>
  );
}

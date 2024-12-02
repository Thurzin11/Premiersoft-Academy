"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Iniciamos com um valor padrão 'light', será atualizado no useEffect
  const [theme, setTheme] = useState<Theme>("light");

  // Efeito para carregar o tema salvo quando o componente montar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    // Se existe um tema salvo e é válido, use-o
    if (savedTheme && ["light", "dark"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // Efeito para sincronizar mudanças com localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    // Opcional: Sincronizar com a classe do documento para transições CSS
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <body>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`${theme} transition-colors duration-300`}>
          {children}
        </div>
      </ThemeContext.Provider>
    </body>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}


import React, { createContext, useContext, useState, useEffect } from "react";
// Create context
const ThemeContext = createContext();
// Provider for the whole app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Apply theme globally (to body)
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "white" : "black";
    document.body.style.color = theme === "light" ? "black" : "white";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// Hook to use theme anywhere
export const useTheme = () => useContext(ThemeContext);
// Optional component to toggle theme
 const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-4">
      <p>Theme: {theme}</p>
      <button
        className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Switch Theme
      </button>
    </div>
  );
};
export default ThemeToggle;

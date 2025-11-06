import React, {useState, useEffect} from 'react';

function Timemanager() {
  const[currentTime, setCurrentTime] = useState(new Date());

useEffect(() =>{
const timer= setInterval(()=>{
  setCurrentTime(new Date());
}, 1000); //update every second

//proper cleanup function
  return () => clearInterval(timer);
}, []);
  return(
    <div className="p-4 text-center">
    <p className="text-2xl font-bold">clock</p>
    <div>{currentTime.toDateString()}</div>
    <div>{currentTime.toLocaleTimeString()}</div>

    </div>
  )
}

export default Timemanager;





import React, {createContext, useContext, useState, useEffect} from "react";
//create context
const ThemeContext = createContext();
//context provider
const Theme =() =>{
    const[theme, setTheme] = useState("Light");
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            <Context />
        </ThemeContext.Provider>
    );
}
//consume context
function Context(){
    const{theme, setTheme} =useContext(ThemeContext);
    return(
        <div style={{backgroundColor:theme === "light" ? "white": "black",
            color:theme ==="light" ? "dark" : "white", padding:"20px",
        }}>
            <p>Theme:{theme}</p>
       <button  style={{backgroundColor:"blue",borderRadius:"8px", ClassName:"hover-text-yellow-500"}}onClick={() =>setTheme (theme ==="light" ? "dark":"light"
       )}>
        switch theme
        </button>     
        </div>
    );
}
export default Theme





// src/components/Theme.jsx
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
export const ThemeToggle = () => {
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

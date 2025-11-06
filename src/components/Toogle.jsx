import React,{createContext, useContext, useState} from"react"
//create context
const ThemeContext = createContext();
//context provider]
const Toogle=() =>{
    const [theme, setTheme] = useState("Light");
    return(
        <ThemeContext.Provider value ={{theme,setTheme}}>
            <Context />
        </ThemeContext.Provider>
    );
}
//consumer of the context
function Context() {
    const{theme, setTheme} = useContext(ThemeContext);
    return(
        <div style ={{backgroundColor:theme==="light" ? "white":"black",
            color:theme ==="light" ? "black":"white", padding:"20px",
        }}>
            <p>Theme:{theme}</p>
            <button onClick={() =>setTheme(theme==="light" ? "dark": "light")}>switch</button>
        </div>
    )
}
export default Toogle
import Count from "./components/Count";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reduceitems from "./components/Reduceitems";
import Totalbutton from "./components/Totalbutton";
import Filter from "./components/Filter";
import List from "./components/List";
import { ThemeProvider,  useTheme} from "./components/Theme";
import Fetcher from "./components/Fetcher";
import Spreadadder from "./components/Spreadadder";
import Colors from "./components/Colors";
import Timer from "./components/Timer";
import Timemanager from "./components/Timemanager";
import ThemeToggle from "./components/Theme";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen transition-all duration-300">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clock" element={<Timemanager />} />
          </Routes>
          <Count />
          <Reduceitems />
          <Timer />
          <Totalbutton />
          <Fetcher />
          <Spreadadder />
          <Colors />
          <Filter />
          <List />
          {/* Theme toggle button */}
          <ThemeToggle />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;

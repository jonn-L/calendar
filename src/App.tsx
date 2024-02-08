import "./App.css";
import MonthView from "./components/MonthView.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx"
import {useState} from "react";

function App() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Home" element={<Home currentYear={currentYear} setCurrentYear={setCurrentYear}/>}/>
                    <Route path="/Home/:month_name" element={<MonthView current_year={currentYear}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

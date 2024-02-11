import MonthView from "./MonthView/MonthView.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home.tsx"
import { useState } from "react";

function App() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [selectedDay, setSelectedDay] = useState(1);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home currentYear={currentYear} 
                                                   selectedDay={selectedDay}
                                                   setCurrentYear={setCurrentYear}
                                                   setSelectedDay={setSelectedDay}/>}/>
                    <Route path="/:monthName" element={<MonthView year={currentYear}
                                                                  selectedDay={selectedDay}
                                                                  setSelectedDay={setSelectedDay}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

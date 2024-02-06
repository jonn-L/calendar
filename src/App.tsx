import "./App.css";
import MonthView from "./components/MonthView.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx"

function App() {
    const current_year = new Date().getFullYear();

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Home/:month_name" element={<MonthView current_year={current_year} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

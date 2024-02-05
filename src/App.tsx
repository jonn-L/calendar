import "./App.css";
import Month from "./components/Month.tsx";
import MonthView from "./components/MonthView.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import  { get_month_name, get_total_days, get_month_offset } from "./utilities/functions.ts";

function App() {
    const current_year = new Date().getFullYear();

    const months = Array.from({length: 12}, (_, i) => i + 1);
    const list_months = months.map((month: number) =>
        (<Month key={"month" + month}
                name={get_month_name(current_year, month - 1)}
                total_days={get_total_days(current_year, month)}
                month_offset={get_month_offset(1, month - 1, current_year) - 1}/>));

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path=":month_name" element={<MonthView current_year={current_year}/>}/>
                </Routes>
            </BrowserRouter>
            <h1>{current_year}</h1>
            <div className="months">{list_months}</div>
        </>
    )
}

export default App

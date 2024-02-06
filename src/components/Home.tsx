import "../styles/Home.css"
import Month from "./Month.tsx";
import {get_month_offset, get_total_days} from "../utilities/functions.ts";
import {useState} from "react";

function Home() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    const list_months = []
    for (let month_number = 0; month_number < 12; month_number++) {
        list_months.push(<Month key={"month" + month_number}
                                month_number={month_number}
                                total_days={get_total_days(currentYear, month_number)}
                                month_offset={get_month_offset(1, month_number, currentYear) - 1}/>)
    }

    function previous_year() {
        const previous_year = currentYear - 1
        setCurrentYear(previous_year);
    }

    function next_year() {
        const next_year = currentYear + 1
        setCurrentYear(next_year);
    }

    return (
        <>
            <div className="header">
                <button className="previous" onClick={previous_year}>{"<"}</button>
                <div className="current-year">{currentYear}</div>
                <button className="next" onClick={next_year}>{">"}</button>
            </div>
            <div className="months">{list_months}</div>
        </>
    )
}

export default Home
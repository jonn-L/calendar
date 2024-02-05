import "../styles/Home.css"
import Month from "./Month.tsx";
import {get_month_offset, get_total_days} from "../utilities/functions.ts";

function Home() {
    const current_year = new Date().getFullYear();

    const list_months = []
    for (let month_number = 0; month_number < 12; month_number++) {
        list_months.push(<Month key={"month" + month_number}
                                month_number={month_number}
                                total_days={get_total_days(current_year, month_number)}
                                month_offset={get_month_offset(1, month_number, current_year) - 1}/>)
    }

    return (
        <>
            <h1>{current_year}</h1>
            <div className="months">{list_months}</div>
        </>
    )
}

export default Home
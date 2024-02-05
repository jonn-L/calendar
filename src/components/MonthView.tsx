import {useParams} from "react-router-dom";
import '../styles/Monthview.css'
// import Month from "./Month.tsx";
// import  { get_month_name, get_total_days, get_month_offset } from "./utilities/functions.ts";

function MonthView({ current_year } : {current_year: number}) {
    const {month_name} = useParams()

    return (
        <div className="MonthView">
            {/*<div className="month"><Month  name={} /></div>*/}
            <div>{month_name}</div>
        </div>
    );
}

export default MonthView
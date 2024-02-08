import "../styles/Monthview.css"
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Monthview.css'
import Month from "./Month.tsx";
import { get_month_number } from "../utilities/functions.ts";

function MonthView({ current_year } : {current_year: number}) {
    const { month_name } = useParams();
    const navigate = useNavigate();

    const month_number = get_month_number(month_name);
    useEffect(() => {
        if (month_number == -1) {
            navigate('/');
        }
    }, [month_name, navigate]);

    if (month_number == -1) {
        return null;
    }

    function go_back() {
        navigate('/Home')
    }

    return (
        <div className="month-view">
            <div className="current-month">
                <button className="go-back" onClick={go_back} >{"<"}</button>
                <Month month_number={month_number}
                       year={current_year}/>
            </div>

            <ul className="events">
                <div>Event 1</div>
                <div>Event 2</div>
                <div>Event 3</div>
            </ul>
        </div>
    );
}

export default MonthView
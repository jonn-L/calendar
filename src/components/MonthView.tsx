import "../styles/Monthview.css"
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Monthview.css'
import Month from "./Month.tsx";
import {get_month_number, get_total_days, get_month_offset} from "../utilities/functions.ts";

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
        // Return null or an error message if you don't want to render the component for invalid months
        return null;
    }

    return (
        <div className="month-view">
            <div className="current-month"><Month  month_number={month_number}
                                                   total_days={get_total_days(current_year, month_number)}
                                                   month_offset={get_month_offset(1, month_number, current_year) - 1}/>
            </div>

            <div className="events">
                <ul>
                    <li>Event 1</li>
                    <li>Event 2</li>
                    <li>Event 3</li>
                    <li>Event 4</li>
                    <li>Event 5</li>
                    <li>Event 6</li>
                </ul>
            </div>
        </div>
    );
}

export default MonthView
import "../styles/Month.css"
import Day from "./Day.tsx"
import { get_month_name, get_month_offset, get_total_days } from "../utilities/functions.ts"
import { useNavigate } from "react-router-dom";

function Month({ year, month_number, setCurrentDay }: { 
    year: number, 
    month_number: number,
    setCurrentDay: (currentDay: number) => void
}) {
    const navigate = useNavigate()

    function list_days() {
        const total_days = get_total_days(year, month_number + 1);
        const month_offset = get_month_offset(month_number, year);
    
        const list_days = []
        for (let day = 1; day <= total_days; day++) {
    
            list_days.push(<Day key={"day" + day}
                                year={year}
                                month_number={month_number}
                                day_num={day}
                                setCurrentDay={setCurrentDay}/>);
        }
        const list_offsets = [];
        for (let i = 0; i < month_offset; i++) {
            list_offsets.push(<div key={"offset" + i + 1} className="offset"></div>)
        }
        const day_names = ["M", "T", "W", "T", "F", "S", "S"]
        const list_day_names = [];
        for (let i = 0; i < 7; i++) {
            list_day_names.push(<div key={day_names[i] + i} className="day-names">{day_names[i]}</div>);
        }
        const full_list = [...list_day_names, ...list_offsets, ...list_days];

        return full_list;
    }


    const handleClick = () => {
        console.log("GENI")
        navigate(`/Home/${get_month_name(month_number)}`)
    }

    return (
        <button className="month" onClick={handleClick}>
            <div className="month-name">{get_month_name(month_number)}</div>
            <div className="days">{list_days()}</div>
        </button>
    )
}

export default Month
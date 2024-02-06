import "../styles/Month.css"
import Day from "./Day.tsx"
import { get_month_name } from "../utilities/functions.ts"

function Month({ month_number, total_days, month_offset }: { month_number: number; total_days: number; month_offset: number }) {
    if (month_offset == -1) {
        month_offset = 6;
    }

    const list_days = []
    for (let day = 1; day <= total_days; day++) {
        list_days.push(<Day key={"day" + day} day_num={day}/>);
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

    const handleClick = () => {
        window.location.href = `/Home/${get_month_name(month_number)}`
    }

    return (
        <button className="month" onClick={handleClick}>
            <div className="month-name">{get_month_name(month_number)}</div>
            <div className="days">{full_list}</div>
        </button>
    )
}

export default Month
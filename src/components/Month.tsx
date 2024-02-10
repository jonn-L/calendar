import "../styles/Month.css"
import Day from "./Day.tsx"
import { get_month_name, get_month_offset, get_total_days } from "../utilities/functions.ts"
import { useNavigate } from "react-router-dom";

function Month({ year, month, setCurrentDay, selectedDay = 1 }: { 
    year: number, 
    month: number,
    setCurrentDay: (currentDay: number) => void
    selectedDay: number
}) {
    const navigate = useNavigate()

    function list_days() {
        const totalDays = get_total_days(year, month + 1);
        const monthOffset = get_month_offset(month, year);
    
        const listDays = []
        for (let day = 1; day <= totalDays; day++) {
    
            listDays.push(<Day key={"day" + day}
                                year={year}
                                month={month}
                                day={day}
                                setCurrentDay={setCurrentDay}
                                selectedDay={selectedDay}/>);
        }
        const listOffsets = [];
        for (let i = 0; i < monthOffset; i++) {
            listOffsets.push(<div key={"offset" + i + 1} className="offset"></div>)
        }
        const day_names = ["M", "T", "W", "T", "F", "S", "S"]
        const listDayNames = [];
        for (let i = 0; i < 7; i++) {
            listDayNames.push(<div key={day_names[i] + i} className="day-names">{day_names[i]}</div>);
        }
        const fullList = [...listDayNames, ...listOffsets, ...listDays];

        return fullList;
    }


    const handleClick = () => {
        // console.log("GENI")
        navigate(`/${get_month_name(month)}`)
    }

    return (
        <button className="month" onClick={handleClick}>
            <div className="month-name">{get_month_name(month)}</div>
            <div className="days">{list_days()}</div>
        </button>
    )
}

export default Month
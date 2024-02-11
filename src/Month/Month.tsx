import styles from "./month.module.css"
import Day from "../Day/Day.tsx"
import { get_month_name, get_month_offset, get_total_days } from "../utilities/functions.ts"
import { useNavigate } from "react-router-dom";

function Month({ year, month, selectedDay, setSelectedDay }: { 
    year: number, 
    month: number,
    selectedDay: number,
    setSelectedDay: (selectedDay: number) => void
}) {
    const navigate = useNavigate()

    function list_days() {
        const totalDays = get_total_days(year, month + 1);
        const monthOffset = get_month_offset(month, year);

        const day_names = ["M", "T", "W", "T", "F", "S", "S"]
        const listDayNames = [];
        for (let i = 0; i < 7; i++) {
            listDayNames.push(<li key={day_names[i] + i} 
                                  className={styles.dayNames}>{day_names[i]}</li>);
        }

        const listOffsets = [];
        for (let i = 0; i < monthOffset; i++) {
            listOffsets.push(<li key={"offset" + i + 1} className={styles.offset}></li>)
        }
    
        const listDays = []
        for (let day = 1; day <= totalDays; day++) {
    
            listDays.push(<li key={day}>
                            <Day key={"day" + day}
                                 year={year}
                                 month={month}
                                 day={day}
                                 selectedDay={selectedDay}
                                 setSelectedDay={setSelectedDay}/>
                          </li>);
        }

        return [...listDayNames, ...listOffsets, ...listDays];
    }


    const handleClick = () => {
        navigate(`/${get_month_name(month)}`)
    }

    return (
        <button className={styles.month} onClick={handleClick}>
            <h1 className={styles.monthName}>{get_month_name(month)}</h1>
            <ul className={styles.days}>{list_days()}</ul>
        </button>
    )
}

export default Month
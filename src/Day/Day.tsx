import styles from "./day.module.css"

function Day({ year, month, day, selectedDay, setSelectedDay }: {
    year: number,
    month: number,
    day: number,
    selectedDay: number
    setSelectedDay: (selectedDay: number) => void
}) {
    const dateToday = new Date()

    function set_class() {
        let className = styles.day

        if ((dateToday.getFullYear()) === year &&
            (dateToday.getMonth() === (month) &&
            (dateToday.getDate() === day))) {
                className += ` ${styles.today}`;
        }
        
        const key = `${year}-${month}-${day}`;
        const events = localStorage.getItem(key);
        if (events) {
            className += ` ${styles.hasEvent}`;
        }

        if (day === selectedDay) {
            className += ` ${styles.selected}`;
        }
        
        return className;
    }

    function select_day() {
        setSelectedDay(day);
    }
    
    return (
        <button onClick={select_day} className={set_class()}>
            {day}
        </button>
    )
}

export default Day
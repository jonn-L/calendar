import "../styles/Day.css"

function Day({ year, month, day, setCurrentDay, selectedDay }: {
    year: number,
    month: number,
    day: number,
    setCurrentDay: (currentDay: number) => void
    selectedDay: number
}) {
    const dateToday = new Date()

    function set_class() {
        let className = "day"

        if ((dateToday.getFullYear()) === year &&
            (dateToday.getMonth() === (month) &&
            (dateToday.getDate() === day))) {
                className +=" today";
        }
        
        const key = `${year}-${month}-${day}`;
        const events = localStorage.getItem(key);
        if (events) {
            className += " has-event";
        }

        if (day === selectedDay) {
            className += " selected";
        }
        
        return className;
    }

    function select_day() {
        setCurrentDay(day);
        console.log(`This is the current day: ${day}`)
    }    
    
    return (
        <div onClick={select_day} className={set_class()}>
            {day}
        </div>
    )
}

export default Day
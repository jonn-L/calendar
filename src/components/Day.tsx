import "../styles/Day.css"

function Day({ year, month_number, day_num, setCurrentDay }: {
    year: number,
    month_number: number,
    day_num: number,
    setCurrentDay: (currentDay: number) => void
}) {
    const date_today = new Date()

    function set_class() {
        let class_name = "day"
        if ((date_today.getFullYear()) === year &&
            (date_today.getMonth() === (month_number) &&
            (date_today.getDate() === day_num))) {
            class_name +=" today";
        }
        
        const stored_events = localStorage.getItem('events');
        if (stored_events) {
            const events = JSON.parse(stored_events);
            if (events[year] &&
                events[year][month_number] &&
                events[year][month_number][day_num] &&
                events[year][month_number][day_num].length > 0) {
                    class_name += " has-event";
                }
        }
        
        return class_name;
    }

    function select_day() {
        setCurrentDay(day_num);
        console.log(`This is the current day: ${day_num}`)
    }    
    
    return (
        <div onClick={select_day} className={set_class()}>
            {day_num}
        </div>
    )
}

export default Day
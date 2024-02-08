import "../styles/Day.css"

function Day({ year, month_number, day_num }: {
    year: number,
    month_number: number,
    day_num: number
}) {
    const date_today = new Date()
    function set_id() {
        if ((date_today.getFullYear()) === year &&
            (date_today.getMonth() === (month_number) &&
            (date_today.getDate() === day_num))) {
            return "today"
        } else {
            return "not-today"
        }
    }
    return (
        <div id={set_id()} className="day">
            {day_num}
        </div>
    )
}

export default Day
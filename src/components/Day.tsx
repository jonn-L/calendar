import "../styles/Day.css"

function Day({ day_num }: { day_num: number }) {
    return (
        <div className="day">
            {day_num}
        </div>
    )
}

export default Day
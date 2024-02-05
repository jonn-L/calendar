import "../styles/Month.css"
import Day from "./Day.tsx"

function Month({ name, total_days, month_offset }: { name: string; total_days: number; month_offset: number }) {
    if (month_offset == -1) {
        month_offset = 6;
    }

    const days = Array.from({length: total_days}, (_, i) => i + 1);
    const list_days = days.map((day : number) => (<Day key={day} day_num={day}/>));
    const list_offsets = [];
    for (let i = 0; i < month_offset; i++) {
        list_offsets.push(<div key={"offset" + i} className="offset"></div>)
    }
    const list_day_names = ["M", "T", "W", "T", "F", "S", "S"].map((day_name: string) =>
        (<div key={day_name} className="day-names">{day_name}</div>));
    const full_list = [...list_day_names, ...list_offsets, ...list_days];

    const handleClick = () => {
        window.location.href = `/${name}`
    }

    return (
        <div className="month" onClick={handleClick}>
            <h1 className="month-name">{name}</h1>
            <div className="days">{full_list}</div>
        </div>
    )
}

export default Month
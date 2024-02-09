import "../styles/Home.css"
import Month from "./Month.tsx";

function Home({ currentYear, setCurrentYear} : {
    currentYear: number,
    setCurrentYear: (currentYear: number) => void
}) {
    const list_months = []
    for (let month_number = 0; month_number < 12; month_number++) {
        list_months.push(<Month key={"month" + month_number}
                                year={currentYear}
                                month_number={month_number}
                                setCurrentDay={() => {}}/>)
    }

    function previous_year() {
        currentYear--
        setCurrentYear(currentYear);
    }

    function next_year() {
        currentYear++
        setCurrentYear(currentYear);
    }

    return (
        <>
            <div className="header">
                <button className="previous" onClick={previous_year}>{"<"}</button>
                <div className="current-year">{currentYear}</div>
                <button className="next" onClick={next_year}>{">"}</button>
            </div>
            <div className="months">{list_months}</div>
        </>
    )
}

export default Home
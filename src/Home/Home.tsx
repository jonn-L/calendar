import styles from "./home.module.css";
import Month from "../Month/Month.tsx";

function Home({ currentYear, selectedDay, setCurrentYear, setSelectedDay} : {
    currentYear: number,
    selectedDay: number,
    setCurrentYear: (currentYear: number) => void,
    setSelectedDay: (selectedDay: number) => void
}) {
    const list_months = []
    for (let month = 0; month < 12; month++) {
        list_months.push(<li key={month}>
                            <Month key={"month" + month}
                                   year={currentYear}
                                   month={month}
                                   selectedDay={selectedDay}
                                   setSelectedDay={setSelectedDay}/>
                        </li>)
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
        <main className={styles.home}>
            <header className={styles.header}>
                <button onClick={previous_year}>{"<"}</button>
                <h1 className={styles.currentYear}>{currentYear}</h1>
                <button onClick={next_year}>{">"}</button>
            </header>
            <ul className={styles.months}>{list_months}</ul>
        </main>
    )
}

export default Home
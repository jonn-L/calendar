import styles from "./monthview.module.css";
import Month from "../Month/Month.tsx";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get_month_number } from "../utilities/functions.ts";


function MonthView({ year, selectedDay, setSelectedDay } : {
    year: number,
    selectedDay: number,
    setSelectedDay: (selectedDay: number) => void
}) {
    const monthName = String(useParams<{ monthName?: string }>().monthName);    
    const navigate = useNavigate();
    const [currentEvents, setCurrentEvents] = useState<string[]>([]);
    const [newEvent, setNewEvent] = useState('');
    const [showEventAddField, setShowEventAddField] = useState(false);
    const [showEvents, setShowEvents] = useState(currentEvents.length !== 0)
    
    let month: number = get_month_number(monthName);
    useEffect(() => {
        if (month == -1) {
            navigate('/');
        }
    }, [month]);

    useEffect(() => {
        if (currentEvents.length !== 0) {
            setShowEvents(true);
        }
    }, [currentEvents])

    useEffect(() => {
        const currentKey = `${year}-${month}-${selectedDay}`;
        const storedEvents = localStorage.getItem(currentKey);
        if (storedEvents) {
            setCurrentEvents(JSON.parse(storedEvents));
        } else {
            setCurrentEvents([]);
        }
    }, [year, month, selectedDay]);

    function add_event() {
        setShowEventAddField(false);
        if (newEvent === '') {
            if (currentEvents.length === 0) {
                setShowEvents(false);
            }
            return;
        } 
        const updatedCurrentEvents = [...currentEvents, newEvent];
        setCurrentEvents(updatedCurrentEvents);
        const currentKey = `${year}-${month}-${selectedDay}`;
        localStorage.setItem(currentKey, JSON.stringify(updatedCurrentEvents));
        setNewEvent('');
    }

    function delete_event(index: number) {
        const currentKey = `${year}-${month}-${selectedDay}`;
        const updatedCurrentEvents = [...currentEvents];
        updatedCurrentEvents.splice(index, 1);
        if (updatedCurrentEvents.length === 0) {
            localStorage.removeItem(currentKey);
            setShowEventAddField(false);
            setShowEvents(false);
        } else {
            localStorage.setItem(currentKey, JSON.stringify(updatedCurrentEvents));   
        }
        setCurrentEvents(updatedCurrentEvents);
    }

    function go_back() {
        navigate('/')
    }

    function show_field() {
        setShowEventAddField(true);
    }

    function show_events() {
        setShowEvents(true);
        setShowEventAddField(true);
    }

    return (
        <main className={styles.monthView}>
            <button className={styles.back} onClick={go_back} >{"<"}</button>

            <div className={styles.currentMonth}>
                <Month month={month}
                       year={year}
                       setSelectedDay={setSelectedDay}
                       selectedDay={selectedDay}/>
            
                {(!showEvents) && (
                    <button onClick={show_events} className={styles.addEvent}>+</button>
                )}
            </div>


            {(showEvents) && (
                <div className={styles.currentEvents}>
                    <button onClick={show_field} className={styles.addEvent}>+</button>
                    
                    <ul className={styles.events}>    
                        {currentEvents.map((event, index) => (
                            <li key={index} className={styles.event}>
                                <p className={styles.eventDesc}>{event}</p>
                                <button onClick={() => delete_event(index)} 
                                        className={styles.deleteEvent}>
                                -</button>
                            </li>
                        ))}
                        
                        {showEventAddField &&
                        (<li className={styles.event}>
                            <input className={`${styles.addEventField}`}
                                type="text"
                                onChange={(e) => {setNewEvent(e.target.value)}}  
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        add_event();
                                    }
                                }}
                            />
                        </li>)

                        }
                    </ul>
                </div>
            )}
        </main>
    );
}

export default MonthView
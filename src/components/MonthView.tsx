import '../styles/Monthview.css'
import Month from "./Month.tsx";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get_month_number } from "../utilities/functions.ts";


function MonthView({ currentYear } : {currentYear: number}) {
    const { monthName } = useParams();
    const navigate = useNavigate();
    const currentMonth = get_month_number(monthName);
    const [currentDay, setCurrentDay] = useState(1);
    const [currentEvents, setCurrentEvents] = useState<string[]>([]);
    const [newEvent, setNewEvent] = useState('');

    useEffect(() => {
        if (currentMonth == -1) {
            navigate('/');
        }
    }, [currentMonth, navigate]);

    useEffect(() => {
        const currentKey = `${currentYear}-${currentMonth}-${currentDay}`;
        const storedEvents = localStorage.getItem(currentKey);
        if (storedEvents) {
            setCurrentEvents(JSON.parse(storedEvents));
        } else {
            setCurrentEvents([]);
        }
    }, [currentYear, currentMonth, currentDay]);

    if (currentMonth == -1) {
        return null;
    }

    function add_event() {
        const updatedCurrentEvents = [...currentEvents, newEvent];
        setCurrentEvents(updatedCurrentEvents);
        const currentKey = `${currentYear}-${currentMonth}-${currentDay}`;
        localStorage.setItem(currentKey, JSON.stringify(updatedCurrentEvents));
        setNewEvent('');
    }

    function delete_event(index: number) {
        const currentKey = `${currentYear}-${currentMonth}-${currentDay}`;
        const updatedCurrentEvents = [...currentEvents];
        updatedCurrentEvents.splice(index, 1);
        if (updatedCurrentEvents.length === 0) {
            localStorage.removeItem(currentKey);
        } else {
            localStorage.setItem(currentKey, JSON.stringify(updatedCurrentEvents));   
        }
        setCurrentEvents(updatedCurrentEvents);
    }

    function go_back() {
        navigate('/')
    }

    return (
        <div className="month-view">
            <div className="current-month">
                <button className="go-back" onClick={go_back} >{"<"}</button>
                <Month month={currentMonth}
                       year={currentYear}
                       setCurrentDay={setCurrentDay}
                       selectedDay={currentDay}/>
            </div>

            <div className="event-view">
                <input
                    type="text"
                    onChange={(e) => {setNewEvent(e.target.value)}}    
                />
                <button onClick={add_event} className="add-event">+</button>

                <div className="events">
                    {currentEvents.map((event, index) => (
                        <div key={index} className="event">
                            <div className="event-desc">{event}</div>
                            <button onClick={() => delete_event(index)} 
                                    className="delete-event">
                            -</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MonthView
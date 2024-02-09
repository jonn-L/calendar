import '../styles/Monthview.css'
import Month from "./Month.tsx";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get_month_number } from "../utilities/functions.ts";


function MonthView({ current_year } : {current_year: number}) {
    const { month_name } = useParams();
    const navigate = useNavigate();
    const month_number = get_month_number(month_name);
    const [currentDay, setCurrentDay] = useState(1);
    const [events, setEvents] = useState<{ 
        [year: number]: { [month: number]: { [day: number]: string[] } } }>({});
    const [newEvent, setNewEvent] = useState('');

    useEffect(() => {
        if (month_number == -1) {
            navigate('/');
        }
    }, [month_number, navigate]);

    useEffect(() => {
        const stored_events = localStorage.getItem('events');
        if (stored_events) {
            setEvents(JSON.parse(stored_events));
        }
    }, []);

    if (month_number == -1) {
        return null;
    }

    function add_event() {
        const update_events = {
            ...events,
            [current_year]: {
              ...(events[current_year] || {}),
              [month_number]: {
                ...(events[current_year]?.[month_number] || {}),
                [currentDay]: [
                  ...(events[current_year]?.[month_number]?.[currentDay] || []),
                  newEvent
                ]
              }
            }
        };
        setEvents(update_events);
        localStorage.setItem('events', JSON.stringify(update_events));
        setNewEvent('');
    }

    function delete_event(index:number) {
        const update_events = { ...events };
        if (update_events[current_year] && 
            update_events[current_year][month_number] && 
            update_events[current_year][month_number][currentDay]) {
            update_events[current_year][month_number][currentDay].splice(index, 1);
          setEvents(update_events);
          localStorage.setItem('events', JSON.stringify(update_events));
        }    
    }

    function go_back() {
        navigate('/Home')
    }

    function list_events() {
        const events_list = events[current_year]?.[month_number]?.[currentDay] || []

        return events_list
    }

    return (
        <div className="month-view">
            <div className="current-month">
                <button className="go-back" onClick={go_back} >{"<"}</button>
                <Month month_number={month_number}
                       year={current_year}
                       setCurrentDay={setCurrentDay}/>
            </div>

            <div>
                <div className="events">
                    {list_events().map((event, index) => (
                        <div key={index} className="event">
                            <div className="event-desc">{event}</div>
                            <button onClick={() => delete_event(index)} className="delete-event">-</button>
                        </div>
                    ))}
                </div>

                <input
                    type="text"
                    onChange={(e) => setNewEvent(e.target.value)}
                />
                <button onClick={add_event}>Add Event</button>
            </div>
        </div>
    );
}

export default MonthView
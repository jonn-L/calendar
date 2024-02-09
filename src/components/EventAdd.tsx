function EventAdd({setNewEvent}:{
    setNewEvent: (NewEvent: string) => void
}) {


    return (
        <div className="event-add">
            <form action="">
                
            </form>
                <input
                    type="text"
                    onChange={(e) => setNewEvent(e.target.value)}
                />

                
        </div>
    )
}

export default EventAdd;
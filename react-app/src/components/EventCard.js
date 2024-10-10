
function EventCard(event){
  return(
    <div className="event-item">
          <h3>{event.title}</h3>
          <p>{event.date}</p>    
          <p>{event.description}</p>
          <button className="deleteEventBtn" data-id={event.id}>Delete</button>
        </div>
  );
}

export default EventCard;
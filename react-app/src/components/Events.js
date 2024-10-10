import Search from "./Search";
import { events } from "./data";
import EventCard from "./EventCard";

function EventsList()  {
  return (
    <section id="events">
    <h2>My Events</h2>
    <Search placeholder='Search Events...'></Search>
      {events.map(event => (
        <EventCard 
        key={event.id}
        title={event.title}
        date={event.date}
        description={event.description}
        id={event.id}
        ></EventCard>
      ))}
    </section>
  );
};

export default EventsList;

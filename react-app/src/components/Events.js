import Search from "./Search";

const events = [
  { id: 1, title: "React Workshop", date: "2024-10-10", description: "Learn React.js basics" },
  { id: 2, title: "Node.js Meetup", date: "2024-10-15", description: "A meetup for Node.js enthusiasts" }
];

function EventsList()  {
  return (
    <section id="events">
    <h2>My Events</h2>
    <Search></Search>
      {events.map(event => (
        <div className="event-item">
          <h3>{event.title}</h3>
          <p>{event.date}</p>
          
          <p>{event.description}</p>
          <button className="deleteEventBtn" data-id={event.id}>Delete</button>
        </div>
      ))}
    </section>
  );
};

export default EventsList;

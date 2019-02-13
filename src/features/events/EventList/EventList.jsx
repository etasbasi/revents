import React from "react";

import EventListItem from "./EventListItem";

const EventList = ({ events, onEventEdit }) => {
  return (
    <div>
      <h1>Event List</h1>
      {events.map((event, index) => (
        <EventListItem onEventEdit={onEventEdit} key={index} event={event} />
      ))}
    </div>
  );
};

export default EventList;

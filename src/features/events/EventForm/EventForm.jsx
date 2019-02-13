import React, { useState, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

const EventForm = ({ handleCancel, createEvent, selectedEvent }) => {
  const [event, setEvent] = useState(emptyEvent);

  useEffect(() => {
    setEvent(selectedEvent);
  }, [selectedEvent]);

  const onFormSubmit = e => {
    e.preventDefault();
    createEvent(event);
  };

  const handleChange = e => {
    let eventName = e.target.name;
    event[eventName] = e.target.value;
    setEvent(event);
  };

  return (
    <div>
      <Segment>
        <Form onSubmit={onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              value={event.title}
              onChange={handleChange}
              placeholder="Event Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              value={event.date}
              onChange={handleChange}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              value={event.city}
              onChange={handleChange}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              value={event.venue}
              onChange={handleChange}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              value={event.hostedBy}
              onChange={handleChange}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    </div>
  );
};

export default EventForm;

import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

const randomUserImg = () => {
  //there are only 98 male images as of writing
  const num = Math.round(Math.random() * 98);
  const MaleUser = `https://randomuser.me/api/portraits/men/${num}.jpg`;
  const femaleUser = `https://randomuser.me/api/portraits/women/${num}.jpg`;
  return Math.round(Math.random()) ? MaleUser : femaleUser;
};

class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image as="a" size="mini" circular src={randomUserImg()} />
      </List.Item>
    );
  }
}

export default EventListAttendee;

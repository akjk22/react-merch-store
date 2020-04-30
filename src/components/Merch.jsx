import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTicketClicked(props.id)}>
        <img width="200px" height="200px" src={props.location}></img>
        <h1>{props.name}</h1>
        <p><em>{props.issue}</em></p>
        <hr /></div>
    </React.Fragment >
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  inventory: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenTicketClicked: PropTypes.func // new PropType
};

export default Ticket;
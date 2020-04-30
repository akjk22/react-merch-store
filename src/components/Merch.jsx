import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <img width="200px" height="200px" src={props.location}></img>
      <h1>{props.name}</h1>
      <p><em>{props.issue}</em></p>
      <hr />
    </React.Fragment >
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Ticket;

import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket } = props; //new code

  return (
    <React.Fragment>
      <img width="200px" height="200px" src={ticket.location}></img>
      <h1>{ticket.name}</h1>
      <p><em>{ticket.issue}</em></p>
      <p><em>There are {ticket.inventory} left </em></p>
      <button onClick={props.onClickingEdit}>Buy One</button> { /* new code */}
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingEdit: PropTypes.func


};

export default TicketDetail;




// onClick={() => onClickingBuy(item.id)}
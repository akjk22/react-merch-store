import React from "react";
import ReusableForm from "./ReusableForm";



function EditNewTicket(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({ name: ticket.name, location: ticket.location, issue: ticket.issue, inventory: ticket.inventory, id: ticket.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTicketFormSubmission} /* new code */
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}


export default EditNewTicket;
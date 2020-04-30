import React from "react";
import ReusableForm from "./ReusableForm";



function EditNewTicket(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({ name: event.target.name.value, issue: event.target.issue.value, id: ticket.id });
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
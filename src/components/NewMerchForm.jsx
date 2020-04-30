import React from "react";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewTicketForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );



  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({ name: event.target.name.value, issue: event.target.issue.value, id: v4() });
  }


}
export default NewTicketForm;
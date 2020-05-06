import React from "react";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewMerchForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewMerchFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );



  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({ name: event.target.name.value, issue: event.target.issue.value, id: v4() });
  }


}
export default NewMerchForm;
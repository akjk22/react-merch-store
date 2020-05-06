import React from "react";
import ReusableForm from "./ReusableForm";



function EditNewMerch(props) {
  const { merch } = props;

  function handleEditMerchFormSubmission(event) {
    props.onClickingBuy(merch.id)
    props.onClicky()
    event.preventDefault();
    //props.onEditMerch({ name: merch.name, location: merch.location, issue: merch.issue, inventory: merch.inventory, id: merch.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditMerchFormSubmission} /* new code */
        buttonText="Update Merch" />
    </React.Fragment>
  );
}


export default EditNewMerch;


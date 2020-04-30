import React from 'react';
// import NewTicketForm from './NewMerchForm';
import TicketList from './MerchList';
import TicketDetail from './MerchDetail';
import EditTicketForm from './EditMerchForm';
import { merchList } from './FakeMerchService';

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      formVisibleOnPage: false,
      masterTicketList: merchList(),
      selectedTicket: null,
      editing: false
    };

    this.handleClick = this.handleClick.bind(this); //new code here
  }


  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false // new code
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  // handleAddingNewTicketToList = (newTicket) => {
  //   const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
  //   this.setState({
  //     masterTicketList: newMasterTicketList,
  //     formVisibleOnPage: false
  //   });
  // }
  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({ selectedTicket: selectedTicket });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const editedMasterTicketList = this.state.masterTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);
    this.setState({
      masterTicketList: editedMasterTicketList,
      editing: false,
      selectedTicket: null
    });
  }
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditTicketForm ticket={this.state.selectedTicket} onEditTicket={this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail
        ticket={this.state.selectedTicket}
        onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Ticket List";
    }
    // else if (this.state.formVisibleOnPage) {
    //   // This conditional needs to be updated to "else if."
    //   currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
    //   buttonText = "Return to Ticket List";
    else {
      currentlyVisibleState =
        <TicketList ticketList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />



      // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.
      // buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default MerchControl;
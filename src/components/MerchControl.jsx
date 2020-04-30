import React from 'react';
import NewTicketForm from './NewMerchForm';
import TicketList from './MerchList';
import { merchList } from './FakeMerchService';

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      card: merchList(),
      formVisibleOnPage: false
    };

    this.handleClick = this.handleClick.bind(this); //new code here
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List"; // new code
    } else {
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */}
      </React.Fragment>
    );
  }

}

export default MerchControl;
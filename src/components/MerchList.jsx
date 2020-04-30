import React from 'react';
import Ticket from './Merch';
import { merchList } from './FakeMerchService';

class FlashcardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      card: merchList(),
      cardFlip: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <hr />
        {this.state.card.map((ticket, index) =>
          <Ticket id={ticket.id}
            name={ticket.name}
            location={ticket.location}
            issue={ticket.issue}
            key={index} />
        )}
      </React.Fragment>
    );
  }
}
export default FlashcardList;
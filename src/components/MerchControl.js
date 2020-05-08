import React from 'react';
// import NewMerchForm from './NewMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import EditMerchForm from './EditMerchForm';
import { merchList } from './FakeMerchService';
import './MerchControl.css';
import { connect } from 'react-redux';


class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      // no longer need this since our RootReducer handles this
      masterMerchList: merchList(),
      selectedMerch: null,
      editing: false
    };

    this.handleClick = this.handleClick.bind(this); //new code here
  }

  // method to mutate state
  // needs to know which item to change
  // start with a console.log() to ensure this is working

  // };
  handleBuy = () => {

    const buyItem = this.state.masterMerchList.map((item) => {
      if (item.id !== this.state.selectedMerch.id) {
        return item;
      }
      return {
        ...item,
        inventory: item.inventory - 1,
      };
    });
    console.log(buyItem)
    this.setState({ masterMerchList: buyItem, editing: true });
  }

  handleClick = () => {
    if (this.state.selectedMerch != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedMerch: null,
        editing: false // new code
      });
    } else {
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage,
      // }));
      // no longer need any setState methods dealing with the form since Redux takes care of this slice of state
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }
  // handleAddingNewMerchToList = (newMerch) => {
  //   const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
  //   this.setState({
  //     masterMerchList: newMasterMerchList,
  //     formVisibleOnPage: false
  //   });
  // }

  handleAddingNewMerchToList = (newMerch) => {
    const { dispatch } = this.props;
    const { name, img, inventory, issue, id } = newMerch;
    const action = {
      type: 'ADD_MERCH',
      name: name,
      img: img,
      inventory: inventory,
      issue: issue,
      id: id
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.masterMerchList.filter(merch => merch.id === id)[0];
    this.setState({ selectedMerch: selectedMerch });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleEditingMerchInList = (merchToEdit) => {
    // const editedMasterMerchList = this.state.masterMerchList
    //   .filter(merch => merch.id !== this.state.selectedMerch.id)
    //   .concat(merchToEdit);
    // this.setState({
    //   masterMerchList: editedMasterMerchList,
    //   editing: false,
    //   selectedMerch: null
    // });

    const { dispatch } = this.props;
    const { name, img, inventory, issue, id } = merchToEdit;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      name: name,
      issue: issue,
      inventory: inventory,
      img: img
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditMerchForm onClicky={this.handleClick} onClickingBuy={this.handleBuy} merch={this.state.selectedMerch} onEditMerch={this.handleEditingMerchInList} />
      buttonText = "Return to Merch List";
    } else
      if (this.state.selectedMerch != null) {
        currentlyVisibleState = <MerchDetail
          merch={this.state.selectedMerch}
          onClickingEdit={this.handleEditClick} />
        buttonText = "Return to Merch List";
      }
      // else if (this.state.formVisibleOnPage) {
      //   // This conditional needs to be updated to "else if."
      //   currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />;
      //   buttonText = "Return to Merch List";
      else {
        currentlyVisibleState =
          <MerchList merchList={this.state.masterMerchList} onMerchSelection={this.handleChangingSelectedMerch} />



        // Because a user will actually be clicking on the merch in the Merch component, we will need to pass our new handleChangingSelectedMerch method as a prop.
        // buttonText = "Add Merch";
      }
    return (
      <React.Fragment>
        <div className="container">
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // masterTicketList: state
    // we no longer need the above since we're using rootReducer in our store
    masterTicketList: state.masterTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
export default connect(mapStateToProps)(MerchControl);
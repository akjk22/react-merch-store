import React from 'react';
// import NewMerchForm from './NewMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import EditMerchForm from './EditMerchForm';
import { merchList } from './FakeMerchService';


class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
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
  handleBuy = (itemToBuy) => {

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
        formVisibleOnPage: false,
        selectedMerch: null,
        editing: false // new code
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  // handleAddingNewMerchToList = (newMerch) => {
  //   const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
  //   this.setState({
  //     masterMerchList: newMasterMerchList,
  //     formVisibleOnPage: false
  //   });
  // }
  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.masterMerchList.filter(merch => merch.id === id)[0];
    this.setState({ selectedMerch: selectedMerch });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleEditingMerchInList = (merchToEdit) => {
    const editedMasterMerchList = this.state.masterMerchList
      .filter(merch => merch.id !== this.state.selectedMerch.id)
      .concat(merchToEdit);
    this.setState({
      masterMerchList: editedMasterMerchList,
      editing: false,
      selectedMerch: null
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
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default MerchControl;
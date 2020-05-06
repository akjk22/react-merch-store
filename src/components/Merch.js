import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenMerchClicked(props.id)}>
        <img alt="" width="200px" height="200px" src={props.img}></img>
        <h1>{props.name}</h1>
        <p><em>{props.issue}</em></p>
        <p><em>There are {props.inventory} left </em></p>
        <hr /></div>
    </React.Fragment >
  );
}

Merch.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  inventory: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenMerchClicked: PropTypes.func // new PropType
};

export default Merch;
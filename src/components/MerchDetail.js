
import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props) {
  const { merch } = props; //new code

  return (
    <React.Fragment>
      <img alt="" width="200px" height="200px" src={merch.img}></img>
      <h1>{merch.name}</h1>
      <p><em>{merch.issue}</em></p>
      <p><em>There are {merch.inventory} left </em></p>
      <button onClick={props.onClickingEdit}>Buy One</button> { /* new code */}
      <hr />
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingEdit: PropTypes.func


};

export default MerchDetail;




// onClick={() => onClickingBuy(item.id)}
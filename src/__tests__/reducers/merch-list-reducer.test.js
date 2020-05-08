import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchListReducer({}, { type: null })).toEqual({});
  });
});

describe('merchListReducer', () => {


  const currentState = {
    1: {
    name: 'T-Shirt',
    img: 'img',
    inventory: 5,
    issue: "issue",
    id: 1
  },
    2: {  name: 'Hoodie',
    img: 'img',
    inventory: 24,
    issue: "issue",
    id: 2}
  }

  
  let action;
  const merchData = {
    name: 'T-Shirt',
    img: 'img',
    inventory: 5,
    issue: "issue",
    id: 1
  };

  test('Should successfully add new merch data to masterMerchList', () => {
    const { name, img, inventory, issue, id } = merchData;
    action = {
      type: 'ADD_MERCH',
      name: name,
      img: img,
      inventory: inventory,
      issue: issue,
      id: id
    };

    expect(merchListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        img: img,
        inventory: inventory,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a merch', () => {
    action = {
      type: 'DELETE_MERCH',
      id: 1
    };
    expect(merchListReducer(currentState, action)).toEqual({
      2: {  name: 'Hoodie',
    img: 'img',
    inventory: 24,
    issue: "issue",
    id: 2}
    });
  });


});
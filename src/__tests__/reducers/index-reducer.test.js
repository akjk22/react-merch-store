import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import merchListReducer from '../../reducers/merch-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterMerchList: {},
      formVisibleOnPage: false

      //here we store multiple slices of state. We could combine many reducers if we wished - and our root reducer can have many state slices.
    });
  });

  test('Check that initial state of merchListReducer matches root reducer', () => {
    expect(store.getState().masterMerchList).toEqual(merchListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of merchListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_MERCH',
      name: 'T-Shirt',
      img: 'img',
      inventory: 5,
      issue: "issue",
      id: 1
    }
   
    store.dispatch(action);
    expect(store.getState().masterMerchList).toEqual(merchListReducer(undefined, action));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});

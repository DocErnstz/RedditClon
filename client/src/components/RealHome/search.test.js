import React from "react";
import { shallow } from "enzyme";
import Searchbar from "./search";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../../reducers";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

let wrapped = shallow(
  <Provider store={store}>
    <Searchbar />
  </Provider>
);

describe("Title", () => {
  it("renders the Titles children", () => {
    expect(wrapped).toMatchSnapshot();
  });
});

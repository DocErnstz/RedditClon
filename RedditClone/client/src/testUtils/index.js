import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../index.js";
import { mergeDeepRight } from "ramda";
import rootReducer from "../reducers";

export const makeMountRender = (Component, defaultProps = {}) => {
  return (customProps = {}) => {
    const props = {
      ...defaultProps,
      ...customProps,
    };
    return mount(<Component {...props} />);
  };
};

export const makeStore = (customState = {}) => {
  const root = rootReducer({}, { type: "@@INIT" });
  const state = mergeDeepRight(root, customState);

  return createStoreWithMiddleWare(rootReducer, state);
};

export const reduxify = (Component, props = {}, state = {}) => {
  return function reduxWrap() {
    return (
      <Provider store={makeStore(state)}>
        <Component {...props} />
      </Provider>
    );
  };
};

export const snapshotify = (reactWrapper) => {
  return reactWrapper.html();
};

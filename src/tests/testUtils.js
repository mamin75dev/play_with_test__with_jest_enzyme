import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import { middlware } from "../setupStore";

const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlware)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

const tagHelper = (tag) => {
  return `[data-test='${tag}']`;
};

const findComponentByTestAttr = (wrapper, val) => {
  return wrapper.find(tagHelper(val));
};

const checkComponentProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};

export { findComponentByTestAttr, checkComponentProps, storeFactory };

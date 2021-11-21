import checkPropTypes from "check-prop-types";

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

export { findComponentByTestAttr, checkComponentProps };

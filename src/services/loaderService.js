let _ref = null;

const setRef = (ref) => {
  _ref = ref;
};

const setVisible = (isVisible) => {
  _ref.setVisible(isVisible);
};

export default { setRef, setVisible };

const changeFilter = filter => dispatch => {
  dispatch({
    type: 'CHANGE_FILTER',
    payload: { filter },
  });
};

export default changeFilter;

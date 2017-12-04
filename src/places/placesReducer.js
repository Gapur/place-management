export default (state = null, action) => {
  switch (action.type) {
    case 'FETCH_PLACES': {
      return action.payload;
    }
  }
  return state;
}

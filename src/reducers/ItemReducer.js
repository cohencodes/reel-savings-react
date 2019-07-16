export const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ACTIVATE_ITEM':
      return state.map(item => {
        // map over items in STORE and set to the opposite of previous value (Active || Paused)
        if (item.name === action.name) {
          item.status = !item.status;
        }
        return item;
      });
    case 'REMOVE_ITEM':
      return state.filter(item => item.name !== action.name);
    default:
      return state;
  }
};

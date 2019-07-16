export const itemReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_STATUS':
      return state.map(item => {
        // map over items in STORE and set to the opposite of previous value (active || paused)
        if (item.name === action.name) {
          item.status === 'active'
            ? (item.status = 'paused')
            : (item.status = 'active');
        }
        return item;
      });
    case 'REMOVE_ITEM':
      return state.filter(item => item.name !== action.name);
    default:
      return state;
  }
};

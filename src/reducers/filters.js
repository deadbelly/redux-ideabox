export const todos = (state = '', action) => {
  switch (action.type) {
    case 'APPLY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

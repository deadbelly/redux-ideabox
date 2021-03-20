export const filters = (state = null, action) => {
  switch (action.type) {
    case 'APPLY_FILTER':
      if (action.filter !== null) {
        return (todos) => {
          return todos.filter(todo => todo.completed === action.filter);
        };
      }
      return action.filter;
    default:
      return state;
  }
}

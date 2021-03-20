export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.todo, completed: false }];
    case 'TOGGLE_COMPLETE':
      const toggledState = state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return toggledState;
    default:
      return state;
  }
}

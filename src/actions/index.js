export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const toggleComplete = id => ({
  type: 'TOGGLE_COMPLETE',
  id
});

export const applyFilter = filter => ({
  type: 'APPLY_FILTER',
  filter
});

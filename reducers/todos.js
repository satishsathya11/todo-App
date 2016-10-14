const initialState = {
  value: 'something',
  todos: []
}

const todos = (state = initialState, action) => {
  let newTodos = Object.assign([], state.todos);
  switch (action.type) {
    case 'ADD_TODO':
      newTodos.push({
        id: action.id,
        text: action.text,
        completed: false
      });
      return Object.assign({}, state, {
        todos: newTodos
      })
    case 'TOGGLE_TODO':
      newTodos = newTodos.map(t => {
        if (t.id !== action.id) {
          return t;
        }
        return Object.assign({}, t, {
          completed: !t.completed
        });
      })
      console.log(newTodos);
      return Object.assign({}, state, {
        todos: newTodos
      })
    default:
      return state
  }
}

export default todos
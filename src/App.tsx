import React, { useState } from 'react';
// import {Route, BrowserRouter} from 'react-router-dom'
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // setTodos(preTodos=>[
    //   ...preTodos,
    //   {id: Math.random().toString(), text: text}
    // ])
    setTodos([...todos, { id: Math.random().toString(), text: text }]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

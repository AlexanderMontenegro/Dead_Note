
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItems';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';





const defaultTodos = [
  { text: "Cortar cebolla", completed: true},
  { text: "Cortar morron", completed: false},
  { text: "Cortar papa", completed: false},
  { text: "Cortar perejil", completed: false},
];



function App() {
  return (
    <>
      <TodoCounter completed={16} total={26} />
      <TodoSearch />

      <TodoList>
       {defaultTodos.map(todo => (
        <TodoItems 
        key={todo.text}
        text= {todo.text}
        completed= {todo.completed}
        />
       ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}






export default App;

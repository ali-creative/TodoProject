import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoList from './Components/Todo-Project/TodoList';



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);



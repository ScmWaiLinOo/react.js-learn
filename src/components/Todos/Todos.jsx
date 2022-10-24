import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
const Todos= props =>(
  <div>
    <h1>{props.title}</h1>
    <TodoItem title="learn react.js"/>
    <TodoItem title="learn Thazin Moe"/>
  </div>
);
export default Todos;
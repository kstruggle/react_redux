import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter';

import TodoApp from './components/TodoApp';

//任何根节点都只能有一个 根
ReactDOM.render(
  <div>
    <Counter/>
    <TodoApp/>
  </div>,
  document.getElementById('root')
)

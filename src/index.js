import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter';

import TodoApp from './components/TodoApp';

ReactDOM.render(
  <div>
    <Counter/>
    <TodoApp/>
  </div>,
  document.getElementById('root')
)

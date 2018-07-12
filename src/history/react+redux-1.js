import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from './redux';
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
let reducer = (state={number:0},action)=>{  //state是状态树 可以是任意的结构  action 是纯对象
  if(action === undefined) return state;
  switch (action.type) {
    case INCREASE:   //加
      return {number:state.number+1}
      break;
    case DECREASE:   //减
      return {number:state.number-1}
      break;
    default:
      return state
  }
}
let store = createStore(reducer);  //store == {getState,subscribe,dispatch}

class Counter extends React.Component{
  render() {
    return (
      <div>
        <p>{store.getState().number}</p>
        <button onClick={()=>store.dispatch({type:INCREASE})}>+</button>
        <button onClick={()=>store.dispatch({type:DECREASE})}>-</button>
      </div>
    )
  }
}
let render = ()=>{
  ReactDOM.render(<Counter/>,
  document.getElementById('root')
)}
render();
store.subscribe(render);

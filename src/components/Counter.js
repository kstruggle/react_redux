
import React from 'react';

import {createStore} from '../redux';
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

let reducer = (state={number:0},action)=>{  //state是状态树 可以是任意的结构  action 是纯对象
  if(action === undefined) return state;
  switch (action.type) {
    case INCREASE:   //加
      return {number:state.number + action.amount};
      break;
    case DECREASE:   //减
      return {number:state.number - action.amount};
      break;
    default:
      return state
  }
}
let store = createStore(reducer);  //store == {getState,subscribe,dispatch}


//定义action
let increase = (amount)=>(   // 返回函数一个json  如果多行就 加（）  一行就直接写了
  {type:INCREASE,amount}
)
let decrease = (amount)=>(
  {type:DECREASE,amount}
)



export default class Counter extends React.Component{
  constructor(){
    super();
    this.state = {number:store.getState().number}
  }
  componentWillMount() {
    this.unsubscribe = store.subscribe(()=>{   //把回调函数放进去
      this.setState(
        {number:store.getState().number}   //改变 this.state    store.getState()
      )
    })
  }
  componentWillUnmount() {   //组件取消挂载
    this.unsubscribe();    //取消订阅
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>store.dispatch(increase(3))}>+</button>
        <button onClick={()=>store.dispatch(decrease(2))}>-</button>
      </div>
    )
  }
}

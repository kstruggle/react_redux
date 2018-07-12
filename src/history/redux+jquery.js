import {createStore} from './redux';
import $ from 'jquery';

const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

$('body').append(`
  <p id='counter'></p>
  <button id='increaseBtn'>+</button>
  <button id='decreaseBtn'>-</button>
`);
let reducer = (state={number:0},action)=>{  //state是状态树 可以是任意的结构  action 是纯对象
  if(action == undefined) return state;
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




//交互逻辑   运用方法


//渲染
let render = ()=>{
  $('#counter').html(store.getState().number);   //获取这个值
}


//增加函数
$('#increaseBtn').click(()=>store.dispatch({type:INCREASE}));

//减少函数
$('#decreaseBtn').click(()=>store.dispatch({type:DECREASE}));


store.subscribe(render)
render();

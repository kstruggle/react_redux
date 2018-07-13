import {createStore} from './redux';



/*
旧状态： {number：0}  {list:[]}
新状态： {counter：{number：0}，todoapp:{list:['吃饭'，'睡觉']}}
*/
import counter from './reducers/counter';
import todoapp from './reducers/todoapp';

import combineReducers from './combineReducers';

// let combineReducers = (reducers)=>     //合并状态  reducers == {counter：counter,todoapp}
//   (state,action) =>{  //返回一个reducer
//     if(action === undefined) return state;
//     let newState = {};
//     for (var key in reducers) {
//       newState[key] = reducers[key](state[key],action);
//     }
//     return newState;
//   }

let reducer = combineReducers({
  counter:counter,   //传入一个对象  {}
  todoapp
})

let store = createStore(reducer);  //store == {getState,subscribe,dispatch}
export {store}

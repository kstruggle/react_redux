
import {INCREASE,DECREASE} from '../action';
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
export default reducer

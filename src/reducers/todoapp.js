
import {ADDLIST,DELETELIST} from '../action';

//定义reducer
let reducer = (state={list:['吃饭','睡觉']},action) =>{
  if(action === undefined) return state;
  switch (action.type) {
    case ADDLIST:
      return {list:[...state.list,action.text]};    //action,text 是传过来的输入的文本
      break;
    case DELETELIST:
      let list = state.list;
      list.splice(action.index,1)     //action.index   是传过来的 需要删除的index索引值
      return {list:[...list]}     //我们的状态具有不变性，每次都要返回一个新的对象
      break;
    default:
      return state
  }
}
export default reducer

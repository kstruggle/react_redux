import React from 'react';
// import {createStore} from '../redux';
import {createStore} from '../redux';


//定义action 的类型
const ADDLIST = 'ADDLIST'    //添加
const DELETELIST = 'DELETELIST'   //删除

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
let store = createStore(reducer);  //store == {getState,subscribe,dispatch}


//定义action
let addlist = (text)=>(   // 返回函数一个json  如果多行就 加（）  一行就直接写了
  {type:ADDLIST,text}
)
let deletelist = (index)=>(   // 返回函数一个json  如果多行就 加（）  一行就直接写了
  {type:DELETELIST,index}
)

export default class Todo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {list:store.getState().list}
  }
  handlekeydown = (e) =>{
    if(e.keyCode === 13 && e.target.value.length > 0){
      let text = e.target.value;
      // store.dispatch({     在外部定义 action
      //   type:ADDLIST,
      //   text:e.target.value      //当前事件源的值
      // })
      store.dispatch(addlist(text))
      e.target.value = '';
    }
  }
  handleDelete = (index) => {
    store.dispatch(deletelist(index))
  }

  //订阅   改变完成之后自己要拿到这些值
  componentWillMount() {
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        list:store.getState().list
      })
    })
  }
  //取消订阅
  componentWillUnmount() {
    this.unsubscribe()
  }
// ()=>this.handleDelete(index)
  render(){
    return (
      <div>
        <input type="text" onKeyDown={this.handlekeydown}/>
        <ul>
          {
            this.state.list.map((todo,index)=>(
              <li key={index}>{todo}<button onClick={()=>this.handleDelete(index)}>删除</button></li>
            ))
          }
        </ul>
      </div>
    )
  }




}

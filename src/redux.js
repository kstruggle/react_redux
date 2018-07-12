
//创建仓库
const createStore = (reducer) =>{
  let state;                    //状态对象
  let listeners = [];            //监听函数数组
  let getState = () => state;   //获取最新的状态
  let dispatch = (action) =>{         //向仓库发送action
    state = reducer(state,action)    //传入老的state  改变  变新的
    listeners.forEach(listener=>listener())
  }
  let subscribe = (listener) => {       //订阅仓库内的状态变化事件  当状态变化调用对应的监听函数
    listeners.push(listener);
    return ()=>{//取消订阅
      listeners = listeners.filter(l =>listener!=l)  //之前 在数组中的就不要了  过滤出一个新的数组
    }
  }
  dispatch();
  return {
    getState,
    subscribe,
    dispatch
  }
}

export {createStore}

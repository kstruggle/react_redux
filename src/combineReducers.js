let combineReducers = (reducers)=>     //合并状态  reducers == {counter：counter,todoapp}
  (state={},action) =>{  //返回一个reducer
    let newState = {};
    for (var key in reducers) {
      newState[key] = reducers[key](state[key],action);
    }
    return newState;
  }


  export default combineReducers;

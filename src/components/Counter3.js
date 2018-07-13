import React from 'react';
import {createStore} from '../redux'
import counter from '../reducers/counter'
let store = createStore(counter)




export default class Counter2 extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <p></p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

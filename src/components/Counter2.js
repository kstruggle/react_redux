import React from 'react';
import {createStore} from '../redux'
import counter from '../reducers/counter'
let store = createStore(counter)




export default class Counter2 extends React.Component{
  constructor(){
    super();
    this.state = {number:store.getState().number}
  }
  componentWillMount() {
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        number:store.getState().number
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

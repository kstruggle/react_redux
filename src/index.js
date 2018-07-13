import React from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'prop-types';    //react 的一个属性  用来验证

class Container extends React.Component {
  getChildContext(){   //  1.在父组件或者 爷爷组件上定义函数    context上下文
    //返回一个对象，这个对象就是子组件的context对象
    return {color:'blue'}
  }
  render(){
    return(
      <MessageList messages={this.props.messages}></MessageList>
    )
  }
}

//2. 定义这个context的 类型
Container.childContextTypes = {   //定义属性的类型
  color:PropTypes.string
}

class MessageList extends React.Component {
  render(){
    return(
      <ul>
        {
          this.props.messages.map((item,index)=>{
            return <Message key={index} message={item}/>
          })
        }
      </ul>
    )
  }
}

class Message extends React.Component {
  render(){
    return(
      {/* 4.  使用这个context */}
      <li style={{color:this.context.color}}>{this.props.message}</li>
    )
  }
}

//3.接收 到的 context 的类型
Message.contextTypes = {   //定义属性的类型
  color:PropTypes.string
}




let messages = [1,2,3];


//任何根节点都只能有一个 根
ReactDOM.render(
  <Container messages={messages}></Container>,
  document.getElementById('root')
)

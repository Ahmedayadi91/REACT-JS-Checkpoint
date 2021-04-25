import React, { Component } from 'react';

class Message extends React.Component {
    constructor () {
        super()
        this.state = {
            Message : 'welcome visitor '
        }
    }
    changeMessage() {
        this.setState  ( {
            message:'merci pour votre visite'
        } )
    }
    render() {
      return ( <div>
        <h1> {this.state.Message} </h1>; 
        <button onClick= {() => this.changeMessage() }> joint us </button>
        </div> ) 
    }
  }

export default Message 
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// class Event extends Component {
//     constructor (props) {

//     super(props)

//    clickHandler() 
//         this.setstate({
//             message:'Hello !!'
//         }
//         )
//     } }

//     render() 
//         return (
//             <div>
//                 <div> {this.state.message}</div>
//                 <button onClick={this.clickHandler.bind(this)}> Click </button>
//             </div>
//         )
    
class Football extends React.Component {
            shoot() {
              // alert("Great Shot!");
              window.location="http://www.google.com"
            }
            render() {
              return (
                <button onClick={this.shoot}>Take the shot!</button>
              );
            }
          }
          
          ReactDOM.render(<Football />, document.getElementById('root'))

export default Football

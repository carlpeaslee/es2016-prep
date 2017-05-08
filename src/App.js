import React, { Component } from 'react'

class App extends Component {



  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    myForm: ''
  }


  message = 'Hello  Hello'

  get myMessage() {
    return (
      <h3>
        {this.message}
      </h3>
    )
  }

  set myMessage(newMessage) {
    this.message = newMessage
  }


  // handleChange = (e) => {
  //   let {name, value} = e.target
  //   this.myMessage = value
  //   this.setState( (prevState) => {
  //     return {
  //       [name]: value
  //     }
  //   })
  // }


  handleChange(e){
    let {name, value} = e.target
    this.myMessage = value
    this.setState( (prevState) => {
      return {
        [name]: value
      }
    })
  }


  render() {
    console.log("this.props", this.props)
    return (
      <div>
        <h1>Es2016</h1>
        <textarea
          name="myForm"
          value={this.state.myForm}
          onChange={this.handleChange}
        />
        {this.myMessage}
      </div>
    )
  }
}



export default App

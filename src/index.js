import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App
    hello={"look at this"}
  />,
  document.getElementById('root')
)


class Random {

  constructor(signature){
    this.signature = signature
    this.getIntegerBetween = this.getIntegerBetween.bind(this)
  }

  version = 0.1

  getIntegerBetween(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  getYesOrNo(){
    console.log(this)
    if (this.getIntegerBetween(1,2) === 1) {
      return "yes"
    } else {
      return "no"
    }
  }

}

let rando = new Random('-Carl Peaslee')

console.log("rando", rando.getYesOrNo())

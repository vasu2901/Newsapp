import React, { Component } from 'react'
import Loading  from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading} alt="Loading"></img>
      </div>
    )
  }
}

export default Spinner
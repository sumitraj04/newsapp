import React, { Component } from 'react'
import spinnerGif from '../Spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinnerGif} alt='spinnerGif' className='my-3'/>
      </div>
    )
  }
}

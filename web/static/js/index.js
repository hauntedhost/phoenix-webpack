import 'phoenix'
import 'phoenix_html'

import React, { Component } from 'react'
import { render } from 'react-dom'

import World from './world'
import '../css/style.scss'

class Root extends Component {
  render () {
    return <h1>Hello <World />!</h1>
  }
}

render(<Root />, document.getElementById('root'))

require('babel-polyfill');

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Game from './components/game'
import store from './store'

render (
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('app')
)

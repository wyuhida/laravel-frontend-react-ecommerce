import React, { Component, Fragment } from 'react'
import AppRoute from './route/AppRoute'

class App extends Component {
  render() {
    return (
     <Fragment>
      {/**
       * Load file AppRoute.jsx
       */}

       <AppRoute />
     </Fragment>
    )
  }
}

export default App

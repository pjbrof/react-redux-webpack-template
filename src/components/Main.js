require('normalize.css/normalize.css')
require('styles/App.css')

import React from 'react'

import Header from 'components/Header'

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="index">
        <Header/>
      </div>
    );
  }
}

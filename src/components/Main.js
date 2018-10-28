import React from 'react';

import Header from './Header';
import Footer from './Footer';

import '../styles/App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <Footer />
      </div>
    );
  }
}

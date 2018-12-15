import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
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

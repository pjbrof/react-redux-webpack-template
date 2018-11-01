import React from 'react';

export default class Header extends React.Component {

  addTwoNumbers(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="header">
        <h1>Header</h1>
      </div>
    );
  }
}

import React from 'react';

import './Footer.scss';

const currentYear = () => new Date().getFullYear();

// eslint-disable-next-line react/prefer-stateless-function
export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <span>
          Copyright &copy;
          {currentYear()}
        </span>
      </div>
    );
  }
}

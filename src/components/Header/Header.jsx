import React from 'react';
import { connect } from 'react-redux';

import { fetchInfo } from '../../actions/dataActions';

import './Header.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Header</h1>
      </div>
    );
  }
}

const mapStateToProps = store => store.data;

const mapActionsToProps = {
  fetchInfo
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Header);

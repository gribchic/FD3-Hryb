import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fName: PropTypes.string.isRequired,
      lName: PropTypes.string.isRequired,
      mName: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id=" + this.props.info.id + " componentWillReceiveProps");
    this.setState({ info: newProps.info });
  };

  render() {

    console.log("MobileClient id=" + this.state.info.id + " render");

    return (
      <tr className='MobileClient'>
        <td>{this.state.info.lName}</td>
        <td>{this.state.info.fName}</td>
        <td>{this.state.info.mName}</td>
        <td>{this.state.info.balance}</td>
        <td style={{"backgroundColor":this.state.info.balance>0? "green": "red"}}>{this.state.info.balance>0? "active": "blocked"}</td>
        <td><button type="button">Edit</button></td>
        <td><button type="button">Delete</button></td>
      </tr>
    );

  }

}

export default MobileClient;

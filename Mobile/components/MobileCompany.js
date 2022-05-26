import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fName: PropTypes.string.isRequired,
        lName: PropTypes.string.isRequired,
        mName: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
  };

  setName1 = () => {
    this.setState({ name: 'МТС' });
  };

  setName2 = () => {
    this.setState({ name: 'Velcom' });
  };

  setBalance = (clientId, newBalance) => {
    let newClients = [...this.state.clients]; // копия самого массива клиентов
    newClients.forEach((c, i) => {
      if (c.id == clientId) {
        //if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient = { ...c }; // копия хэша изменившегося клиента
        newClient.balance = newBalance;
        newClients[i] = newClient;
      }
    });
    this.setState({ clients: newClients });
  };

  /*
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };
  */

  setBalance1 = () => {
    this.setBalance(105, 230);
  };

  setBalance2 = () => {
    this.setBalance(105, 250);
  };

  render() {

    console.log("MobileCompany render");

    var clientsCode = this.state.clients.map(client =>
      <MobileClient key={client.id} info={client} />
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className=''>
          <button type="button">All</button>
          <button type="button">Active</button>
          <button type="button">Blocked</button>
          </div>
        <table>
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Patronymic</th>
              <th>Balance</th>
              <th>State</th>
              <th>Edit</th>
              <th>Delete</th></tr>
          </thead>
          <tbody>
            {clientsCode}
          </tbody>
        </table>
        <div>
          <button type='button'>Add Client</button>
        </div>
      </div>
    );

  }

}

export default MobileCompany;

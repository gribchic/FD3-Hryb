"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
  {id:101, lName:"Иванов", fName:"Иван", mName:"Иванович", balance:200}, 
  {id:105, lName:"Сидоров", fName:"Сидор", mName:"Сидорвич", balance:250}, 
  {id:110, lName:"Петров", fName:"Петр", mName:"Петрвич", balance:180},
  {id:120, lName:"Григорьев", fName:"Григорий", mName:"Григорьевич", balance:-220},
];

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('container') 
);


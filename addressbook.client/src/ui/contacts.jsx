import React from "react";
import ContactSubMenu from "./contactmenu";
import { contactlist, countrylist } from "./configuration";
import { useState, useEffect } from "react";
import Flag from 'react-flagpack'
import 'react-flagpack/dist/style.css'
import $ from 'jquery'
import DataTable from 'datatables.net-dt';

function Contacts(){
  const [countryModel, setCountryModel] = useState([]);
  const [contactModel, setContactModel] = useState([]);
  const [tableInitialized, setTableInitialized] = useState(false);

  useEffect(()=>{

      async function getCountryList() {
          const response = await fetch(countrylist);
          const data = await response.json();
          return data;
      }
      async function getContactList() {
          const response = await fetch(contactlist);
          const data = await response.json();
          return data;
      }
      getContactList();
      getCountryList();
      async function fetchData(){
        const [countryResponse, contactResponse] = await Promise.all([
        getCountryList(),
        getContactList()]);
        setCountryModel(countryResponse);
        setContactModel(contactResponse);
      }
      fetchData();
  },[]);

  useEffect(()=>{
     if (!tableInitialized && contactModel.length > 0){
          let tableContacts =  new DataTable('#contactsTable', {
            responsive: true
          });
          setTableInitialized(true);
        }
    }
    
    ,[contactModel])

    return <><div className="Init">
        <h1>Contact List</h1>
        <table id="contactsTable" className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Country</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      { contactModel.map( contact =>
          {
            const country = countryModel.find( country => country.id == contact.country )
            return ( <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.lastName}</td>
              <td>
              <Flag
                code={country.isoAlpha2}
                gradient="real-linear"
                size="m"
                hasDropShadow
              />&nbsp;{country.name}
              </td>
              <td><ContactSubMenu contact={contact} countryModel={countryModel} country={country}/></td>
          </tr>)
          }
        )
      }
    
    </tbody>
    </table>
        </div>
        </>
}

export default Contacts;
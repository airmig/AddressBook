import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import Flag from "react-flagpack";
import { deletecontact } from "./configuration";

function DeleteContact(){
    const location = useLocation();
    const { country, contact, countryModel } = location.state || {};
    const history = useNavigate();
    useEffect(() => {
        // Initialize Bootstrap tooltips
        if (window.bootstrap) {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
        }
        else {
            console.log("not defined")
        }
      }, []);

    function deleteConfirm(){
        async function deleteAsync(){
          const state = {country, contact};
          const response = await fetch(`${deletecontact}/${contact.id}`,{
            method: 'DELETE'
          });
            if (!response.ok) {
                alert('Could not delete record.');
                history('/details', {state});
            }
            history('/contacts');

        }
        deleteAsync();
    }

    function cancelDelete(){
        const state = {country, contact, countryModel};
        history('/details', {state});
    }
    return<div className="Init">
    <h1>Delete Contact</h1>
    <h6><Link to="/contacts">Return to Contact List</Link></h6>

    <h4 style={{color:'red'}}><img alt="User" src="/user.png"/>Are you sure you want to delete this contact?</h4>
    <table className="InitDetails">
<tbody>
        <tr>
            <td className="headerColumn">ID</td><td>{contact.id}</td>
            <td className="headerColumn">Country</td><td>  <Flag
                code={country.isoAlpha2}
                gradient="real-linear"
                size="m"
                hasDropShadow
              />&nbsp;{country.name}</td>
            <td className="headerColumn">City</td><td>{contact.city}</td>
        </tr>
        <tr>
            <td className="headerColumn">Name</td><td>{contact.name}</td>
            <td className="headerColumn">Phone</td><td>{contact.phone}</td>
            <td className="headerColumn">State</td><td>{contact.stateProvince}</td>
        </tr>
        <tr className="headerRow">
            <td className="headerColumn">Last Name</td><td>{contact.lastName}</td>
            <td className="headerColumn">Email</td><td>{contact.email}</td>
            <td className="headerColumn">Zipcode</td><td>{contact.zipCode}</td>
        </tr>
        </tbody></table>
        <h4>
        <button onClick={deleteConfirm} type="button" className="btn btn-danger">Confirm</button>
        &nbsp;
        <button onClick={cancelDelete} type="button" className="btn btn-secondary">Cancel</button>
        </h4>
    </div>
}

export default DeleteContact;
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Flag from "react-flagpack";

function Details(){
    const location = useLocation();
    const { country, contact, countryModel } = location.state || {};
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
    return<div className="Init">
    <h1>Contact Information</h1>
    <h6><Link to="/contacts">Return to Contact List</Link></h6>

    <h4><img alt="User" src="/user.png"/>&nbsp;{contact.name},{contact.lastName} Details 
    <Link to="/edit" state={{country, contact, countryModel}}><img alt="Edit" src="/edit.png" width="30px" height="30px"
                data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="Use this button to edit a customer." />
        </Link>
        |
        <Link to="/delete" state={{country, contact, countryModel}}><img alt="Delete" src="/delete.png" width="30px" height="30px"
         data-bs-toggle="tooltip" data-bs-placement="top"
         data-bs-custom-class="custom-tooltip"
         data-bs-title="Use this button to delete a customer."/>
        </Link></h4>
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

    </div>
}

export default Details;
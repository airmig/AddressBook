import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import Flag from "react-flagpack";
import { updatecontact } from "./configuration";

function Edit(){
    const location = useLocation();
    const { country, contact, countryModel } = location.state || {};
    const history = useNavigate();
    const [idValue, setId] = useState(contact.id);
    const [nameValue, setName] = useState(contact.name);
    const [lastName,setLastName] = useState(contact.lastName);
    const [countryId, setCountry] = useState(country.id);
    const [phone, setPhone] = useState(contact.phone);
    const [email,setEmail] = useState(contact.email);
    const [city, setCity] = useState(contact.city);
    const [stateProvince, setStateProvince] = useState(contact.stateProvince);
    const [zipCode, setZipCode] = useState(contact.zipCode);
    const [errors, setErrors] = useState([]);
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

    function editConfirm(){
        async function editAsync(){
          const state = {country, contact};
          const bodyData =  {"id": idValue,
          "name": nameValue,
          "lastName": lastName,
          "country": countryId,
          "phone": phone,
          "email": email,
          "city": city,
          "stateProvince": stateProvince,
          "zipCode": zipCode}

          const response = await fetch(`${updatecontact}?id=${idValue}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(bodyData)
          });
            if (!response.ok) {
                const data = await response.json();
                alert('Could not edit record.');
                setErrors(errors=>({...data}));
            }
            else{
                history('/contacts');
            }

        }
        editAsync();
    }

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handlePhoneChange(event){
        setPhone(event.target.value);
    }
    function handleStateChange(event){
        setStateProvince(event.target.value);
    }
    function handleLastChange(event){
        setLastName(event.target.value);
    }
    function handleEmailChange(event){
        setEmail(event.target.value);
    }
    function handleCityChange(event){
        setCity(event.target.value);
    }
    function handleZipChange(event){
        setZipCode(event.target.value);
    }
    function handleCountryChange(event){
        setCountry(event.target.value);
    }
    function cancelEdit(){
        history('/contacts');
    }
    return<div className="Init">
    <h1>Edit Contact</h1>
    <h6><Link to="/contacts">Return to Contact List</Link></h6>

    <h4 style={{color:'red'}}><img alt="User" src="/user.png"/>Update Contact Information&nbsp;
    <Link to="/delete" state={{country, contact, countryModel}}><img alt="Delete" src="/delete.png" width="30px" height="30px"
         data-bs-toggle="tooltip" data-bs-placement="top"
         data-bs-custom-class="custom-tooltip"
         data-bs-title="Use this button to delete a customer."/>
        </Link>
    </h4>
    <form><center>
    <div>
        
        {errors.errors && 
        <h5>The following errors were found:</h5>}
 
        {errors.errors && Object.entries(errors.errors).map(([keyValue, keyDescription])=>{
            return (<><span>{keyDescription}.</span><br/></>);
        })}
      
    </div>
    <table className="InitEdit">
<tbody>
        <tr>
            <td className="headerColumn">ID</td><td>{idValue}</td>
        </tr>
        <tr>
            <td className="headerColumn">Country</td><td> 
                <select onChange={handleCountryChange} value={countryId}>
                    <option>Select a country</option>
                    {
                        countryModel.map((country)=>{
                            return <option key={country.id} value={country.id}>{country.name}</option>
                        })
                    }
                </select>
                </td>
              </tr>
              <tr>
            <td className="headerColumn">City</td><td>
                <input name="city" type="text" defaultValue={city} onChange={handleCityChange}/></td>
        </tr>
        <tr>
            <td className="headerColumn">Name</td><td>
                <input type="text" name="name" defaultValue={nameValue} onChange={handleNameChange}/></td>
            </tr>
            <tr>
            <td className="headerColumn">Phone</td><td>
                <input type="text" name="phone" defaultValue={phone} onChange={handlePhoneChange}/></td>
            </tr>
            <tr>
            <td className="headerColumn">State</td><td>
                <input type="text" name="state" defaultValue={stateProvince} onChange={handleStateChange}/></td>
        </tr>

            <tr>
            <td className="headerColumn">Last Name</td><td>
                <input type="text" name="lastName" defaultValue={lastName} onChange={handleLastChange}/></td>
            </tr>
            <tr>
            <td className="headerColumn">Email</td><td>
                <input type="text" name="email" defaultValue={email} onChange={handleEmailChange}/></td>
                </tr>
            <tr>
            <td className="headerColumn">Zipcode</td><td>
                <input type="text" name="zip" defaultValue={zipCode} onChange={handleZipChange}/></td>
        </tr>
        </tbody></table></center></form>
        <h4>
        <button onClick={editConfirm} type="button" className="btn btn-danger">Update</button>
        &nbsp;
        <button onClick={cancelEdit} type="button" className="btn btn-secondary">Cancel</button>
        </h4>
    </div>
}

export default Edit;
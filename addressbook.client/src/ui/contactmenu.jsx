import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";

function ContactSubMenu({contact, country, countryModel}){
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

    return <div className="subMenu">
        <Link to="/details/" state={{country, contact, countryModel}}>
        <img alt="Details" src="details.png" 
         data-bs-toggle="tooltip" data-bs-placement="top"
         data-bs-custom-class="custom-tooltip"
         data-bs-title="Use this button to get the details of a customer." />
         </Link>
        |
        <Link to="/edit" state={{country, contact, countryModel}}><img alt="Edit" src="edit.png"
                data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="Use this button to edit a customer." />
        </Link>
        |
        <Link to="/delete" state={{country, contact, countryModel}}><img alt="Delete" src="delete.png"
         data-bs-toggle="tooltip" data-bs-placement="top"
         data-bs-custom-class="custom-tooltip"
         data-bs-title="Use this button to delete a customer."/>
        </Link>
    </div>
}

export default ContactSubMenu;
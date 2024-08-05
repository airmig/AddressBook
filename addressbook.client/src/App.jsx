import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './ui/navbar';
import Init from './ui/init';
import Contacts from './ui/contacts';
import CreateContact from './ui/create';
import DeleteContact from './ui/delete';
import EditContact from './ui/edit';
import Details from './ui/details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {  
    return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/create" element={<CreateContact />} />
            <Route path="/details" element={<Details />} />
            <Route path="/edit" element={<EditContact />} />
            <Route path="/delete" element={<DeleteContact />} />
        </Routes>
        </Router>
    );
}

export default App;
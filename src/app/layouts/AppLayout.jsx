import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import axios from 'axios';
import Footer from '../components/Footer';

const api = axios.create({
    baseURL: 'https://api.arxexperience.com/api/v1',
});

export default function AppLayout({ children }) {

    const [machines, setMachines] = useState(0);
    const getMachines = () => {
        api.get('/machines/098f6bcd4621d373cade4e832627b4f6/ads').then(response => setMachines(response.data.data))
    }
    useEffect(() => {
        getMachines()
    }, []);

    return (
        <div style={{height: '100%', display:'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}


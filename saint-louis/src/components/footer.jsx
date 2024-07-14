import '../Screen/bas.css'

import logo from '../logo.svg';
import svg from '../pictures/svg.svg';
import Rectangle from '../pictures/Rectangle.svg';
import instagram from '../pictures/instagram.svg';
import facebook from '../pictures/facebook.svg';
import Ellipse from '../pictures/Ellipse.svg';

import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Bas=()=> {
    const [emails, setEmails] = useState([]);
    const [newEmail, setNewEmail] = useState('');

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const response = await axios.get('http://localhost:8081/emails');
                setEmails(response.data);
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };

        fetchEmails();
    }, []);

    const handleInputChange = (e) => {
        setNewEmail(e.target.value);
    };

    const handleAddEmail = async () => {
        if (newEmail.trim() === '') {
            alert('Please enter an email address.');
            return;
        }

        try {
            await axios.post('http://localhost:8081/signup', { email: newEmail });
            setNewEmail('');
            const response = await axios.get('http://localhost:8081/emails');
            setEmails(response.data);
        } catch (error) {
            console.error('Error adding email:', error);
        }
    };


    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/events')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des événements :', error);
            });
    }, []);


    return (
        <div className="bas">
            <footer>
                <div className='haut'>
                    <div className='gauche'>
                        <img src={Ellipse} alt=''/>
                        <div>
                            <p>English</p>
                            <p>Privacy</p>
                            <p>Legal</p>
                        </div>
                        <div>
                            <img src={facebook} alt=''/>
                            <img src={instagram} alt=''/>
                        </div>
                    </div>
                    <div className='droite'>
                        <p>Join Our Newsletter</p>
                        <span>Be the first to know about our latest updates, exclusive offers, and more.</span>
                        <div className='input'>
                            <input type="email" placeholder='Your email' value={newEmail} onChange={handleInputChange} />
                            <button className="button" onClick={handleAddEmail}><p>
                                Subscribe
                            </p>
                            </button>

                        </div>
                    </div>
                </div>
                <div className='bas'>
                    <div>
                        <p>English</p>
                        <p>Privacy</p>
                        <p>Legal</p>
                    </div>
                    <p>© 2024 DECODE All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

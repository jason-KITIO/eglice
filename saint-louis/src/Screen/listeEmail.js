import './listeEmail.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Navbar } from './navbar';

import Vector from '../pictures/Vector.svg';
import { FaTrash } from 'react-icons/fa';

function ListeEmail() {
    const [emails, setEmails] = useState([]);
    const [deleteConfirmation, setDeleteConfirmation] = useState(null);

    useEffect(() => {
        fetchEmails();
    }, []);

    const fetchEmails = async () => {
        try {
            const response = await axios.get('http://localhost:8081/emails');
            setEmails(response.data);
        } catch (error) {
            console.error('Error fetching emails:', error);
        }
    };

    const handleDeleteClick = (id) => {
        setDeleteConfirmation(id);
    };

    const handleDeleteConfirm = async () => {
        if (deleteConfirmation) {
            try {
                await axios.delete(`http://localhost:8081/email/${deleteConfirmation}`);
                fetchEmails();
                setDeleteConfirmation(null);
            } catch (error) {
                console.error('Error deleting email:', error);
            }
        }
    };

    const handleDeleteCancel = () => {
        setDeleteConfirmation(null);
    };
    return (
        <div>
            <Navbar />

            <div className='block-nombre'>
                <div className='nombre'>
                    <div className='un'>
                        <p>NOMBRES DE VISITES</p>
                        <span>0</span>
                    </div>
                    <div className='deux'>
                        <p>NOMBRES D'EMAIL</p>{emails.map((email, index) => (
                            <span>{index + 1}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className='block-table'>
                <div className='table'>
                        <div className='table-titre'>
                            <p>Email recents</p>
                            <div>
                                <img src={Vector} />
                                <p>ajouter un events</p>
                            </div>
                        </div>
                        <div className='tableau'>
                            <div className='thead'>
                                <p>Numero</p>
                                <p>Email</p>
                                <p>ACTIONS</p>
                            </div>
                            <div className="tbody">
                                {emails.map((email, index) => (
                                    <div key={email.id} className="ligne">
                                        <p>{index + 1}</p>
                                        <p>{email.email}</p>
                                        <p>
                                            <button onClick={() => handleDeleteClick(email.id)} className="delete-btn">
                                                <FaTrash />
                                            </button>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {deleteConfirmation && (
                    <div className="confirmation-modal">
                        <p>Êtes-vous sûr de vouloir supprimer cet email ?</p>
                        <button onClick={handleDeleteConfirm}>Oui</button>
                        <button onClick={handleDeleteCancel}>Non</button>
                    </div>
                )}
            </div >
            )
}

            export default ListeEmail;
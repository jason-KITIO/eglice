import React, { useState } from 'react';
import axios from 'axios';
import './AddEvent.css';
import Ellipse from '../pictures/Ellipse.svg';

function AddEvent() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8081/event', {
                title,
                date,
                description,
            });

            setTitle('');
            setDate('');
            setDescription('');

            alert('Événement ajouté avec succès !');
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'événement :', error);
            alert('Une erreur est survenue lors de l\'ajout de l\'événement.');
        }
    };

    return (
        <div className="Grand">
            <div className="addEvent">
                <div className="photo">
                    <img src={Ellipse} alt="Ellipse" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <p>Titre</p>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input">
                        <p>DATE</p>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="textarea">
                        <p>Descriptions</p>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="send">
                        <button type="submit">SEND</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddEvent;
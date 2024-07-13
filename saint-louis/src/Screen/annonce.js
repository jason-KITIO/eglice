import './annonce.css'
import Ellipse from '../pictures/Ellipse.svg';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Block({ photo, titre, sousTitre }) {
    return (
        <div className='block'>
            <img src={photo} />
            <p>{titre}</p>
            <span>{sousTitre}</span>
        </div>
    )
}
function Annonce() {
    const [eventsByDate, setEventsByDate] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8081/events')
            .then(response => {
                const groupedEvents = response.data.reduce((acc, event) => {
                    const date = new Date(event.date).toLocaleDateString();
                    if (!acc[date]) {
                        acc[date] = [];
                    }
                    acc[date].push(event);
                    return acc;
                }, {});
                setEventsByDate(groupedEvents);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des événements :', error);
            });
    }, []);
    return (
        <div>
            <div className='annonce-block' id='annonce'>
                {Object.entries(eventsByDate).map(([date, events]) => (
                    <div key={date} className='date-group'>
                        <h2>{date}</h2>
                        <div className='events-container'>
                            {events.map(event => (
                                <Block
                                    key={event.id}
                                    photo={event.image || Ellipse}
                                    titre={event.title}
                                    sousTitre={event.description}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Annonce;
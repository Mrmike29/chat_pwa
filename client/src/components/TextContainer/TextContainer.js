import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <h1>Aplicación Chat En Tiempo Real<span role="img" aria-label="emoji">💬</span></h1>
            <h2>Creada con React, Express, Node y Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
            <h2>Pruébalo! <span role="img" aria-label="emoji">⬅️</span></h2>
            <div className="author">
                <h1>Autor: <span role="img" aria-label="emoji">〽️</span>ike</h1>
            </div>
        </div>
        {
            users
                ? (
                    <div>
                        <h1>Personas Conectadas Actualmente:</h1>
                        <div className="activeContainer">
                            <h2>
                                {users.map(({name}) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="Online Icon" src={onlineIcon}/>
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export default TextContainer;
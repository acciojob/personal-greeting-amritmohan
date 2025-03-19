import React, { useState } from 'react';

const Greeting = () => {
    const [name, setName] = useState('');

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <label htmlFor="nameInput" style={{ display: 'block', marginBottom: '10px' }}>
                Enter your name:
            </label>
            <input
                id="nameInput"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '10px', fontSize: '16px', maxWidth: '300px' }}
            />
            {name && <h1>Hello, {name}!</h1>}
        </div>
    );
};

export default Greeting;

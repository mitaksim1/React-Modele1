// Imports

import React from 'react';
import { render } from 'react-dom';

// Composant

function App() {
    return (
        <div className="app">
            Coucou depuis React
        </div>
    );
}

render(<App />, document.getElementById('root'));

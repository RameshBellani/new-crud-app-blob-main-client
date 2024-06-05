import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import Weather from './components/Weather';
import './App.css';

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const refreshItems = () => {
        setRefresh(!refresh);
    };

    return (
        <div className="app-container">
            <h1>CRUD Application</h1>
            <div className="components-container">
                <div className="component">
                    <ItemForm refreshItems={refreshItems} />
                </div>
                <div className="component">
                    <ItemList key={refresh} />
                </div>
                <div className="component">
                    <Weather />
                </div>
            </div>
        </div>
    );
};

export default App;

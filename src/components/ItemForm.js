import React, { useState } from 'react';
import axios from 'axios';
import './ItemForm.css';

const ItemForm = ({ refreshItems }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [profilePic, setProfilePic] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        if (profilePic) formData.append('profilePic', profilePic);

        try {
            await axios.post('http://localhost:5000/items', formData);
            refreshItems();
            setName('');
            setDescription('');
            setProfilePic(null);
        } catch (error) {
            console.error('Error uploading item:', error);
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            ></textarea>
            <input
                type="file"
                onChange={(e) => setProfilePic(e.target.files[0])}
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;

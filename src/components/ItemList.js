import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemList.css';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);

    const fetchItems = async (page) => {
        const response = await axios.get(`http://localhost:5000/items?page=${page}`);
        setItems(prevItems => [...prevItems, ...response.data]);
    };

    useEffect(() => {
        fetchItems(page);
    }, [page]);

    return (
        <div className="item-list">
            {items.map(item => (
                <div key={item._id} className="item">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    {item.profilePic && <img src={`http://localhost:5000/${item.profilePic}`} alt={item.name} />}
                </div>
            ))}
            <button className="load-more" onClick={() => setPage(page + 1)}>Load More</button>
        </div>
    );
};

export default ItemList;

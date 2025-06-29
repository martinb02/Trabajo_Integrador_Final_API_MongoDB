import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const SearchProducts = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/search`, {
        params: { name: query },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setResults(response.data.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al buscar productos');
      setResults([]);
    }
  };

  return (
    <div  className="search-products">
      <h2>Buscar Productos</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos..."
      />
      <button className='btn-search' onClick={handleSearch}>Buscar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul className='lista'>
        {results.map((product) => (
          <li key={product._id}>
            <span>{product.name}</span>
            <span>${product.price}</span>
            <span className="category-products">{product.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { SearchProducts };

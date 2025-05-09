import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Layout from './components/Layout';
import MovieDetails from './pages/MovieDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('Batman');
  return (
    <FavoritesProvider>
      <Router>
        <Routes>

          <Route path="/" element={<Layout onSearch={setSearchTerm} />}>

            <Route index element={<Home searchTerm={searchTerm} />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="movie/:id" element={<MovieDetails />} />
          </Route>
        </Routes>

      </Router>
    </FavoritesProvider>
  );
}

export default App;

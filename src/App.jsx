import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import RecommendationDetails from './pages/RecommendationDetails';

    function App() {
      return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recommendation/:id" element={<RecommendationDetails />} />
        </Routes>
      );
    }

    export default App;

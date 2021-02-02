import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { GlobalLayout } from 'pages';

function App() {
  return (
    <Router>
      <GlobalLayout />
    </Router>
  );
}

export default App;

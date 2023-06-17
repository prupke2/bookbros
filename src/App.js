import React from 'react';
import './App.scss';
import Home from './Home/Home';
import { Routes, Route } from "react-router-dom";
// import Books from './Books/Books';
// import Parse from 'parse/dist/parse.min.js';
import Parse from 'parse/dist/parse.min.js';
import Books from './Books/Books';

// import { initializeParse } from '@parse/react';

// initializeParse(
//   'https://bookbros.b4a.io/',
//   'j8bZXyteOFiSCWNItcLmRfdimaPOSdZF9vBPKQFv',
//   'YZDR2jPHJKrHmP2UjtT0l6D6jPvo7SsH2qSIJdU8'
// );

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />}>
          {/* <Route path="home" element={<Home />} /> */}

      </Route>
      <Route path="books" element={<Books />} />

    </Routes>

    // <Home />
  );
}

export default App;

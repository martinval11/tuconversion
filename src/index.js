import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nav from './components/Nav';
import ConvertBits from './pages/ConvertBits';
import ConvertBytes from './pages/ConvertBytes';
import ConvertMB from './pages/ConvertMB';
import ConvertGB from './pages/ConvertGB';
import ConvertTB from './pages/ConvertTB';
import ConvertPB from './pages/ConvertPB';
import ConvertEB from './pages/ConvertEB';
import ConvertZB from './pages/ConvertZB';
import Footer from './components/Footer'

import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
    <Nav />
    <Routes>
      <Route>
        <Route path='/' element={<App />} />
        <Route path='/bit' element={<ConvertBits />} />
        <Route path='/byte' element={<ConvertBytes />} />
        <Route path='/megabyte' element={<ConvertMB />} />
        <Route path='/gigabyte' element={<ConvertGB />} />
        <Route path='/terabyte' element={<ConvertTB />} />
        <Route path='/petabyte' element={<ConvertPB />} />
        <Route path='/exabyte' element={<ConvertEB />} />
        <Route path='/zettabyte' element={<ConvertZB />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

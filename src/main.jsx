import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoices from './routes/Invoices';
import Invoice from './Invoice'
import Expenses from './routes/Expenses';
import App from './App';
import './main.css';

let rootElement = document.getElementById('app');
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} >
          <Route path=':id' element={<Invoice />}/>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>,
  rootElement
);

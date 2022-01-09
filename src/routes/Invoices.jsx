import { Link } from 'react-router-dom';
import {getInvoices} from '../data.js';

const Invoices = () => {
  let invoices = getInvoices();
  
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
    </main>
  )
}

export default Invoices;
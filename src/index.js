import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from './components/Table/products/context';
import { CustomerProvider } from './components/Table/customers/context';
import { VendorProvider } from './components/Table/vendor/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ProductProvider>
        <CustomerProvider>
          <VendorProvider>
            <App />
          </VendorProvider>
        </CustomerProvider>
      </ProductProvider>
  </React.StrictMode>
);


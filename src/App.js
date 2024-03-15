// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Home from './pages/Home';
import ServiceRequests from './pages/ServiceRequest';
import Vendors from './pages/Vendors';
import Service from './pages/Service';
import Payments from './pages/Payments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service-requests" element={<ServiceRequests />} />
      <Route path="/vendors" element={<Vendors />} />
      <Route path="/users" element={<Users />} />
      <Route path="/service" element={<Service />} />
      <Route path="/payments" element={<Payments />} />
    </Routes>
  );
}

export default App;

import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { StyledApp } from './constats/styles';
import { Auth } from './pages/Auth/Auth';
import { Customers } from './pages/Customers/Customers';
import { Invoice } from './pages/Invoice/Invoice';
import { Invoices } from './pages/Invoices/Invoices';

export const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken(true);
    localStorage.setItem("token", "truedsd")
    navigate("/")
  }

  const handleLogout = () => {
    setToken(false);
    navigate("/sing-in")
    localStorage.removeItem("token")

  }

  if (!token) {
    return <Auth onAuth={handleLogin} />
  }
  return (
    <StyledApp>
      <Sidebar onLogout={handleLogout} />
      <div className='pages'>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/create-invoice" element={<Invoice />} />
          <Route path="/invoice/:invoiceId" element={<Invoice />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
    </StyledApp>
  );
}


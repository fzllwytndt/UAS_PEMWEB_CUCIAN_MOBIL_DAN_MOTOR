// src/components/Admin/Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

function Sidebar() {
  const menuItems = [
    { text: 'Beranda', path: '/admin/dashboard' },
    { text: 'Data Pendaftaran', path: '/admin/pendaftaran' },
    { text: 'Data Transaksi', path: '/admin/transaksi' },
    { text: 'Data Customer', path: '/admin/customer' },
    { text: 'Data Laporan', path: '/admin/laporan' },
    { text: 'Data User', path: '/admin/user' },
    { text: 'Data Type Mobil', path: '/admin/type-mobil' },
    { text: 'Data Jenis Cucian', path: '/admin/jenis-cucian' },
    { text: 'Kritik & Saran', path: '/admin/feedback' },
  ];

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login'); // Arahkan ke halaman login setelah logout
  };

  return (
    <div style={{ width: '250px', backgroundColor: '#f5f5f5', padding: '20px', height: '100vh' }}>
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem button component={Link} to={item.path}>
              <ListItemText primary={item.text} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Divider />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        style={{ marginTop: '20px', width: '100%' }}
      >
        Logout
      </Button>
    </div>
  );
}

export default Sidebar;

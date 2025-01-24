// src/components/Admin/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import { Typography, Paper } from '@mui/material';

function Dashboard() {
  return (
    <div style={{ display: 'flex', backgroundColor: '#f4f6f8', height: '50vh' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, height: '100%', padding: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Paper 
          elevation={3} 
          style={{ 
            padding: '40px', 
            borderRadius: '80px', 
            maxWidth: '600px', 
            width: '100%', 
            textAlign: 'center', 
            backgroundColor: '#ffffff',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            animation: 'fadeIn 0.5s ease-in-out'
          }}
        >
          <Typography variant="h4" style={{ fontWeight: 'bold', color: '#3f51b5', marginBottom: '20px' }}>
            Dashboard Admin
          </Typography>
          <Typography variant="body1" style={{ color: '#666' }}>
            Selamat datang di halaman Dashboard Admin! Anda dapat mengelola data dan melihat laporan di sini.
          </Typography>
        </Paper>
      </main>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Dashboard;

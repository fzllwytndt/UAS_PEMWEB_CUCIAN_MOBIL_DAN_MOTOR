// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Registration from './components/Registration';
import Feedback from './components/Feedback';
import Login from './components/Login';
import Dashboard from './components/Admin/Dashboard';
import TablePendaftaran from './components/Admin/TablePendaftaran';
import TableTransaksi from './components/Admin/TableTransaksi';
import TableCustomer from './components/Admin/TableCustomer';
import TableLaporan from './components/Admin/TableLaporan';
import TableUser from './components/Admin/TableUser';
import TableTypeMobil from './components/Admin/TableTypeMobil';
import TableJenisCucian from './components/Admin/TableJenisCucian';
import TableFeedback from './components/Admin/TableFeedback';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              FAARSA Car Wash
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">Tentang Kami</Button>
            <Button color="inherit" component={Link} to="/registration">Pendaftaran</Button>
            <Button color="inherit" component={Link} to="/feedback">Kritik & Saran</Button>
            <Button color="inherit" component={Link} to="/admin/dashboard">Admin</Button>
          </Toolbar>
        </AppBar>

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/login" element={<Login />} />

            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/pendaftaran"
              element={
                <ProtectedRoute>
                  <TablePendaftaran />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/transaksi"
              element={
                <ProtectedRoute>
                  <TableTransaksi />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/customer"
              element={
                <ProtectedRoute>
                  <TableCustomer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/laporan"
              element={
                <ProtectedRoute>
                  <TableLaporan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/user"
              element={
                <ProtectedRoute>
                  <TableUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/type-mobil"
              element={
                <ProtectedRoute>
                  <TableTypeMobil />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/jenis-cucian"
              element={
                <ProtectedRoute>
                  <TableJenisCucian />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/feedback"
              element={
                <ProtectedRoute>
                  <TableFeedback />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;

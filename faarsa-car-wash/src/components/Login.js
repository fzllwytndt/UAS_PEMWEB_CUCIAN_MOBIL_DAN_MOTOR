// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';

const LoginContainer = styled(Paper)({
  padding: '40px 30px',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  maxWidth: '400px',
  margin: 'auto',
});

const Title = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
});

const StyledButton = styled(Button)({
  marginTop: '20px',
  padding: '12px 0',
  backgroundColor: '#FF6F00',
  borderRadius: '25px',
  fontWeight: 'bold',
  fontSize: '1rem',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#FF8F00',
  },
});

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (auth.login(username, password)) {
      navigate('/admin/dashboard');
    } else {
      alert('Username atau password salah');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
      <LoginContainer elevation={3}>
        <Title variant="h4">Login Admin</Title>
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
          <StyledButton type="submit" variant="contained" fullWidth>
            Login
          </StyledButton>
        </form>
      </LoginContainer>
    </Container>
  );
}

export default Login;

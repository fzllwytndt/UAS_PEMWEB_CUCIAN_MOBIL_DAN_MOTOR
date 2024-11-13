// src/components/Home.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const HeroContainer = styled(Container)({
  textAlign: 'center',
  padding: '60px 20px',
  backgroundImage: 'url(https://source.unsplash.com/1600x900/?car-wash)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '12px',
  color: '#fff',
  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
});

const Overlay = styled(Box)({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '12px',
  padding: '60px 20px',
});

const StyledButton = styled(Button)({
  marginTop: '30px',
  padding: '10px 30px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#FF6F00',
  borderRadius: '25px',
  '&:hover': {
    backgroundColor: '#FF8F00',
  },
});

function Home() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/Registration'); // Ganti '/pendaftaran' sesuai dengan route pendaftaran Anda
  };

  return (
    <HeroContainer maxWidth="md">
      <Overlay>
        <Typography variant="h3" gutterBottom>Selamat Datang di FAARSA Car Wash</Typography>
        <Typography variant="h5" color="inherit" gutterBottom>
          Layanan cuci mobil andalan Anda dengan kebersihan, kecepatan, dan kepuasan terjamin.
        </Typography>
        <StyledButton variant="contained" onClick={handleRegisterClick}>
          Mulai Sekarang
        </StyledButton>
      </Overlay>
    </HeroContainer>
  );
}

export default Home;

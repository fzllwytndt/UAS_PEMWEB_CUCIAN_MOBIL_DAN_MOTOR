import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const HeroContainer = styled(Container)({
  textAlign: 'center',
  padding: '60px 20px',
  
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '12px',
  color: '#fff',
  boxShadow: '0 4px 20px rgb(0, 0, 0)',
  minHeight: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Overlay = styled(Box)({
  backgroundImage: 'url("/faarsa2.png")',
  //backgroundImage: 'url("/faarsa.png")',
  //backgroundPosition: 'full scren',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  borderRadius: '12px',
  padding: '60px 20px',
  textAlign: 'center',
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
        <Typography variant="h3" gutterBottom style={{ color: 'rgba(255, 255, 255, 0)' }}>
          Selamat Datang di FAARSA Car Wash
        </Typography>
        <Typography variant="h5" color="inherit" gutterBottom style={{ color: 'rgba(255, 255, 255, 0)' }}>
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
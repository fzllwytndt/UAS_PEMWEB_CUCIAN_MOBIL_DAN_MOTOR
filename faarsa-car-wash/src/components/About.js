// src/components/About.js
import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';

const AboutContainer = styled(Container)({
  padding: '60px 20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  textAlign: 'center',
});

const Title = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '20px',
});

const Content = styled(Typography)({
  fontSize: '1.1rem',
  color: '#666',
  lineHeight: '1.7',
  maxWidth: '700px',
  margin: 'auto',
});

function About() {
  return (
    <AboutContainer maxWidth="md">
      <Title variant="h4">Tentang FAARSA</Title>
      <Divider style={{ margin: '20px 0', backgroundColor: '#FF6F00', height: '3px' }} />
      <Content variant="body1">
        Kami menjamin kebersihan, kecepatan, keterjangkauan, dan kepuasan Anda. FAARSA Car Wash
        selalu memberikan layanan terbaik untuk setiap kendaraan pelanggan. Dengan peralatan
        modern dan staf yang profesional, kami siap menjaga kendaraan Anda tetap bersih dan terawat.
      </Content>
    </AboutContainer>
  );
}

export default About;

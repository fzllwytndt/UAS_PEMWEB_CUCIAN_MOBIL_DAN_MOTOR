// src/components/Feedback.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';

const FeedbackContainer = styled(Paper)({
  padding: '40px 30px',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
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

function Feedback() {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    message: '',
    friendliness: '',
    email: '',
    cleanliness: '',
    attentionToDetail: '',
  });

  const handleChange = (e) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Kritik dan saran berhasil dikirim!");
  };

  return (
    <Container maxWidth="sm" style={{ padding: '40px 0' }}>
      <FeedbackContainer elevation={3}>
        <Title variant="h4">Kritik dan Saran</Title>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField label="Nama" name="name" onChange={handleChange} required fullWidth />
            <TextField
              label="Pesan"
              name="message"
              multiline
              rows={4}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField label="Keramahan" name="friendliness" onChange={handleChange} required fullWidth />
            <TextField label="Email" name="email" onChange={handleChange} required fullWidth />
            <TextField label="Kebersihan" name="cleanliness" onChange={handleChange} required fullWidth />
            <TextField label="Ketelitian" name="attentionToDetail" onChange={handleChange} required fullWidth />
            <StyledButton type="submit" variant="contained" fullWidth>
              Kirim Kritik dan Saran
            </StyledButton>
          </Box>
        </form>
      </FeedbackContainer>
    </Container>
  );
}

export default Feedback;

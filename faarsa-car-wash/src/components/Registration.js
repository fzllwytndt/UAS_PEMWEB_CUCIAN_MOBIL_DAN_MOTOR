// src/components/Registration.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem, Box, Paper, Divider } from '@mui/material';
import { styled } from '@mui/system';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const FormContainer = styled(Paper)({
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

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    carType: '',
    washType: '',
    registrationTime: '',
    phoneNumber: '',
    licensePlate: '',
    queueNumber: 1,
    registrationDate: '',
  });
  
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReceiptData(formData); // Simpan data untuk struk
    setShowReceipt(true); // Tampilkan struk
  };

  const handleBack = () => {
    setShowReceipt(false);
  };

  // Fungsi untuk mencetak PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Struk Pendaftaran Cucian Mobil', 14, 22);
    doc.setFontSize(12);
    doc.text(`Nama: ${receiptData.name}`, 14, 32);
    doc.text(`Alamat: ${receiptData.address}`, 14, 40);
    doc.text(`Tipe Mobil: ${receiptData.carType}`, 14, 48);
    doc.text(`Jenis Cucian: ${receiptData.washType}`, 14, 56);
    doc.text(`Waktu Pendaftaran: ${receiptData.registrationTime}`, 14, 64);
    doc.text(`Nomor HP: ${receiptData.phoneNumber}`, 14, 72);
    doc.text(`Nomor Plat: ${receiptData.licensePlate}`, 14, 80);
    doc.text(`Tanggal Pendaftaran: ${receiptData.registrationDate}`, 14, 88);
    doc.text(`Nomor Antrian: ${receiptData.queueNumber}`, 14, 96);
    
    doc.save('Struk_Pendaftaran.pdf'); // Simpan PDF dengan nama file 'Struk_Pendaftaran.pdf'
  };

  return (
    <Container maxWidth="sm" style={{ padding: '40px 0' }}>
      <FormContainer elevation={3}>
        {showReceipt ? (
          <Box>
            <Title variant="h5">Struk Pendaftaran</Title>
            <Divider sx={{ my: 2 }} />
            <Typography><strong>Nama:</strong> {receiptData.name}</Typography>
            <Typography><strong>Alamat:</strong> {receiptData.address}</Typography>
            <Typography><strong>Tipe Mobil:</strong> {receiptData.carType}</Typography>
            <Typography><strong>Jenis Cucian:</strong> {receiptData.washType}</Typography>
            <Typography><strong>Waktu Pendaftaran:</strong> {receiptData.registrationTime}</Typography>
            <Typography><strong>Nomor HP:</strong> {receiptData.phoneNumber}</Typography>
            <Typography><strong>Nomor Plat:</strong> {receiptData.licensePlate}</Typography>
            <Typography><strong>Tanggal Pendaftaran:</strong> {receiptData.registrationDate}</Typography>
            <Typography><strong>Nomor Antrian:</strong> {receiptData.queueNumber}</Typography>
            <StyledButton onClick={generatePDF} variant="contained" fullWidth>
              Cetak PDF
            </StyledButton>
            <StyledButton onClick={handleBack} variant="contained" fullWidth>
              Kembali
            </StyledButton>
          </Box>
        ) : (
          <>
            <Title variant="h4">Daftar Cucian Mobil</Title>
            <form onSubmit={handleSubmit}>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField label="Nama" name="name" onChange={handleChange} required fullWidth />
                <TextField label="Alamat" name="address" onChange={handleChange} required fullWidth />
                <TextField label="Tipe Mobil" name="carType" onChange={handleChange} required fullWidth />
                <TextField
                  label="Jenis Cucian"
                  name="washType"
                  select
                  onChange={handleChange}
                  required
                  fullWidth
                >
                  <MenuItem value="Body Only">Hanya Body</MenuItem>
                  <MenuItem value="Full">Menyeluruh</MenuItem>
                </TextField>
                <TextField
                  label="Waktu Pendaftaran"
                  name="registrationTime"
                  type="datetime-local"
                  InputLabelProps={{ shrink: true }}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField label="Nomor HP" name="phoneNumber" onChange={handleChange} required fullWidth />
                <TextField label="Nomor Plat" name="licensePlate" onChange={handleChange} required fullWidth />
                <TextField
                  label="Tanggal Pendaftaran"
                  name="registrationDate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <StyledButton type="submit" variant="contained" fullWidth>
                  Kirim Pendaftaran
                </StyledButton>
              </Box>
            </form>
          </>
        )}
      </FormContainer>
    </Container>
  );
}

export default Registration;

import React, { useState } from 'react';
import { 
  Container, TextField, Button, Typography, MenuItem, Box, Paper, Divider, Card, CardContent 
} from '@mui/material';
import { styled } from '@mui/system';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import PrintIcon from '@mui/icons-material/Print';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

// Fungsi untuk mencetak PDF
const generatePDF = (receiptData) => {
  const doc = new jsPDF();
  
  doc.setFillColor(255, 111, 0); // Header warna oranye
  doc.rect(0, 0, doc.internal.pageSize.width, 30, 'F');
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('Struk Pendaftaran Cucian Mobil', 14, 20);

  const receiptDetails = [
    ['Nama', receiptData.name],
    ['Alamat', receiptData.address],
    ['Tipe Mobil', receiptData.carType],
    ['Jenis Cucian', receiptData.washType],
    ['Waktu Pendaftaran', receiptData.registrationTime],
    ['Nomor HP', receiptData.phoneNumber],
    ['Nomor Plat', receiptData.licensePlate],
    ['Tanggal Pendaftaran', receiptData.registrationDate],
    ['Nomor Antrian', receiptData.queueNumber],
  ];

  doc.autoTable({
    startY: 40,
    head: [['Label', 'Informasi']],
    body: receiptDetails,
    theme: 'grid',
    headStyles: { fillColor: [255, 111, 0], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
  });

  doc.text('Terima kasih telah menggunakan layanan kami.', 14, doc.internal.pageSize.height - 10);
  doc.save('Struk_Pendaftaran_Modern.pdf');
};

const ModernReceipt = ({ receiptData, handleBack }) => (
  <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold', mb: 2 }}>
        Struk Pendaftaran
      </Typography>
      <Divider sx={{ my: 2 }} />

      {[
        ['Nama', receiptData.name],
        ['Alamat', receiptData.address],
        ['Tipe Mobil', receiptData.carType],
        ['Jenis Cucian', receiptData.washType],
        ['Waktu Pendaftaran', receiptData.registrationTime],
        ['Nomor HP', receiptData.phoneNumber],
        ['Nomor Plat', receiptData.licensePlate],
        ['Tanggal Pendaftaran', receiptData.registrationDate],
        ['Nomor Antrian', receiptData.queueNumber],
      ].map(([label, value]) => (
        <Typography key={label} sx={{ mb: 1 }}>
          <strong>{label}:</strong> {value}
        </Typography>
      ))}

      <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
        <Button
          onClick={() => generatePDF(receiptData)}
          variant="contained"
          color="primary"
          startIcon={<PrintIcon />}
          fullWidth
        >
          Cetak PDF
        </Button>
        <Button
          onClick={handleBack}
          variant="outlined"
          color="secondary"
          startIcon={<ArrowBackIcon />}
          fullWidth
        >
          Kembali
        </Button>
      </Box>
    </CardContent>
  </Card>
);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReceipt(true);
  };

  return (
    <Container maxWidth="sm" style={{ padding: '40px 0' }}>
      <FormContainer elevation={3}>
        {showReceipt ? (
          <ModernReceipt receiptData={formData} handleBack={() => setShowReceipt(false)} />
        ) : (
          <>
            <Title>Daftar Cucian Mobil</Title>
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

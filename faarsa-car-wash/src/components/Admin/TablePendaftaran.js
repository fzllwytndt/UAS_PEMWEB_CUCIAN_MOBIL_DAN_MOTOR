import React, { useState } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
} from '@mui/material';
import jsPDF from 'jspdf';

// Contoh data dummy
const initialData = [
  { id: 1, noAntrian: 'A001', jamDaftar: '09:00', nama: 'John Doe', nomorPlat: 'B1234XYZ', jenisCucian: 'Cuci Mobil', totalBiaya: 50000, status: 'Pendaftaran' },
  { id: 2, noAntrian: 'A002', jamDaftar: '09:30', nama: 'Jane Doe', nomorPlat: 'B5678XYZ', jenisCucian: 'Cuci Motor', totalBiaya: 30000, status: 'Pendaftaran' },
];

function TablePendaftaran() {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [openPayment, setOpenPayment] = useState(false);
  const [paymentData, setPaymentData] = useState(null);

  const handleEditClick = (rowData) => {
    setSelectedData(rowData);
    setOpen(true);
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) => (item.id === selectedData.id ? selectedData : item))
    );
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentClick = (rowData) => {
    setPaymentData(rowData);
    setOpenPayment(true);
  };

  const handlePaymentSave = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === paymentData.id ? { ...item, status: 'Sudah Dibayar' } : item
      )
    );
    setOpenPayment(false);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Struk Pembayaran Cucian Mobil", 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Nomor Antrian: ${paymentData.noAntrian}`, 20, 40);
    doc.text(`Nama: ${paymentData.nama}`, 20, 50);
    doc.text(`Nomor Plat: ${paymentData.nomorPlat}`, 20, 60);
    doc.text(`Jenis Cucian: ${paymentData.jenisCucian}`, 20, 70);
    doc.text(`Total Biaya: Rp ${paymentData.totalBiaya.toLocaleString()}`, 20, 80);
    doc.text(`Status: ${paymentData.status}`, 20, 90);
    doc.text(`Jam Daftar: ${paymentData.jamDaftar}`, 20, 100);

    doc.save(`Struk_${paymentData.noAntrian}.pdf`);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>Data Tabel Pendaftaran</Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Nomor Antrian</TableCell>
              <TableCell>Jam Daftar</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Nomor Plat</TableCell>
              <TableCell>Jenis Cucian</TableCell>
              <TableCell>Total Biaya</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.noAntrian}</TableCell>
                <TableCell>{row.jamDaftar}</TableCell>
                <TableCell>{row.nama}</TableCell>
                <TableCell>{row.nomorPlat}</TableCell>
                <TableCell>{row.jenisCucian}</TableCell>
                <TableCell>Rp {row.totalBiaya.toLocaleString()}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => handleEditClick(row)} sx={{ mr: 1 }}>
                    Ubah Status
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handlePaymentClick(row)}
                    disabled={row.status === 'Sudah Dibayar'}
                  >
                    Bayar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedData && (
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Ubah Status Pendaftaran</DialogTitle>
          <DialogContent>
            <FormControl fullWidth margin="dense" sx={{ mt: 1 }}>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                name="status"
                value={selectedData.status}
                onChange={handleChange}
              >
                <MenuItem value="Pendaftaran">Pendaftaran</MenuItem>
                <MenuItem value="Dalam Pengerjaan">Dalam Pengerjaan</MenuItem>
                <MenuItem value="Selesai">Selesai</MenuItem>
                <MenuItem value="Batal">Batal</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="secondary">Batal</Button>
            <Button onClick={handleSave} color="primary">Simpan</Button>
          </DialogActions>
        </Dialog>
      )}

      {paymentData && (
        <Dialog open={openPayment} onClose={() => setOpenPayment(false)}>
          <DialogTitle>Konfirmasi Pembayaran</DialogTitle>
          <DialogContent>
            <Typography>
              Apakah Anda yakin ingin melakukan pembayaran sebesar{' '}
              <strong>Rp {paymentData.totalBiaya.toLocaleString()}</strong> untuk
              pelanggan <strong>{paymentData.nama}</strong>?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenPayment(false)} color="secondary">Batal</Button>
            <Button onClick={handlePaymentSave} color="primary">Bayar</Button>
            <Button onClick={generatePDF} color="primary" variant="outlined">Cetak Struk</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}

export default TablePendaftaran;
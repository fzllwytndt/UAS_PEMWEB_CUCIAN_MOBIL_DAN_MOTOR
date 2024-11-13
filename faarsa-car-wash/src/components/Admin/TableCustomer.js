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
  TextField,
  Box,
} from '@mui/material';

// Data dummy awal
const initialData = [
  { id: 1, nama: 'John Doe', noHp: '081234567890', alamat: 'Jl. Merdeka No. 1', nomorPlat: 'B1234XYZ', tipeMobil: 'SUV' },
  { id: 2, nama: 'Jane Smith', noHp: '081234567891', alamat: 'Jl. Sudirman No. 2', nomorPlat: 'B5678XYZ', tipeMobil: 'Sedan' },
];

function TableCustomer() {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // Fungsi untuk membuka dialog edit
  const handleEditClick = (rowData) => {
    setSelectedData(rowData);
    setOpen(true);
  };

  // Fungsi untuk menyimpan perubahan data
  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) => (item.id === selectedData.id ? selectedData : item))
    );
    setOpen(false);
  };

  // Fungsi untuk menangani perubahan input dalam form edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>Data Tabel Customer</Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>No. HP</TableCell>
              <TableCell>Alamat</TableCell>
              <TableCell>Nomor Plat</TableCell>
              <TableCell>Tipe Mobil</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.nama}</TableCell>
                <TableCell>{row.noHp}</TableCell>
                <TableCell>{row.alamat}</TableCell>
                <TableCell>{row.nomorPlat}</TableCell>
                <TableCell>{row.tipeMobil}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditClick(row)}
                    sx={{ color: '#fff', boxShadow: 1 }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog Edit */}
      {selectedData && (
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Edit Data Customer</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Nama"
              name="nama"
              value={selectedData.nama}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="No. HP"
              name="noHp"
              value={selectedData.noHp}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="Alamat"
              name="alamat"
              value={selectedData.alamat}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="Nomor Plat"
              name="nomorPlat"
              value={selectedData.nomorPlat}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="Tipe Mobil"
              name="tipeMobil"
              value={selectedData.tipeMobil}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="secondary">
              Batal
            </Button>
            <Button onClick={handleSave} color="primary">
              Simpan
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}

export default TableCustomer;

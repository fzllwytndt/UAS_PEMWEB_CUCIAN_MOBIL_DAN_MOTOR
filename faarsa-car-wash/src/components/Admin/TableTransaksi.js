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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';

// Data dummy awal
const initialData = [
  { id: 1, noAntrian: 'A001', noNota: 'N001', nama: 'John Doe', total: 50000, status: 'Belum Lunas', penanggungJawab: 'Ahmad' },
  { id: 2, noAntrian: 'A002', noNota: 'N002', nama: 'Jane Doe', total: 30000, status: 'Lunas', penanggungJawab: 'Budi' },
];

function TableTransaksi() {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // Fungsi untuk membuka dialog edit status
  const handleEditClick = (rowData) => {
    setSelectedData(rowData);
    setOpen(true);
  };

  // Fungsi untuk menyimpan perubahan status
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
      <Typography variant="h5" gutterBottom>Data Tabel Transaksi</Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Nomor Antrian</TableCell>
              <TableCell>No. Nota</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Total (Rp)</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Penanggung Jawab Cuci</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.noAntrian}</TableCell>
                <TableCell>{row.noNota}</TableCell>
                <TableCell>{row.nama}</TableCell>
                <TableCell>Rp {row.total.toLocaleString()}</TableCell>
                <TableCell>
                  <Box
                    component="span"
                    sx={{
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      color: row.status === 'Lunas' ? 'green' : 'red',
                      bgcolor: row.status === 'Lunas' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                      fontWeight: 'bold',
                    }}
                  >
                    {row.status}
                  </Box>
                </TableCell>
                <TableCell>{row.penanggungJawab}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditClick(row)}
                    sx={{ mr: 1 }}
                  >
                    Ubah Status
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog Edit Status */}
      {selectedData && (
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Ubah Status Pembayaran</DialogTitle>
          <DialogContent>
            <FormControl fullWidth margin="dense" sx={{ mt: 1 }}>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                name="status"
                value={selectedData.status}
                onChange={handleChange}
              >
                <MenuItem value="Lunas">Lunas</MenuItem>
                <MenuItem value="Belum Lunas">Belum Lunas</MenuItem>
              </Select>
            </FormControl>
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

export default TableTransaksi;

import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

function TabelTipeMobil() {
  // State untuk data tipe mobil
  const [tipeMobil, setTipeMobil] = useState([
    { id: 1, tipe: 'Sports Car' },
    { id: 2, tipe: 'Pickup' },
    { id: 3, tipe: 'Off Road' },
    { id: 4, tipe: 'Sedan' },
    { id: 5, tipe: 'MPV' },
  ]);

  // State untuk dialog tambah/edit data
  const [open, setOpen] = useState(false);
  const [newTipe, setNewTipe] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fungsi membuka dialog
  const handleOpen = (tipe = null) => {
    if (tipe) {
      setNewTipe(tipe.tipe);
      setIsEditing(true);
      setEditId(tipe.id);
    } else {
      setNewTipe('');
      setIsEditing(false);
      setEditId(null);
    }
    setOpen(true);
  };

  // Fungsi menutup dialog
  const handleClose = () => {
    setOpen(false);
    setNewTipe('');
    setIsEditing(false);
    setEditId(null);
  };

  // Fungsi menambah atau menyimpan perubahan data
  const handleSave = () => {
    if (newTipe.trim()) {
      if (isEditing) {
        // Edit data
        setTipeMobil(
          tipeMobil.map((item) =>
            item.id === editId ? { ...item, tipe: newTipe } : item
          )
        );
      } else {
        // Tambah data baru
        setTipeMobil([
          ...tipeMobil,
          { id: tipeMobil.length + 1, tipe: newTipe },
        ]);
      }
      handleClose();
    }
  };

  // Fungsi menghapus data
  const handleDelete = (id) => {
    setTipeMobil(tipeMobil.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Data Tipe Mobil</Typography>
      <Button
        variant="contained"
        color="success"
        style={{ marginBottom: '10px' }}
        onClick={() => handleOpen()}
      >
        + Tambah Data
      </Button>

      {/* Dialog untuk Tambah/Edit Data */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? "Edit Tipe Mobil" : "Tambah Tipe Mobil"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isEditing ? "Edit tipe mobil yang sudah ada." : "Masukkan tipe mobil baru yang ingin Anda tambahkan."}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Tipe Mobil"
            fullWidth
            variant="outlined"
            value={newTipe}
            onChange={(e) => setNewTipe(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Batal</Button>
          <Button onClick={handleSave} color="primary">
            {isEditing ? "Simpan Perubahan" : "Tambah"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Tabel Data Tipe Mobil */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Tipe Mobil</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tipeMobil.map((tipe, index) => (
              <TableRow key={tipe.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{tipe.tipe}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="warning"
                    style={{ marginRight: '5px' }}
                    onClick={() => handleOpen(tipe)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(tipe.id)}
                  >
                    Hapus
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TabelTipeMobil;

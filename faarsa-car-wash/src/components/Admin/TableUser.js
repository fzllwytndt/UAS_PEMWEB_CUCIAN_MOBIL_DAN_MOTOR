import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function TabelDataPengguna() {
  // State untuk data pengguna
  const [pengguna, setPengguna] = useState([
    { id: 1, nama: 'Rianto', username: 'rianto', alamat: 'Pati', noHp: '081222112223', status: 'Aktif' },
    { id: 2, nama: 'Administrator', username: 'admin', alamat: 'Jl. Bangau Sakti', noHp: '08111122333', status: 'Aktif' }
  ]);

  // State untuk dialog form
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, nama: '', username: '', alamat: '', noHp: '', status: 'Aktif' });
  const [isEditing, setIsEditing] = useState(false);

  // Fungsi untuk membuka form modal
  const handleClickOpen = (user = null) => {
    if (user) {
      setFormData(user);
      setIsEditing(true);
    } else {
      setFormData({ id: null, nama: '', username: '', alamat: '', noHp: '', status: 'Aktif' });
      setIsEditing(false);
    }
    setOpen(true);
  };

  // Fungsi untuk menutup form modal
  const handleClose = () => {
    setOpen(false);
  };

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk menambah atau mengedit data
  const handleSave = () => {
    if (isEditing) {
      // Update data yang ada
      setPengguna(pengguna.map(user => (user.id === formData.id ? formData : user)));
    } else {
      // Tambah data baru
      setPengguna([...pengguna, { ...formData, id: pengguna.length + 1 }]);
    }
    handleClose();
  };

  // Fungsi untuk menghapus data
  const handleDelete = (id) => {
    setPengguna(pengguna.filter(user => user.id !== id));
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Data Pengguna</Typography>
      <Button variant="contained" color="success" style={{ marginBottom: '10px' }} onClick={() => handleClickOpen()}>+ Tambah Data</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Alamat</TableCell>
              <TableCell>No. HP</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pengguna.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.nama}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.alamat}</TableCell>
                <TableCell>{user.noHp}</TableCell>
                <TableCell><Button variant="contained" color="success">{user.status}</Button></TableCell>
                <TableCell>
                  <Button variant="contained" color="warning" style={{ marginRight: '5px' }} onClick={() => handleClickOpen(user)}>Edit</Button>
                  <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>Hapus</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog untuk Tambah/Edit Data */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? "Edit Data Pengguna" : "Tambah Data Pengguna"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nama"
            name="nama"
            fullWidth
            value={formData.nama}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Username"
            name="username"
            fullWidth
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Alamat"
            name="alamat"
            fullWidth
            value={formData.alamat}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="No. HP"
            name="noHp"
            fullWidth
            value={formData.noHp}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Batal</Button>
          <Button onClick={handleSave} color="success">{isEditing ? "Simpan Perubahan" : "Tambah Data"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TabelDataPengguna;

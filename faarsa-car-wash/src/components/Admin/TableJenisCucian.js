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

function TabelJenisCucian() {
  const [jenisCucian, setJenisCucian] = useState([
    { id: 1, jenis: 'Cucian Menyeluruh', biaya: 45000 },
    { id: 2, jenis: 'Cucian Body', biaya: 35000 },
  ]);

  const [open, setOpen] = useState(false);
  const [newJenis, setNewJenis] = useState('');
  const [newBiaya, setNewBiaya] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleOpen = (cuci = null) => {
    if (cuci) {
      setNewJenis(cuci.jenis);
      setNewBiaya(cuci.biaya.toString());
      setIsEditing(true);
      setEditId(cuci.id);
    } else {
      setNewJenis('');
      setNewBiaya('');
      setIsEditing(false);
      setEditId(null);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewJenis('');
    setNewBiaya('');
    setIsEditing(false);
    setEditId(null);
  };

  const handleSave = () => {
    if (newJenis.trim() && newBiaya.trim()) {
      if (isEditing) {
        // Edit existing data
        setJenisCucian(
          jenisCucian.map((item) =>
            item.id === editId ? { ...item, jenis: newJenis, biaya: parseInt(newBiaya) } : item
          )
        );
      } else {
        // Add new data
        setJenisCucian([
          ...jenisCucian,
          { id: jenisCucian.length + 1, jenis: newJenis, biaya: parseInt(newBiaya) },
        ]);
      }
      handleClose();
    }
  };

  const handleDelete = (id) => {
    setJenisCucian(jenisCucian.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Data Jenis Cucian</Typography>
      <Button variant="contained" color="success" style={{ marginBottom: '10px' }} onClick={() => handleOpen()}>
        + Tambah Data
      </Button>

      {/* Dialog for Add/Edit Data */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? "Edit Jenis Cucian" : "Tambah Jenis Cucian"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isEditing ? "Edit jenis cucian dan biaya yang sudah ada." : "Masukkan jenis cucian dan biaya yang ingin Anda tambahkan."}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Jenis Cucian"
            fullWidth
            variant="outlined"
            value={newJenis}
            onChange={(e) => setNewJenis(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Biaya"
            type="number"
            fullWidth
            variant="outlined"
            value={newBiaya}
            onChange={(e) => setNewBiaya(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Batal
          </Button>
          <Button onClick={handleSave} color="primary">
            {isEditing ? "Simpan Perubahan" : "Tambah"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Table displaying data */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Jenis Cucian</TableCell>
              <TableCell>Biaya</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jenisCucian.map((cuci, index) => (
              <TableRow key={cuci.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{cuci.jenis}</TableCell>
                <TableCell>{cuci.biaya}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="warning"
                    style={{ marginRight: '5px' }}
                    onClick={() => handleOpen(cuci)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(cuci.id)}
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

export default TabelJenisCucian;

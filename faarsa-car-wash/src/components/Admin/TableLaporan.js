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
  TextField,
  MenuItem,
  IconButton,
  Stack,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import PrintIcon from '@mui/icons-material/Print';
import SearchIcon from '@mui/icons-material/Search';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Data Dummy
const initialData = [
  { id: 1, noAntrian: '2022-09-05/10', jamDaftar: '14:30:00', nama: 'Yulia', noPlat: 'K 456 YU', jenisCucian: 'Cucian Menyeluruh', totalBiaya: 45000, status: 'Lunas' },
  { id: 2, noAntrian: '2022-09-05/9', jamDaftar: '13:55:00', nama: 'Usman', noPlat: 'K 123 TT', jenisCucian: 'Cucian Menyeluruh', totalBiaya: 45000, status: 'Lunas' },
  { id: 3, noAntrian: '2022-09-05/12', jamDaftar: '14:10:00', nama: 'Rian', noPlat: 'K 876 FA', jenisCucian: 'Cucian Body', totalBiaya: 35000, status: 'Lunas' },
  // Tambahkan data lainnya sesuai kebutuhan
];

function TablePendaftaran() {
  const [data] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [startDate, setStartDate] = useState(dayjs().subtract(1, 'year'));
  const [endDate, setEndDate] = useState(dayjs());

  // Filter data berdasarkan tanggal
  const handleFilterData = () => {
    const filtered = data.filter((item) => {
      const itemDate = dayjs(item.noAntrian.split('/')[0]); // ambil tanggal dari noAntrian
      return itemDate.isAfter(startDate) && itemDate.isBefore(endDate);
    });
    setFilteredData(filtered);
  };

  // Cetak laporan PDF
  const handlePrintPDF = () => {
    const doc = new jsPDF();
    doc.text("Laporan Data Pendaftaran", 14, 10);

    doc.autoTable({
      startY: 20,
      head: [['No.', 'No. Antrian', 'Jam Daftar', 'Nama', 'No. Plat', 'Jenis Cucian', 'Total Biaya', 'Status']],
      body: filteredData.map((row, index) => [
        index + 1,
        row.noAntrian,
        row.jamDaftar,
        row.nama,
        row.noPlat,
        row.jenisCucian,
        row.totalBiaya,
        row.status,
      ]),
    });

    doc.save('Laporan_Data_Pendaftaran.pdf');
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Data Pendaftaran</Typography>

      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Mulai Tanggal"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="Sampai Tanggal"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button variant="contained" color="warning" startIcon={<SearchIcon />} onClick={handleFilterData}>
          Lihat Data
        </Button>
        <Button variant="contained" color="success" startIcon={<PrintIcon />} onClick={handlePrintPDF}>
          Cetak Laporan PDF
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>No. Antrian</TableCell>
              <TableCell>Jam Daftar</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>No. Plat</TableCell>
              <TableCell>Jenis Cucian</TableCell>
              <TableCell>Total Biaya</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.noAntrian}</TableCell>
                <TableCell>{row.jamDaftar}</TableCell>
                <TableCell>{row.nama}</TableCell>
                <TableCell>{row.noPlat}</TableCell>
                <TableCell>{row.jenisCucian}</TableCell>
                <TableCell>{row.totalBiaya}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary">
                    {row.status === 'Lunas' ? 'LUNAS' : 'BAYAR'}
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

export default TablePendaftaran;

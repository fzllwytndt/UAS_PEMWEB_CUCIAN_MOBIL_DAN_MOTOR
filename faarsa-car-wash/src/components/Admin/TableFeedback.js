import React from 'react';
import { Table } from 'react-bootstrap';

const TabelFeedback = () => {
  const feedbackData = [
    { no: 1, nama: 'erdiman', email: 'erdiman@gmail.com', pesan: 'sangat puas', pointKebersihan: 90, pointKeramahan: 90, pointKetelitian: 90 },
    { no: 2, nama: 'Adit', email: 'aditwijaya@gmail.com', pesan: 'Pelayanannya sangat baik dan memuaskan', pointKebersihan: 90, pointKeramahan: 80, pointKetelitian: 90 },
  ];

  return (
    <div className="container mt-4">
      <h5>Data Kritik dan Saran</h5>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Pesan</th>
              <th>Point Kebersihan</th>
              <th>Point Keramahan</th>
              <th>Point Ketelitian</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((item, index) => (
              <tr key={index}>
                <td>{item.no}</td>
                <td>{item.nama}</td>
                <td>{item.email}</td>
                <td>{item.pesan}</td>
                <td>{item.pointKebersihan}</td>
                <td>{item.pointKeramahan}</td>
                <td>{item.pointKetelitian}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-between">
          <span>Showing {feedbackData.length} entries</span>
          <nav aria-label="Page navigation example">
            <ul className="pagination pagination-sm">
              <li className="page-item">
                <a className="page-link" href="#!">Previous</a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#!">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TabelFeedback;

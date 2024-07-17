import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Dialog, DialogContent, DialogContentText, DialogActions, Button, Avatar, Stack, Typography, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const columns = (handleInfoClick, handleDeleteClick) => [
  { field: 'patientId', headerName: 'Patient ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 70 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'department', headerName: 'Department', width: 150 },
  { field: 'date', headerName: 'Date', width: 120 },
  { field: 'time', headerName: 'Time', width: 100 },
  {
    field: 'doctor',
    headerName: 'Doctor',
    width: 200,
    renderCell: (params) => (
      <Stack direction="row" spacing={1} alignItems="center" gap={1}>
        <Avatar alt={params.row.doctor} src={params.row.doctorAvatar} />
        {params.row.doctor}
      </Stack>
    ),
  },
  {
    field: 'icons',
    headerName: 'Icons',
    width: 100,
    renderCell: (params) => (
      <>
        <IconButton aria-label="info" onClick={() => handleInfoClick(params.row)}>
          <InfoIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => handleDeleteClick(params.row.id)}>
          <DeleteOutlineIcon />
        </IconButton>
      </>
    ),
  },
];

const initialRows = [
  { id: 1, patientId: 'P001', name: 'John Doe', age: 28, gender: 'Male', department: 'Cardiology', date: '2024-07-16', time: '10:00 AM', doctor: 'Dr. Smith', doctorAvatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 2, patientId: 'P002', name: 'Jane Roe', age: 34, gender: 'Female', department: 'Neurology', date: '2024-07-16', time: '11:00 AM', doctor: 'Dr. Johnson', doctorAvatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 3, patientId: 'P003', name: 'Michael Smith', age: 45, gender: 'Male', department: 'Oncology', date: '2024-07-16', time: '12:00 PM', doctor: 'Dr. Brown', doctorAvatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: 4, patientId: 'P004', name: 'Emily Davis', age: 29, gender: 'Female', department: 'Dermatology', date: '2024-07-16', time: '01:00 PM', doctor: 'Dr. Garcia', doctorAvatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: 5, patientId: 'P005', name: 'Chris Johnson', age: 52, gender: 'Male', department: 'Orthopedics', date: '2024-07-16', time: '02:00 PM', doctor: 'Dr. Martinez', doctorAvatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: 6, patientId: 'P006', name: 'Patricia Lee', age: 38, gender: 'Female', department: 'Pediatrics', date: '2024-07-16', time: '03:00 PM', doctor: 'Dr. Hernandez', doctorAvatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { id: 7, patientId: 'P007', name: 'Robert Brown', age: 60, gender: 'Male', department: 'Geriatrics', date: '2024-07-16', time: '04:00 PM', doctor: 'Dr. Clark', doctorAvatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
  { id: 8, patientId: 'P008', name: 'Linda White', age: 47, gender: 'Female', department: 'Ophthalmology', date: '2024-07-16', time: '05:00 PM', doctor: 'Dr. Lewis', doctorAvatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { id: 9, patientId: 'P009', name: 'David Harris', age: 33, gender: 'Male', department: 'Urology', date: '2024-07-16', time: '06:00 PM', doctor: 'Dr. Walker', doctorAvatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
  { id: 10, patientId: 'P010', name: 'Barbara King', age: 41, gender: 'Female', department: 'Gynecology', date: '2024-07-16', time: '07:00 PM', doctor: 'Dr. Hall', doctorAvatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
  { id: 11, patientId: 'P011', name: 'Daniel Lee', age: 50, gender: 'Male', department: 'Gastroenterology', date: '2024-07-16', time: '08:00 PM', doctor: 'Dr. Allen', doctorAvatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { id: 12, patientId: 'P012', name: 'Susan Young', age: 27, gender: 'Female', department: 'ENT', date: '2024-07-16', time: '09:00 PM', doctor: 'Dr. Wright', doctorAvatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
];

export default function DataTable() {
  const [rows, setRows] = React.useState(initialRows);
  const [filteredRows, setFilteredRows] = React.useState(initialRows);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    setFilteredRows(rows); // Reset filtered rows on rows change
  }, [rows]);

  React.useEffect(() => {
    handleSearch(); // Filter results whenever filter or searchTerm changes
  }, [filter, searchTerm]);

  const handleInfoClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleDeleteClick = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setSearchTerm(''); // Reset search term on filter change
  };

  const handleSearch = () => {
    let filtered = rows;
    if (filter && searchTerm) {
      filtered = rows.filter((row) => {
        switch (filter) {
          case 'Name':
            return row.name.toLowerCase().includes(searchTerm.toLowerCase());
          case 'Age':
            return row.age.toString().includes(searchTerm);
          case 'Gender':
            return row.gender.toLowerCase().includes(searchTerm.toLowerCase());
          case 'Department':
            return row.department.toLowerCase().includes(searchTerm.toLowerCase());
          case 'Date':
            return row.date.includes(searchTerm);
          case 'Doctor':
            return row.doctor.toLowerCase().includes(searchTerm.toLowerCase());
          default:
            return true;
        }
      });
    }
    setFilteredRows(filtered);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ height: 675, width: '100%', padding: '0 2%', paddingTop: '3%' }}>
      <Stack direction="row" spacing={2} alignItems="center" marginBottom={2}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="filter-label">Filter By</InputLabel>
          <Select
            labelId="filter-label"
            value={filter}
            onChange={handleFilterChange}
            label="Filter By"
          >
            <MenuItem value="Name">Name</MenuItem>
            <MenuItem value="Age">Age</MenuItem>
            <MenuItem value="Gender">Gender</MenuItem>
            <MenuItem value="Department">Department</MenuItem>
            <MenuItem value="Date">Date</MenuItem>
            <MenuItem value="Doctor">Doctor</MenuItem>
          </Select>
        </FormControl>
        {filter && (
          <>
            <TextField
              variant="outlined"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Search
            </Button>
          </>
        )}
      </Stack>
      <DataGrid
        rows={filteredRows}
        columns={columns(handleInfoClick, handleDeleteClick)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { width: '400px', height: '420px' } }}>
        <h1 style={{ textAlign: 'center', padding: '2%', fontWeight: '500' }}>Patient Information</h1>
        {selectedRow && (
          <DialogContent>
            <Stack direction="row" spacing={3} alignItems="center">
              <Avatar alt={selectedRow.name} src={selectedRow.doctorAvatar} sx={{ width: 56, height: 56 }} />
              <Typography variant="h5">{selectedRow.name}</Typography>
            </Stack>
            <br />
            <DialogContentText>
              <strong>Patient ID:</strong> {selectedRow.patientId}<br />
              <strong>Age:</strong> {selectedRow.age}<br />
              <strong>Gender:</strong> {selectedRow.gender}<br />
              <strong>Department:</strong> {selectedRow.department}<br />
              <strong>Date:</strong> {selectedRow.date}<br />
              <strong>Time:</strong> {selectedRow.time}<br />
              <strong>Doctor:</strong> {selectedRow.doctor}<br />
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

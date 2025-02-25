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
    headerName: 'View',
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
  { id: 13, patientId: 'P013', name: 'Jessica Adams', age: 31, gender: 'Female', department: 'Cardiology', date: '2024-07-17', time: '10:30 AM', doctor: 'Dr. Smith', doctorAvatar: 'https://randomuser.me/api/portraits/women/13.jpg' },
  { id: 14, patientId: 'P014', name: 'James Wilson', age: 46, gender: 'Male', department: 'Neurology', date: '2024-07-17', time: '11:30 AM', doctor: 'Dr. Johnson', doctorAvatar: 'https://randomuser.me/api/portraits/men/14.jpg' },
  { id: 15, patientId: 'P015', name: 'Olivia Martinez', age: 37, gender: 'Female', department: 'Oncology', date: '2024-07-17', time: '12:30 PM', doctor: 'Dr. Brown', doctorAvatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
  { id: 16, patientId: 'P016', name: 'William Anderson', age: 54, gender: 'Male', department: 'Dermatology', date: '2024-07-17', time: '01:30 PM', doctor: 'Dr. Garcia', doctorAvatar: 'https://randomuser.me/api/portraits/men/16.jpg' },
  { id: 17, patientId: 'P017', name: 'Sophia Thomas', age: 29, gender: 'Female', department: 'Orthopedics', date: '2024-07-17', time: '02:30 PM', doctor: 'Dr. Martinez', doctorAvatar: 'https://randomuser.me/api/portraits/women/17.jpg' },
  { id: 18, patientId: 'P018', name: 'David White', age: 63, gender: 'Male', department: 'Pediatrics', date: '2024-07-17', time: '03:30 PM', doctor: 'Dr. Hernandez', doctorAvatar: 'https://randomuser.me/api/portraits/men/18.jpg' },
  { id: 19, patientId: 'P019', name: 'Emily Jones', age: 40, gender: 'Female', department: 'Geriatrics', date: '2024-07-17', time: '04:30 PM', doctor: 'Dr. Clark', doctorAvatar: 'https://randomuser.me/api/portraits/women/19.jpg' },
  { id: 20, patientId: 'P020', name: 'Michael Lee', age: 34, gender: 'Male', department: 'Ophthalmology', date: '2024-07-17', time: '05:30 PM', doctor: 'Dr. Lewis', doctorAvatar: 'https://randomuser.me/api/portraits/men/20.jpg' },
  { id: 21, patientId: 'P021', name: 'Charlotte Hall', age: 45, gender: 'Female', department: 'Urology', date: '2024-07-17', time: '06:30 PM', doctor: 'Dr. Walker', doctorAvatar: 'https://randomuser.me/api/portraits/women/21.jpg' },
  { id: 22, patientId: 'P022', name: 'Daniel King', age: 39, gender: 'Male', department: 'Gynecology', date: '2024-07-17', time: '07:30 PM', doctor: 'Dr. Hall', doctorAvatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: 23, patientId: 'P023', name: 'Ella Young', age: 25, gender: 'Female', department: 'Gastroenterology', date: '2024-07-17', time: '08:30 PM', doctor: 'Dr. Allen', doctorAvatar: 'https://randomuser.me/api/portraits/women/23.jpg' },
  { id: 24, patientId: 'P024', name: 'Christopher Harris', age: 47, gender: 'Male', department: 'ENT', date: '2024-07-17', time: '09:30 PM', doctor: 'Dr. Wright', doctorAvatar: 'https://randomuser.me/api/portraits/men/24.jpg' },
  { id: 25, patientId: 'P025', name: 'Mia Scott', age: 32, gender: 'Female', department: 'Cardiology', date: '2024-07-18', time: '10:00 AM', doctor: 'Dr. Smith', doctorAvatar: 'https://randomuser.me/api/portraits/women/25.jpg' },
  { id: 26, patientId: 'P026', name: 'Joshua Clark', age: 50, gender: 'Male', department: 'Neurology', date: '2024-07-18', time: '11:00 AM', doctor: 'Dr. Johnson', doctorAvatar: 'https://randomuser.me/api/portraits/men/26.jpg' },
  { id: 27, patientId: 'P027', name: 'Ava Rodriguez', age: 27, gender: 'Female', department: 'Oncology', date: '2024-07-18', time: '12:00 PM', doctor: 'Dr. Brown', doctorAvatar: 'https://randomuser.me/api/portraits/women/27.jpg' },
  { id: 28, patientId: 'P028', name: 'Benjamin Lewis', age: 42, gender: 'Male', department: 'Dermatology', date: '2024-07-18', time: '01:00 PM', doctor: 'Dr. Garcia', doctorAvatar: 'https://randomuser.me/api/portraits/men/28.jpg' },
  { id: 29, patientId: 'P029', name: 'Sophia Hall', age: 36, gender: 'Female', department: 'Orthopedics', date: '2024-07-18', time: '02:00 PM', doctor: 'Dr. Martinez', doctorAvatar: 'https://randomuser.me/api/portraits/women/29.jpg' },
  { id: 30, patientId: 'P030', name: 'Alexander Turner', age: 53, gender: 'Male', department: 'Pediatrics', date: '2024-07-18', time: '03:00 PM', doctor: 'Dr. Hernandez', doctorAvatar: 'https://randomuser.me/api/portraits/men/30.jpg' },
  { id: 31, patientId: 'P031', name: 'Isabella Lee', age: 41, gender: 'Female', department: 'Geriatrics', date: '2024-07-18', time: '04:00 PM', doctor: 'Dr. Clark', doctorAvatar: 'https://randomuser.me/api/portraits/women/31.jpg' },
  { id: 32, patientId: 'P032', name: 'Matthew Wright', age: 48, gender: 'Male', department: 'Ophthalmology', date: '2024-07-18', time: '05:00 PM', doctor: 'Dr. Lewis', doctorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 33, patientId: 'P033', name: 'Liam Harris', age: 30, gender: 'Male', department: 'Urology', date: '2024-07-18', time: '06:00 PM', doctor: 'Dr. Walker', doctorAvatar: 'https://randomuser.me/api/portraits/men/33.jpg' },
  { id: 34, patientId: 'P034', name: 'Ella King', age: 28, gender: 'Female', department: 'Gynecology', date: '2024-07-18', time: '07:00 PM', doctor: 'Dr. Hall', doctorAvatar: 'https://randomuser.me/api/portraits/women/34.jpg' },
  { id: 35, patientId: 'P035', name: 'William Young', age: 57, gender: 'Male', department: 'Gastroenterology', date: '2024-07-18', time: '08:00 PM', doctor: 'Dr. Allen', doctorAvatar: 'https://randomuser.me/api/portraits/men/35.jpg' },
  { id: 36, patientId: 'P036', name: 'Zoe Smith', age: 33, gender: 'Female', department: 'ENT', date: '2024-07-18', time: '09:00 PM', doctor: 'Dr. Wright', doctorAvatar: 'https://randomuser.me/api/portraits/women/36.jpg' },
  { id: 37, patientId: 'P037', name: 'Ethan Johnson', age: 49, gender: 'Male', department: 'Cardiology', date: '2024-07-19', time: '10:00 AM', doctor: 'Dr. Smith', doctorAvatar: 'https://randomuser.me/api/portraits/men/37.jpg' },
  { id: 38, patientId: 'P038', name: 'Mia Davis', age: 35, gender: 'Female', department: 'Neurology', date: '2024-07-19', time: '11:00 AM', doctor: 'Dr. Johnson', doctorAvatar: 'https://randomuser.me/api/portraits/women/38.jpg' },
  { id: 39, patientId: 'P039', name: 'Aiden Garcia', age: 39, gender: 'Male', department: 'Oncology', date: '2024-07-19', time: '12:00 PM', doctor: 'Dr. Brown', doctorAvatar: 'https://randomuser.me/api/portraits/men/39.jpg' },
  { id: 40, patientId: 'P040', name: 'Lily Martinez', age: 44, gender: 'Female', department: 'Dermatology', date: '2024-07-19', time: '01:00 PM', doctor: 'Dr. Garcia', doctorAvatar: 'https://randomuser.me/api/portraits/women/40.jpg' },
  { id: 41, patientId: 'P041', name: 'Jacob Hernandez', age: 29, gender: 'Male', department: 'Orthopedics', date: '2024-07-19', time: '02:00 PM', doctor: 'Dr. Martinez', doctorAvatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { id: 42, patientId: 'P042', name: 'Grace Clark', age: 55, gender: 'Female', department: 'Pediatrics', date: '2024-07-19', time: '03:00 PM', doctor: 'Dr. Hernandez', doctorAvatar: 'https://randomuser.me/api/portraits/women/42.jpg' },
  { id: 43, patientId: 'P043', name: 'Liam Lee', age: 60, gender: 'Male', department: 'Geriatrics', date: '2024-07-19', time: '04:00 PM', doctor: 'Dr. Clark', doctorAvatar: 'https://randomuser.me/api/portraits/men/43.jpg' },
  { id: 44, patientId: 'P044', name: 'Olivia Walker', age: 26, gender: 'Female', department: 'Ophthalmology', date: '2024-07-19', time: '05:00 PM', doctor: 'Dr. Lewis', doctorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 45, patientId: 'P045', name: 'Avery Hall', age: 31, gender: 'Female', department: 'Urology', date: '2024-07-19', time: '06:00 PM', doctor: 'Dr. Walker', doctorAvatar: 'https://randomuser.me/api/portraits/women/45.jpg' },
  { id: 46, patientId: 'P046', name: 'Isaac King', age: 48, gender: 'Male', department: 'Gynecology', date: '2024-07-19', time: '07:00 PM', doctor: 'Dr. Hall', doctorAvatar: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { id: 47, patientId: 'P047', name: 'Chloe Young', age: 35, gender: 'Female', department: 'Gastroenterology', date: '2024-07-19', time: '08:00 PM', doctor: 'Dr. Allen', doctorAvatar: 'https://randomuser.me/api/portraits/women/47.jpg' },
  { id: 48, patientId: 'P048', name: 'Noah Smith', age: 55, gender: 'Male', department: 'ENT', date: '2024-07-19', time: '09:00 PM', doctor: 'Dr. Wright', doctorAvatar: 'https://randomuser.me/api/portraits/men/48.jpg' },
  { id: 49, patientId: 'P049', name: 'Mason Johnson', age: 38, gender: 'Male', department: 'Cardiology', date: '2024-07-20', time: '10:00 AM', doctor: 'Dr. Smith', doctorAvatar: 'https://randomuser.me/api/portraits/men/49.jpg' },
  { id: 50, patientId: 'P050', name: 'Abigail Brown', age: 41, gender: 'Female', department: 'Neurology', date: '2024-07-20', time: '11:00 AM', doctor: 'Dr. Johnson', doctorAvatar: 'https://randomuser.me/api/portraits/women/50.jpg' },
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

// export EnhancedTable;

import React from 'react';
import { Box, TextField, IconButton, InputAdornment, Button, Dialog, DialogTitle } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css"
import { useState } from 'react';

const Navbar = () => {

  const [value, setValue] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    description: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value)
  };

  const handleChangeSearch = (e) => {
    setValue(e.target.value);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleClose();
  };

    return (
      <>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'space-between',
            backgroundColor: '#1DB954',
            padding: '10px',
          }}
        >
          <div className='header-logo'><img src="./header-logo.png" alt="Logo" style={{ height: '40px', marginLeft: '20px' }} /></div>
          <TextField
            variant="outlined"
            value={value}
            id="searchInput"
            onChange={handleChangeSearch}
            placeholder="Search a album of your choice"
            sx={{
                padding: "0px",
                display: "flex",
                width:"40%",    
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              backgroundColor: '#fff',
              borderRadius: '5px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end"  onClick={onSubmit}>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button
          id='feedbackbutton'
            variant="contained"
            onClick={handleClickOpen}
            sx={{
              marginRight: '20px',
              backgroundColor: '#000',
              color: ' #34c94b',
              fontFamily: 'Poppins, sans-serif',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
          
            Give Feedback
          </button>
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Feedback</DialogTitle>
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ display: 'flex', flexDirection: 'column', p: 3 ,width:'500px'}}
          >
            <TextField
              label="Full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Email ID"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              multiline
              rows={2}
              variant="outlined"
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="success" 
              sx={{ mt: 3 }}
            >
              Submit Feedback
            </Button>
          </Box>
        </Dialog>
      </>
      );
    };


export default Navbar;
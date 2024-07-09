import React, { useState } from 'react';
import { Container, Box, Modal } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ReferralForm from './components/ReferralForm';
import ReferSection from './components/ReferSection';
import SVGConnector from './components/SVGConnector';
import Footer from './components/Footer';

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Navbar />
      <HeroSection handleOpen={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: 1, boxShadow: 24, p: 4 }}>
          <ReferralForm handleClose={handleClose} />
        </Box>
      </Modal>
      <ReferSection/>
      <Footer/>
    </Container>
  );
};

export default App;

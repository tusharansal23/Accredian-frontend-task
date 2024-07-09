import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import herobg from '../images/hero-bg.jpg';

const HeroContainer = styled(Box)({
  backgroundImage: `url(${herobg})`,
  backgroundSize: 'contain', // Ensures the image fits within the container
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat', // Prevents the image from repeating
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '20px',
  color: '#000',
  textAlign: 'left',
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
}));

const HighlightedTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#1976d2', // Assuming primary color is blue
}));

const InlineBox = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
});

const HeroSection = ({ handleOpen }) => {
  return (
    <HeroContainer>
      <StyledTypography variant="h2" component="div">
        Let's Learn
      </StyledTypography>
      <StyledTypography variant="h2" component="div" gutterBottom>
        & Earn
      </StyledTypography>
      <StyledTypography variant="h5" component="div">
        Get A chance to win
      </StyledTypography>
      <InlineBox>
        <StyledTypography variant="h5" component="div">
          up-to
        </StyledTypography>
        <HighlightedTypography variant='h5' component="div" sx={{ ml: 1 }}>
          Rs. 15,000
        </HighlightedTypography>
      </InlineBox>
      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mt: 2 }}>
        Refer Now
      </Button>
    </HeroContainer>
  );
};

export default HeroSection;

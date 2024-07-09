import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { AccountBalance, AttachMoney, People } from '@mui/icons-material'; // Import icons
import SVGConnector from './SVGConnector';

const CirclesContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '50px',
  position: 'relative',
});

const CircleCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: '50%',
  width: '200px',
  height: '200px',
  textAlign: 'center',
  position: 'relative', // Needed for the absolute positioned elements
  zIndex: 1, // Ensures circles are on top
}));

const CircleIcon = styled(Box)({
  fontSize: '48px',
  marginBottom: '10px',
});

const CircleTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '10px',
});

const CircleText = styled(Typography)({
  fontSize: '16px',
});

const ReferSection = () => {
  return (
    <CirclesContainer>
      <CircleCard elevation={3}>
        <CircleIcon>
          <AccountBalance fontSize="inherit" />
        </CircleIcon>
        <CircleTitle variant="h5">Submit Referral</CircleTitle>
        <CircleText>Submit Referral easily via our website's referral section</CircleText>
      </CircleCard>
      <CircleCard elevation={3}>
        <CircleIcon>
          <AttachMoney fontSize="inherit" />
        </CircleIcon>
        <CircleTitle variant="h5">Earn</CircleTitle>
        <CircleText>Earn rewards once your referral joins</CircleText>
      </CircleCard>
      <CircleCard elevation={3}>
        <CircleIcon>
          <People fontSize="inherit" />
        </CircleIcon>
        <CircleTitle variant="h5">Bonus</CircleTitle>
        <CircleText>Both parties receive a bonus 30 days after program enrollment</CircleText>
      </CircleCard>
      <SVGConnector />
    </CirclesContainer>
  );
};

export default ReferSection;

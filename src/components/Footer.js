import React from 'react';
import { Box, Grid, Typography, Link, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'grey',
  color: '#fff',
  padding: theme.spacing(4),
  marginTop: theme.spacing(8),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  display: 'block',
  marginBottom: theme.spacing(1),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const DividerLine = styled(Box)(({ theme }) => ({
  borderBottom: '1px solid #fff',
  margin: theme.spacing(2, 0),
  width: '100%',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={4}>
          <SectionTitle variant="h6">Your Company</SectionTitle>
        </Grid>
        <Grid item xs={12} sm={4} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary">Book 1-to-1 Call</Button>
        </Grid>
      </Grid>
      <DividerLine />
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sm={4}>
          <Typography variant="body1" component="div" gutterBottom>Programs</Typography>
          {[
            'Data Science & AI', 'Product Management', 'Business Analytics', 'Digital Transformation',
            'Business Management', 'Project Management', 'Strategy & Leadership', 'Senior Management',
            'Fintech', 'AWS'
          ].map((program) => (
            <FooterLink key={program} href={`#${program.toLowerCase().replace(/ /g, '-')}`}>
              {program}
            </FooterLink>
          ))}
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <SectionTitle variant="h6">Contact Us</SectionTitle>
          <Typography variant="body1" component="div" gutterBottom>Follow Us</Typography>
          <Box>
            <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </IconButton>
            <IconButton href="mailto:info@yourcompany.com">
              <EmailIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ paddingLeft: '100px' }}>
          <SectionTitle variant="h6">More Info</SectionTitle>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#services">Career</FooterLink>
          <FooterLink href="#contact">Blog</FooterLink>
          <FooterLink href="#about">Admission Policy</FooterLink>
          <FooterLink href="#services">Referral Policy</FooterLink>
          <FooterLink href="#contact">Privacy Policy</FooterLink>
          <FooterLink href="#services">Terms of Service</FooterLink>
          <FooterLink href="#contact">Master FAQs</FooterLink>
        </Grid>
      </Grid>
      <Typography variant="body2" component="div" mt={4} textAlign="center">
        © 2024 Your Company Name. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;

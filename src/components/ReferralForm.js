import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';

const ReferralForm = ({ handleClose }) => {
  const formik = useFormik({
    initialValues: {
      referrerName: '',
      referrerEmail: '',
      refereeName: '',
      refereeEmail: '',
      course: '',
    },
    validationSchema: Yup.object({
      referrerName: Yup.string().required('Required'),
      referrerEmail: Yup.string().email('Invalid email address').required('Required'),
      refereeName: Yup.string().required('Required'),
      refereeEmail: Yup.string().email('Invalid email address').required('Required'),
      course: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:4000/api/referrals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        console.log(data);
        handleClose();
      } catch (error) {
        console.error('Error submitting referral:', error);
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Referral Form
      </Typography>
      <TextField
        fullWidth
        id="referrerName"
        name="referrerName"
        label="Your Name"
        value={formik.values.referrerName}
        onChange={formik.handleChange}
        error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
        helperText={formik.touched.referrerName && formik.errors.referrerName}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        id="referrerEmail"
        name="referrerEmail"
        label="Your Email"
        value={formik.values.referrerEmail}
        onChange={formik.handleChange}
        error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
        helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        id="refereeName"
        name="refereeName"
        label="Friend's Name"
        value={formik.values.refereeName}
        onChange={formik.handleChange}
        error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
        helperText={formik.touched.refereeName && formik.errors.refereeName}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        id="refereeEmail"
        name="refereeEmail"
        label="Friend's Email"
        value={formik.values.refereeEmail}
        onChange={formik.handleChange}
        error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
        helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        id="course"
        name="course"
        label="Course"
        value={formik.values.course}
        onChange={formik.handleChange}
        error={formik.touched.course && Boolean(formik.errors.course)}
        helperText={formik.touched.course && formik.errors.course}
        sx={{ mb: 2 }}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default ReferralForm;

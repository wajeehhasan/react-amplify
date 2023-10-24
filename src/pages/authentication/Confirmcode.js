// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
// import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';
import React from 'react';
import EmailConfirmation from './auth-forms/EmailConfirmation';

// ================================|| LOGIN ||================================ //

const Confirmcode = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Confirmation</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          {/* <AuthLogin /> */}
          <EmailConfirmation></EmailConfirmation>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Confirmcode;

// material-ui
import { Button, Grid, InputLabel, OutlinedInput, Stack, Box, CircularProgress } from '@mui/material';

import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// third party

import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

//Notification and Auth for code confirm
import { Auth } from 'aws-amplify';
import { notification } from 'antd';
// ============================||AWS Cognito Email Confirm ||============================ //

const EmailConfirmation = () => {
  const user = useSelector((state) => state.userauth);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('codeconfirm');
  //submit handle logic

  // async function resendCode(values) {
  //   try {
  //     Auth.ResendConfirmationCode(user.username).then(() => {
  //       notification.success({
  //         message: 'Code Send Successfully.',
  //         description: values.username + ', Kindly check your email inbox/spam',
  //         placement: 'topRight',
  //         duration: 1.5
  //       });
  //     });
  //   } catch (err) {
  //     notification.success({
  //       message: 'Code Sending Failed',
  //       description: err.message,
  //       placement: 'topRight',
  //       duration: 3.5
  //     });
  //   }
  // }
  async function handleSubmit(values, { setErrors, setStatus, setSubmitting }) {
    try {
      setCurrentView('codeconfirming');
      await delay(3000);
      Auth.confirmSignUp(user.username, values.verificationCode)
        .then(() => {
          notification.success({
            message: 'Success, Account confirmed',
            description: 'Redirecting...',
            placement: 'topRight',
            duration: 1.5
          });
          setCurrentView('codeconfirmed');
          navigate('/login');
        })
        .catch((err) => {
          notification.error({
            message: 'Unsuccessfull!!',
            description: err.message,
            placement: 'topRight',
            duration: 3.5
          });
          setCurrentView('codeconfirm');
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } catch (err) {
      setCurrentView('codeconfirm');
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
    //remove two catches
  }

  // const navigate = useNavigate();
  if (currentView == 'codeconfirm') {
    return (
      <>
        <Formik
          initialValues={{
            verificationCode: '',
            submit: null
          }}
          onSubmit={handleSubmit}
        >
          {({ handleBlur, handleChange, handleSubmit, isSubmitting, values }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="email-login">Enter Verification Code</InputLabel>
                    <OutlinedInput
                      id="verification-code"
                      type="verificationCode"
                      value={values.verificationCode}
                      name="verificationCode"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Verification Code From Email"
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Submit
                    </Button>
                  </AnimateButton>
                </Grid>
                {/* <Grid item xs={12}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      onClick={resendCode}
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      variant="contained"
                      color="primary"
                    >
                      ResendCode
                    </Button>
                  </AnimateButton>
                </Grid> */}
              </Grid>
            </form>
          )}
        </Formik>
      </>
    );
  } else if (currentView == 'codeconfirmed') {
    return (
      <Box sx={{ display: 'flex', mx: '40%' }}>
        <CircularProgress />
      </Box>
    );
  } else if (currentView == 'codeconfirming') {
    return (
      <Box sx={{ display: 'flex', mx: '40%' }}>
        <CircularProgress />
      </Box>
    );
  }
};

export default EmailConfirmation;

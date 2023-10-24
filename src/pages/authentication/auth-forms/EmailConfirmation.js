// material-ui
import { Button, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';

import { React } from 'react';
import { useSelector } from 'react-redux';
// third party

import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

//Notification and Auth for code confirm
import { Auth } from 'aws-amplify';
import { notification } from 'antd';
// ============================|| FIREBASE - LOGIN ||============================ //

const EmailConfirmation = () => {
  const user = useSelector((state) => state.userauth);
  //submit handle logic
  async function handleSubmit(values, { setErrors, setStatus, setSubmitting }) {
    try {
      Auth.confirmSignUp(user.username, values.verificationCode)
        .then(() => {
          notification.success({
            message: 'Success!!',
            description: 'Account confirmed successfully!',
            placement: 'topRight',
            duration: 3.5
          });
        })
        .catch((err) => {
          notification.error({
            message: 'Unsuccessfull!!',
            description: err.message,
            placement: 'topRight',
            duration: 1.5
          });
        });
    } catch (err) {
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  }

  // const navigate = useNavigate();

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
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default EmailConfirmation;

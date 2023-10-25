// material-ui
import {
  Button,
  // Checkbox,
  // Divider,
  // FormControlLabel,
  FormHelperText,
  Grid,
  // Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  CircularProgress,
  Stack,
  Box
  // Typography
} from '@mui/material';

import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
// import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setToken, setUsername } from 'store/reducers/authentication';

import { Auth } from 'aws-amplify';
import { notification } from 'antd';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLoginAwsCognito = () => {
  const [loginState, setLoginState] = useState("normal");
  const [showPassword, setShowPassword] = useState(false);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //submit handle logic
  async function handleSubmit(values, { setErrors, setStatus, setSubmitting }) {
    try {
      setLoginState("logging");
      await delay(2000);
      Auth.signIn(values.email, values.password)
        .then((data) => {
          notification.success({
            message: 'Successful',
            description: 'Signed-In',
            placement: 'bottomRight',
            duration: 3.5
          });
          dispatch(setToken(data.signInUserSession.accessToken.jwtToken));
          navigate('/dashboard/default');

        })
        .catch((err) => {
          notification.error({
            message: 'SignIn Unsuccessful',
            description: err.message,
            placement: 'bottomRight',
            duration: 3.5
          });
        });
      let info = await Auth.currentSession();
      let userName = info.idToken.payload['cognito:username'];
      dispatch(setUsername(userName));
      console.log(userName, info);
    } catch (err) {
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  }
  async function guestLogin() {
    try {
      setLoginState("logging");
      await delay(2000);
      Auth.signIn("tawoyo2857@weirby.com", "Abc123!klllll$$333")
        .then((data) => {
          notification.success({
            message: 'Successful',
            description: 'Signed-In',
            placement: 'bottomRight',
            duration: 3.5
          });
          dispatch(setToken(data.signInUserSession.accessToken.jwtToken));
          navigate('/dashboard/default');
        })
        .catch((err) => {
          notification.error({
            message: 'SignIn Unsuccessful',
            description: err.message,
            placement: 'bottomRight',
            duration: 3.5
          });
        });
      let info = await Auth.currentAuthenticatedUser();
      let userName = info.idToken.payload['cognito:username'];
      dispatch(setUsername(userName));
      console.log(userName, info);
    } catch (err) {
      console.log(err.message);
    }
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (loginState == "logging") {
    return (
      <>
        <Box sx={{ display: 'relative', textAlign: "center" }}>
          <CircularProgress />
        </Box>
      </>

    );
  }
  else if (loginState == "normal") {
    return (
      <>
        <Formik
          initialValues={{
            email: '',
            password: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string().max(255).required('Password is required')
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="email-login">Email Address</InputLabel>
                    <OutlinedInput
                      id="email-login"
                      type="email"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText error id="standard-weight-helper-text-email-login">
                        {errors.email}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="password-login">Password</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.password && errors.password)}
                      id="-password-login"
                      type={showPassword ? 'text' : 'password'}
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                          >
                            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="Enter password"
                    />
                    {touched.password && errors.password && (
                      <FormHelperText error id="standard-weight-helper-text-password-login">
                        {errors.password}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                {/* forgot password needs to be implemented */}
                {/* <Grid item xs={12} sx={{ mt: -1 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          onChange={(event) => setChecked(event.target.checked)}
                          name="checked"
                          color="primary"
                          size="small"
                        />
                      }
                      label={<Typography variant="h6">Keep me sign in</Typography>}
                    />
                    <Link variant="h6" component={RouterLink} to="" color="text.primary">
                      Forgot Password?
                    </Link>
                  </Stack>
                </Grid> */}
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <AnimateButton>
                    <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                      Login
                    </Button>
                  </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                  <AnimateButton>
                    <Button disableElevation disabled={isSubmitting} onClick={guestLogin} fullWidth size="large" variant="contained" color="primary">
                      GuestLogin
                    </Button>
                  </AnimateButton>
                </Grid>
                {/* <Grid item xs={12}>
                  <Divider>
                    <Typography variant="caption"> Login with</Typography>
                  </Divider>
                </Grid> */}
                {/* login with facebook, google,  */}
                {/* <Grid item xs={12}>
                  <FirebaseSocial />
                </Grid> */}
              </Grid>
            </form>
          )}
        </Formik>
      </>
    );
  }

};

export default AuthLoginAwsCognito;

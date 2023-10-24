import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  CircularProgress
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

//importing aws Cognito & antd for notification
import { Auth } from 'aws-amplify';
import { notification } from 'antd';

//authstate variable
import { setUsername } from 'store/reducers/authentication';
// navigation
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//icons

// icons

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegisterAwsCognito = () => {
  const [level, setLevel] = useState();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [currentView, setCurrentView] = useState('registerform');
  const user = useSelector((state) => state.userauth);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };
  async function handleSubmit(values, { setErrors, setStatus, setSubmitting }) {
    try {
      // this adds user into cognito pool with status unconfirmed
      setCurrentView('registering');
      Auth.signUp({
        username: values.firstname + values.lastname,
        password: values.password,
        attributes: {
          email: values.email
        }
      });
      notification.success({
        message: 'Success!!',
        description: 'Account Created, Redirecting you to Confirmation...',
        placement: 'topRight',
        duration: 3.5
      });
      dispatch(setUsername(values.firstname + values.lastname));

      await delay(3000);
      // setCurrentView('registered');

      await delay(3000);
      navigate('/confirmcode');
      // console.log('username: ' + user.username + ', value.username: ' + values.firstname + values.lastname);
      // dispatch(setUsername(values.firstname + values.lastname));
      // console.log('username: ' + user.username);
      // navigate('/confirmcode');
      //this is for confirmations.
      // Auth.confirmSignUp(this.state.username, confirmationCode);
    } catch (err) {
      notification.error({
        message: 'Unsuccessfull!!',
        description: err.message,
        placement: 'topRight',
        duration: 3.5
      });
      await delay(3000);
      setCurrentView('registerform');
      console.error(err);
      setStatus({ success: false });
      setErrors({ submit: err.message });
      this.setState({ loading: true });
      setSubmitting(false);
    }
  }

  useEffect(() => {
    changePassword('');
  }, []);
  if (currentView == 'registering') {
    return (
      <Box sx={{ display: 'flex', mx: '40%' }}>
        <CircularProgress />
      </Box>
    );
  } else if (currentView == 'registered') {
    return <Box sx={{ display: 'flex', mx: '40%' }}>{user.username}, Registered!!</Box>;
  } else if (currentView == 'registerform') {
    return (
      <>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            company: '',
            password: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            firstname: Yup.string().max(255).required('First Name is required'),
            lastname: Yup.string().max(255).required('Last Name is required'),
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string().max(255).required('Password is required')
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="firstname-signup">First Name*</InputLabel>
                    <OutlinedInput
                      id="firstname-login"
                      type="firstname"
                      value={values.firstname}
                      name="firstname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="John"
                      fullWidth
                      error={Boolean(touched.firstname && errors.firstname)}
                    />
                    {touched.firstname && errors.firstname && (
                      <FormHelperText error id="helper-text-firstname-signup">
                        {errors.firstname}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.lastname && errors.lastname)}
                      id="lastname-signup"
                      type="lastname"
                      value={values.lastname}
                      name="lastname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Doe"
                      inputProps={{}}
                    />
                    {touched.lastname && errors.lastname && (
                      <FormHelperText error id="helper-text-lastname-signup">
                        {errors.lastname}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="company-signup">Company</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.company && errors.company)}
                      id="company-signup"
                      value={values.company}
                      name="company"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Demo Inc."
                      inputProps={{}}
                    />
                    {touched.company && errors.company && (
                      <FormHelperText error id="helper-text-company-signup">
                        {errors.company}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                      id="email-login"
                      type="email"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="demo@company.com"
                      inputProps={{}}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText error id="helper-text-email-signup">
                        {errors.email}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="password-signup">Password</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.password && errors.password)}
                      id="password-signup"
                      type={showPassword ? 'text' : 'password'}
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        changePassword(e.target.value);
                      }}
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
                      placeholder="******"
                      inputProps={{}}
                    />
                    {touched.password && errors.password && (
                      <FormHelperText error id="helper-text-password-signup">
                        {errors.password}
                      </FormHelperText>
                    )}
                  </Stack>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" fontSize="0.75rem">
                          {level?.label}
                        </Typography>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    By Signing up, you agree to our &nbsp;
                    <Link variant="subtitle2" component={RouterLink} to="#">
                      Terms of Service
                    </Link>
                    &nbsp; and &nbsp;
                    <Link variant="subtitle2" component={RouterLink} to="#">
                      Privacy Policy
                    </Link>
                  </Typography>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
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
                      Create Account
                    </Button>
                  </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                  <Divider>
                    <Typography variant="caption">Sign up with</Typography>
                  </Divider>
                </Grid>
                <Grid item xs={12}>
                  <FirebaseSocial />
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </>
    );
  }
};

export default AuthRegisterAwsCognito;

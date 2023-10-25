import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Grid,
  IconButton,
  Paper,
  Popper,
  Stack,
  Tab,
  Tabs,
  Typography,
  Button,
  CircularProgress
  // CircularProgress
} from '@mui/material';
////////////////////dialog signout////////////////////
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
////////////////////////////////////////////////////
// project import
import MainCard from 'components/MainCard';
import Transitions from 'components/@extended/Transitions';
import ProfileTab from './ProfileTab';
import SettingTab from './SettingTab';
import { notification } from 'antd';
//authentication logout
import { useNavigate } from 'react-router-dom';
// import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
// import { useSelector } from 'react-redux';
//////

// assets
import avatar1 from 'assets/images/users/avatar-1.png';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `profile-tab-${index}`,
    'aria-controls': `profile-tabpanel-${index}`
  };
}

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  // const user = useSelector((state) => state.userauth);
  const navigate = useNavigate();


  /////username/////////////////////////////////////
  const [username, setUsername] = useState(null);
  useEffect(() => {
    // Call your async method here
    fetchUsername()
      .then(result => {
        setUsername(result);
      })
      .catch(error => {
        console.error("Error fetching username: ", error);
      });
  }, []);
  const fetchUsername = async () => {
    const info = await Auth.currentAuthenticatedUser();
    const result = await info.username;
    return result;
  };
  /////username/////////////////////////////////////
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  //=======================================================Confirm Email dialog variables START===========================
  const [SignOutDialogState, setSignOutDialogState] = useState(false);
  const OpenSignOutDialog = () => {
    setSignOutDialogState(true);
  };
  const CloseSignOutDialog = (event, reason) => {
    if (reason !== 'backdropClick') {
      setConfirmEmailDialog(false);
    }
  };

  //=========================================================Confirm Email dialog variable END ===============================
  const theme = useTheme();
  async function handleLogout() {
    // signOut();
    OpenSignOutDialog();
    await delay(2000);
    Auth.signOut()
      .then(() => {
        notification.success({
          message: 'Successful',
          description: 'Signed-Out',
          placement: 'bottomRight',
          duration: 3.5
        });
      })
      .catch((err) => {
        notification.error({
          message: 'SignIn Unsuccessful',
          description: err.message,
          placement: 'bottomRight',
          duration: 3.5
        });
      });
    navigate('/login');
    // navigate(0);
  }
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const iconBackColorOpen = 'grey.300';
  return (
    <>
      <Dialog sx={{ fontFamily: ['monospace'], color: 'success.main' }} open={SignOutDialogState} onClose={CloseSignOutDialog}>
        <DialogTitle sx={{ fontFamily: ['monospace'] }}>Signing Out</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontFamily: ['monospace'] }}>Please Wait..</DialogContentText>
        </DialogContent>
        <Box sx={{ display: 'relative', textAlign: "center", width: '324px' }}>
          <CircularProgress />
        </Box>
        <DialogActions>
          <Button onClick={CloseSignOutDialog}></Button>
          <Button onClick={CloseSignOutDialog}></Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ flexShrink: 0, ml: 0.75 }}>
        <ButtonBase
          sx={{
            p: 0.25,
            bgcolor: open ? iconBackColorOpen : 'transparent',
            borderRadius: 1,
            '&:hover': { bgcolor: 'secondary.lighter' }
          }}
          aria-label="open profile"
          ref={anchorRef}
          aria-controls={open ? 'profile-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
            <Avatar alt="profile user" src={avatar1} sx={{ width: 32, height: 32 }} />
            <Typography variant="subtitle1">{username}</Typography>
          </Stack>
        </ButtonBase>
        <Popper
          placement="bottom-end"
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 9]
                }
              }
            ]
          }}
        >
          {({ TransitionProps }) => (
            <Transitions type="fade" in={open} {...TransitionProps}>
              {open && (
                <Paper
                  sx={{
                    boxShadow: theme.customShadows.z1,
                    width: 290,
                    minWidth: 240,
                    maxWidth: 290,
                    [theme.breakpoints.down('md')]: {
                      maxWidth: 250
                    }
                  }}
                >
                  <ClickAwayListener onClickAway={handleClose}>
                    <MainCard elevation={0} border={false} content={false}>
                      <CardContent sx={{ px: 2.5, pt: 3 }}>
                        <Grid container justifyContent="space-between" alignItems="center">
                          <Grid item>
                            <Stack direction="row" spacing={1.25} alignItems="center">
                              <Avatar alt="profile user" src={avatar1} sx={{ width: 32, height: 32 }} />
                              <Stack>
                                <Typography variant="h6">{username}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                  UI/UX Designer
                                </Typography>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid item>
                            <IconButton size="large" color="secondary" onClick={handleLogout}>
                              <LogoutOutlined />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </CardContent>
                      {open && (
                        <>
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="profile tabs">
                              <Tab
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  textTransform: 'capitalize'
                                }}
                                icon={<UserOutlined style={{ marginBottom: 0, marginRight: '10px' }} />}
                                label="Profile"
                                {...a11yProps(0)}
                              />
                              <Tab
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  textTransform: 'capitalize'
                                }}
                                icon={<SettingOutlined style={{ marginBottom: 0, marginRight: '10px' }} />}
                                label="Setting"
                                {...a11yProps(1)}
                              />
                            </Tabs>
                          </Box>
                          <TabPanel value={value} index={0} dir={theme.direction}>
                            <ProfileTab handleLogout={handleLogout} />
                          </TabPanel>
                          <TabPanel value={value} index={1} dir={theme.direction}>
                            <SettingTab />
                          </TabPanel>
                        </>
                      )}
                    </MainCard>
                  </ClickAwayListener>
                </Paper>
              )}
            </Transitions>
          )}
        </Popper>
      </Box>
    </>
  );

};

export default Profile;
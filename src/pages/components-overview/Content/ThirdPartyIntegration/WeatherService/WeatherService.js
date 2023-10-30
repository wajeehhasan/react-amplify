import React, { useState } from 'react';
import '../../../Information/AboutWebsite/AboutWebsite.css';
import './SummaryCard.css';
import { Auth } from 'aws-amplify';
import SummaryCard from './SummaryCard';

import {
  CircularProgress,
  Box,
  TextField,

  Button
  // Typography
} from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import { notification } from 'antd';

const WeatherService = () => {
  const [weatherdata, setWeatherData] = useState([]);
  const [viewType, setViewType] = useState('input');
  const isLetters = (str) => /^[A-Za-z]*$/.test(str);
  const [cityValue, setCityValue] = useState('');


  const handleTextFieldChange = (event) => {
    event.preventDefault();
    if (isLetters(event.target.value)) {
      setCityValue(event.target.value);
    }

  }

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


  const fetchUserToken = async () => {
    const info = await Auth.currentAuthenticatedUser();
    const result = info.signInUserSession.idToken.jwtToken;
    return result;
  };
  async function searchAgain() {
    setViewType("loading");
    await delay(2000);
    setCityValue("");
    setViewType("input");

  }
  async function getWeatherData(event) {
    event.preventDefault();
    setViewType("loading");
    const apiUrl = 'https://gsmdlwjtsb.execute-api.ap-southeast-2.amazonaws.com/default/WeatherLambda/?cityname=' + cityValue;

    const userToken = await fetchUserToken();
    // Define the headers you want to include in the request
    const headers = {
      'access-key': userToken,
      'Content-Type': 'application/json'
    };
    await delay(1000); // just for loader
    await fetch(apiUrl, {
      method: 'GET',
      headers: headers
    })
      .then((response) => {
        if (response.status == 400 || response.status == 500) {
          console.log(response);
          notification.error({
            message: 'Unsuccessful',
            description: 'Unable to Fecth weather data for ' + cityValue,
            placement: 'bottomRight',
            duration: 4.5
          });
          setCityValue("");
          setViewType("input");
        }
        else {
          return response.json();
        }

      })
      .then((data) => {
        if (data) {
          setWeatherData({ data: data });
          setCityValue("");
          setViewType("loaded");
        }
        else {
          setViewType("input");
        }
        // Handle the response data here
        return data;
      })
      .catch((error) => {
        console.log('There was a problem with the fetch operation:', error.message);
      });
  }
  if (viewType == 'loading') {
    return (
      <div>
        <Box sx={{ display: 'relative', textAlign: 'center' }}>
          <CircularProgress className="loader-weather-screen" />
        </Box>
      </div>
    );
  }

  else if (viewType == "input") {
    return (
      <>
        <div className='main-card-weather-search'>
          <form
            onSubmit={getWeatherData}
            className='weather-form-class'
          >
            <Box className='city-field-container'

            >
              <TextField className='city-text-field' value={cityValue} onChange={handleTextFieldChange} />
            </Box>
            <Box className='input-button-container'
            >
              <AnimateButton >
                <Button
                  disableElevation
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Check Weather
                </Button>
              </AnimateButton>
            </Box>

          </form>

        </div>

      </>
    );
  }
  else if (viewType == 'loaded') {
    return (
      <>
        <div className='summary-card-main'>
          <SummaryCard
            weatherImageLink={weatherdata.data.current.condition.icon}
            skiesDetails={weatherdata.data.current.condition.text}
            countryAndCity={weatherdata.data.location.name + ', ' + weatherdata.data.location.country}
            lastUpdated={weatherdata.data.current.last_updated}
            temperature={weatherdata.data.current.temp_c}
          />
          <AnimateButton >
            <Button
              className='search-again-button'
              disableElevation
              fullWidth
              size="large"
              variant="contained"
              color="primary"
              onClick={searchAgain}
            >
              Search Again
            </Button>
          </AnimateButton>
        </div>
      </>
    );
  }
};

export default WeatherService;

//  <Box sx={{ display: { sm: 'flex' } }}>
//       <div className="technology-name">Location Details</div>
//       {/* <div className={implCssClass}>{implementationStatus}</div> */}
//     </Box>
//     <Card className="card-style-css" sx={{ minWidth: 275, mb: 2 }}>
//       <CardContent>
//         <Typography variant="h5" component="div"></Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
//         <Typography className="content-class" variant="body2">
//           <Grid container rowSpacing={4.5} columnSpacing={2.75}>
//             <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
//               <TechnologyCard techIcon={<SettingTwoTone />} techName={'Country' + ' : ' + weatherdata.data.location.country} />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
//               <TechnologyCard techIcon={<SettingTwoTone />} techName={'City' + ' : ' + weatherdata.data.location.name} />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
//               <TechnologyCard techIcon={<SettingTwoTone />} techName={'State' + ' : ' + weatherdata.data.location.region} />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
//               <TechnologyCard techIcon={<SettingTwoTone />} techName={'Timezone' + ' : ' + weatherdata.data.location.tz_id} />
//             </Grid>
//             <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
//           </Grid>
//         </Typography>
//       </CardContent>
//       <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
//     </Card>
//     <Box sx={{ display: { sm: 'flex' } }}>
//       <div className="technology-name">Weather Details</div>
//       {/* <div className={implCssClass}>{implementationStatus}</div> */}
//     </Box>
//     <Card className="card-style-css" sx={{ minWidth: 275, mb: 2 }}>
//       <CardContent>
//         <Typography className="content-class" variant="body2">
//           <Grid container rowSpacing={4.5} columnSpacing={2.75}>
//             <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
//               <TechnologyCard techIcon={<SettingTwoTone />} techName={'Skies' + ' : ' + weatherdata.data.current.condition.text} />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
//               <TechnologyCard
//                 techIcon={<SettingTwoTone />}
//                 techName={'Temperature' + ' : ' + weatherdata.data.current.temp_c + 'C | ' + weatherdata.data.current.temp_f + 'F'}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
//               <TechnologyCard techIcon={<SettingTwoTone />} techName={'Humidity' + ' : ' + weatherdata.data.current.humidity} />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
//               <TechnologyCard techIcon={<SettingTwoTone />} techName={'LastUpdated' + ' : ' + weatherdata.data.current.last_updated} />
//             </Grid>
//             <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
//           </Grid>
//         </Typography>
//       </CardContent>
//       <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
//     </Card>

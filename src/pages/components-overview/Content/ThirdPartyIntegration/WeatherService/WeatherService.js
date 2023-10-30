import React, { useEffect, useState } from 'react';
import '../../../Information/AboutWebsite/AboutWebsite.css';
import './SummaryCard.css';
import { Auth } from 'aws-amplify';
import SummaryCard from './SummaryCard';
import {
  CircularProgress,
  Box
  // Typography
} from '@mui/material';

const WeatherService = () => {
  const [weatherdata, setWeatherData] = useState([]);
  const [viewType, setViewType] = useState('loading');
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    getWeatherData()
      .then((result) => {
        console.log(result);
        setViewType('loaded');
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchUserToken = async () => {
    const info = await Auth.currentAuthenticatedUser();
    const result = info.signInUserSession.idToken.jwtToken;
    return result;
  };
  async function getWeatherData() {
    const apiUrl = 'https://gsmdlwjtsb.execute-api.ap-southeast-2.amazonaws.com/default/WeatherLambda/?cityname=Karachi';

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
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data here
        setWeatherData({ data: data });
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error.message);
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
  } else if (viewType == 'loaded') {
    return (
      <>
        <div>
          <SummaryCard
            weatherImageLink={weatherdata.data.current.condition.icon}
            skiesDetails={weatherdata.data.current.condition.text}
            countryAndCity={weatherdata.data.location.name + ', ' + weatherdata.data.location.country}
            lastUpdated={weatherdata.data.current.last_updated}
            temperature={weatherdata.data.current.temp_c}
          />
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

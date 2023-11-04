import React, { useEffect, useState } from 'react';
import '../../../Information/AboutWebsite/AboutWebsite.css';
import '../WeatherService/SummaryCard.css';


import {
  CircularProgress,
  Box,
  TextField,

  Button
  // Typography
} from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import { notification } from 'antd';

const IpstackService = () => {
  const [viewState, setViewType] = useState('error');
  const [ipValue, setIpValue] = useState("");
  const [ipdata, setIpData] = useState([]);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // http://portfolioaws-env.eba-yzkm33pb.ap-southeast-2.elasticbeanstalk.com/api/Location?ip_address=11.22.33.55

  const handleTextFieldChange = (event) => {
    event.preventDefault();
    setIpValue(event.target.value);
  }
  async function searchAgain() {
    setViewType("loading");
    await delay(2000);
    setCityValue("");
    setViewType("input");

  }
  useEffect(() => {
    notification.error({
      message: 'Unsuccessful',
      description: 'This service is currently down',
      placement: 'bottomRight',
      duration: 4.5
    });
  }, [])

  async function getIpData(event) {
    event.preventDefault();
    setViewType("loading");
    const apiUrl = 'http://portfolioaws-env.eba-yzkm33pb.ap-southeast-2.elasticbeanstalk.com/api/Location?ip_address=' + ipValue;

    const headers = {
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
            description: 'Unable to Fecth IP ' + ipValue + ' Deetails ',
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
          setIpData({ data: data });
          console.log("ipdata: " + ipdata);
          console.log(data);
          setIpValue("");
          setViewType("input");
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


  if (viewState == 'loading') {
    return (
      <div>
        <Box sx={{ display: 'relative', textAlign: 'center' }}>
          <CircularProgress className="loader-weather-screen" />
        </Box>
      </div>
    );
  }
  else if (viewState == "error") {
    return (
      <>

      </>
    );
  }
  else if (viewState == "input") {
    return (
      <>
        <div className='main-card-weather-search'>
          <form
            onSubmit={getIpData}
            className='weather-form-class'
          >
            <Box className='city-field-container'

            >
              <TextField className='city-text-field' value={ipValue} onChange={handleTextFieldChange} />
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
                  Check IP Location
                </Button>
              </AnimateButton>
            </Box>

          </form>

        </div>

      </>
    );
  }
  else if (viewState == 'loaded') {
    return (
      <>
        <div className='summary-card-main'>
          {/* {ipdata.resultSet.city} */}
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

export default IpstackService;

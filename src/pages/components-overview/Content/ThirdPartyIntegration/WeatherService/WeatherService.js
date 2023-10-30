import React, { useEffect, useState } from 'react';

import { Auth } from 'aws-amplify';

const WeatherService = () => {
  const [weatherdata, setWeatherData] = useState([]);

  useEffect(() => {
    getWeatherData()
      .then((result) => {
        console.log(result);
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
        console.log(weatherdata.data.current);
        return data;
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  return (
    <>
      <div>{}</div>
    </>
  );
};

export default WeatherService;

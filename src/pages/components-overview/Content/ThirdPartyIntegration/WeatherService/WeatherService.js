import React, { useState } from 'react';




const WeatherService = () => {

  const [weatherData, setWeatherData] = useState();
  // Define the URL of the REST API
  const apiUrl = 'https://gsmdlwjtsb.execute-api.ap-southeast-2.amazonaws.com/default/WeatherLambda/?cityname=Karachi';

  // Define the headers you want to include in the request
  const headers = {
    "access-key": 'eyJraWQiOiJORVp2TzdXVW5LT0FFaHVZVzdNMzgzekcybVBRdkw0cUtZRWxNZjVINzJVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3MTBiMWJjOS1jNmFjLTQ3ZjgtYmFkYy0yZmRjNjI0YTNkMWEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0yX0M4OEd5ZEZZaiIsImNvZ25pdG86dXNlcm5hbWUiOiJ0aGVndWVzdCIsIm9yaWdpbl9qdGkiOiIzYzY4ZGM3ZC03ZTgyLTRjMmEtODI0NC03NWQ1NzBmMTZhOWEiLCJhdWQiOiI1YTBqNGozZ2xnMmVwb2ZuOHJybmk0ZDFwNiIsImV2ZW50X2lkIjoiMGIxYTA5MzEtODlhMC00M2UwLTkxMTAtYzg2ODAzYTNiYTcxIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTg1ODI0MjAsImV4cCI6MTY5ODU4NjAyMCwiaWF0IjoxNjk4NTgyNDIwLCJqdGkiOiI0NWE2NDU0Zi0zNDE0LTQ5OGEtYWQ3NS1hMWI0NmNmZWYwNWIiLCJlbWFpbCI6InRhd295bzI4NTdAd2VpcmJ5LmNvbSJ9.kiwRYQ4drT7q_cu94yKV8y9LV_IRQT_BdV4aDPh7Uu04BoGYCLS5qrWjJK63WSL3zIYShv4vPPkZIUp4us-sar_cyf6dj4m4DSTkcY4pJgJ2ma4ccWeF9QilzD20GdOp1iMuJVZT4C4g1njLm0LIk2nkTcUrYD9rxk50Z0h2FsYJDVwjSmBHHOKSYPlQ3wi9kVA96Wgi4ucoCQv3UmjSXYQZfmdubxYJvhixn7T6iomMOdBlUZVJ5umJTyVtoIMSZWnZOVI_Z7pntLIWvAb5JBIC3cji3YQODVHEBMf_vs4R1ECGWUmLn-egVI34Q9FniFA0-NBQs0PHKU8icZ-Oew',
    'Content-Type': 'application/json',
  };

  fetch(apiUrl, {
    method: 'GET',
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response data here
      console.log(data);
      setWeatherData(data);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });

  return <div>{weatherData}</div>;
};

export default WeatherService;

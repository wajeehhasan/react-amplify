import './SummaryCard.css';
import PropTypes from 'prop-types';
const SummaryCard = ({ skiesDetails, countryAndCity, lastUpdated, temperature }) => {
  let cssClassName = '';
  const sky_details_icons_name = [
    'sunny',
    'cloudy',
    'cloudy-gusts',
    'cloudy-windy',
    'fog',
    'hail',
    'haze',
    'lightning',
    'rain',
    'rain-mix',
    'rain-wind',
    'showers',
    'sleet',
    'sleet-storm',
    'snow',
    'snow-thunderstorm',
    'snow-wind',
    'sprinkle',
    'storm-showers',
    'sunny-overcast',
    'thunderstorm',
    'windy',
    'solar',
    'eclipse',
    'hot',
    'cloudy-high',
    'light-wind'
  ];
  if (sky_details_icons_name.indexOf(skiesDetails)) {
    cssClassName = 'wi wi-day-cloudy';
  } else {
    cssClassName = 'wi wi-day-' + skiesDetails;
  }

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={cssClassName}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temperature}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{skiesDetails}</div>
            <div className="place">{countryAndCity}</div>
          </div>
        </div>
        <div className="date">{lastUpdated}</div>
      </article>
    </>
  );
};

SummaryCard.prototype = {
  weatherImageLink: PropTypes.string,
  skiesDetails: PropTypes.string,
  countryAndCity: PropTypes.string,
  lastUpdated: PropTypes.string
};
export default SummaryCard;

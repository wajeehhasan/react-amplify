import './SummaryCard.css';
import PropTypes from 'prop-types';
import { weatherIconDetails } from './weatherTest';
const SummaryCard = ({ skiesDetails, countryAndCity, lastUpdated, temperature }) => {
  let cssClassName = '';
  const daytimeIcons = weatherIconDetails[0]['Daytime'];
  const neutralIcons = weatherIconDetails[0]['Neutral'];
  const nightTimeIcons = weatherIconDetails[0]['Nighttime'];
  skiesDetails = skiesDetails.toLowerCase();
  if (!daytimeIcons.indexOf(skiesDetails)) {
    cssClassName = "wi wi-day-" + skiesDetails;
  }
  else if (!neutralIcons.indexOf(skiesDetails)) {
    cssClassName = "wi wi-" + skiesDetails;
  }
  else if (!nightTimeIcons.indexOf(skiesDetails)) {
    cssClassName = "wi wi-night-" + skiesDetails;
  }
  else {
    cssClassName = "wi wi-day-cloudy";
  }

  return (
    <>
      <article className="widget article-margin-fix">
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

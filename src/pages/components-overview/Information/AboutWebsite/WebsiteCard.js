import './AboutWebsite.css';
import { Grid, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TechnologyCard from 'components/cards/statistics/TechnologyCard';
import PropTypes from 'prop-types';
import { SettingTwoTone } from '@ant-design/icons';

const WebsiteCard = ({ techstackHeading, implementationStatus, implCssClass, techNameArr }) => {
  let technologyList = [];

  techNameArr.forEach((data) => {
    technologyList.push(
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
        <TechnologyCard techIcon={<SettingTwoTone />} techName={{ data }} />
      </Grid>
    );
  });

  function TodoList({ items }) {
    return items.map((item) => (
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }} key={item.key}>
        <TechnologyCard techIcon={<SettingTwoTone />} techName={item.name} />
      </Grid>
    ));
  }

  return (
    <>
      {/* FRONTEND CARD */}
      <Box sx={{ display: { sm: 'flex' } }}>
        <div className="technology-name">{techstackHeading}</div>
        <div className={implCssClass}>{implementationStatus}</div>
      </Box>
      <Card className="card-style-css" sx={{ minWidth: 275, mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography className="content-class" variant="body2">
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
              <TodoList items={techNameArr} />
              <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            </Grid>
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
      </Card>
    </>
  );
};

WebsiteCard.propTypes = {
  techstackHeading: PropTypes.string,
  implementationStatus: PropTypes.string,
  implCssClass: PropTypes.string,
  techNameArr: PropTypes
};

export default WebsiteCard;

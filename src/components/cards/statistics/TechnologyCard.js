import PropTypes from 'prop-types';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const TechnologyCard = ({ techIcon, techName }) => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Grid container alignItems="center">
        <Grid item>{techIcon}</Grid>
        <Grid item>
          <Typography sx={{ mx: 1 }} variant="h5" color="inherit">
            {techName}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  </MainCard>
);

TechnologyCard.propTypes = {
  techIcon: PropTypes.element,
  techName: PropTypes.string
};

export default TechnologyCard;

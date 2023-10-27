// material-ui
import { Grid, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// project import
// import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import TechnologyCard from 'components/cards/statistics/TechnologyCard';

import { SettingTwoTone } from '@ant-design/icons';
import './AboutWebsite.css';
const AboutWebsite = () => {
  return (
    <>
      {/* FRONTEND CARD */}
      <Box sx={{ display: { sm: 'flex' } }}>
        <div className="technology-name">Frontend Frameworks & Liberaries</div>
        <div className="developed-button done">Developed</div>
        <div className="developed-button done">Deployed</div>
      </Box>
      <Card className="card-style-css" sx={{ minWidth: 275, mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography className="content-class" variant="body2">
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'ReactJs'} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'MaterialUI'} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'awsamplify/react-ui'} />
              </Grid>
              <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            </Grid>
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
      </Card>
      {/* BACKEND CARD */}
      <Box sx={{ display: { sm: 'flex' } }}>
        <div className="technology-name">Backend Architecture</div>
        <div className="developed-button done">Developed</div>
        <div className="developed-button remaining">Deployed</div>
      </Box>
      <Card className="card-style-css" sx={{ minWidth: 275, mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography className="content-class" variant="body2">
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'.NETCORE'} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'EC2 instance'} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'AWS CloudFormation stack'} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'Amazon S3 bucket'} />
              </Grid>
              <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            </Grid>
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
      </Card>
      {/* User Registration & Authorisation */}
      <Box sx={{ display: { sm: 'flex' } }}>
        <div className="technology-name">User Registration & Authorisation</div>
        <div className="developed-button done">Implemented</div>
      </Box>
      <Card className="card-style-css" sx={{ minWidth: 275, mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography className="content-class" variant="body2">
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'Aws Cognito'} />
              </Grid>
              <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            </Grid>
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
      </Card>

      {/* Serverless */}
      <Box sx={{ display: { sm: 'flex' } }}>
        <div className="technology-name">Serverless & Key Management</div>
        <div className="developed-button remaining">Implemented</div>
      </Box>
      <Card className="card-style-css" sx={{ minWidth: 275, mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography className="content-class" variant="body2">
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'Lambda & ApiGateway'} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'AWS KMS'} />
              </Grid>
              <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            </Grid>
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
      </Card>
      {/* Serverless */}
      <Box sx={{ display: { sm: 'flex' } }}>
        <div className="technology-name">Miscellaneous</div>
        <div className="developed-button done">Implemented</div>
      </Box>
      <Card className="card-style-css" sx={{ minWidth: 275, mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography className="content-class" variant="body2">
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'CloudWatch'} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'GoDaddy-Domain'} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mb: -2.25 }}>
                <TechnologyCard techIcon={<SettingTwoTone />} techName={'Github'} />
              </Grid>
              <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            </Grid>
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
      </Card>
    </>
  );
};

export default AboutWebsite;

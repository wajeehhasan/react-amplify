import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
// import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import 'pages/components-overview/AboutMe/Socials/social.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MailOutlined, MobileOutlined } from '@ant-design/icons';

const Socials = () => {
  return (
    <div>
      <Card className="card-style-css" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography className="content-class" variant="body2">
            <div className="row col-item-social">
              <div className="col">
                <MailOutlined />
              </div>
              <div className="col">wajeeh.hasan322@gmail.com</div>
            </div>
            <div className="row col-item-social">
              <div className="col">
                <MobileOutlined />
              </div>
              <div className="col">+61 413 994 105</div>
            </div>
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
      </Card>
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Stack direction="row" alignItems="center" spacing={4}>
          <div className="icon-card-main">
            <div className="icon-header"></div>
            <div className="icon-style-css">
              <LinkedInIcon className="icon-style-css" fontSize="large" color="primary" />
            </div>
          </div>
          <div className="icon-card-main">
            <div className="icon-header"></div>
            <div className="icon-style-css">
              <GitHubIcon className="icon-style-css" fontSize="large" />
            </div>
          </div>
          <div className="icon-card-main">
            <div className="icon-header"></div>
            <div className="icon-style-css">
              <InstagramIcon className="icon-style-css" fontSize="large" sx={{ color: '#E1306C' }} />
            </div>
          </div>
          <div className="icon-card-main">
            <div className="icon-header"></div>
            <div className="icon-style-css">
              <FacebookIcon className="icon-style-css" color="primary" fontSize="large" />
            </div>
          </div>
          <div className="icon-card-main">
            <div className="icon-header"></div>
            <div></div>
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default Socials;

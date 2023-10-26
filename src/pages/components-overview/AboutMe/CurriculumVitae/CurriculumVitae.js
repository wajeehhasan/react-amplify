// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'pages/components-overview/AboutMe/aboutme.css';
// import Socials from '../Socials/Socials';

// const bull = (
//   <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
//     •
//   </Box>
// );
const CurriculumVitae = () => {
  return (
    <>
      <div>
        <div>
          <div className="heading-class">About Myself </div>
          <div>
            <div>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography className="content-class" variant="body2">
                    I am Syed Wajeeh, a dedicated professional with a Master&apos;s degree in Software Engineering and a prestigious
                    Academic Excellence Award in Software Design and Principles from Charles Darwin University. With a passion for
                    technology and innovation, I thrive as a full-stack developer, specializing in the end-to-end delivery of projects that
                    align seamlessly with clients unique requirements.
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
          </div>
        </div>
        <div>
          <div className="heading-class">Experiences</div>
          <div>
            <div>
              <Card className="card-style-css" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Northern Land Council
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    2021&apos;Current
                  </Typography>
                  <Typography className="content-class" variant="body2">
                    My responsibilites in NLC include designing full stack web applications along with API development for aiding connecting
                    systems and developing security for these systems.
                    <br />
                    Tech stack that I work with here includes .NET Core Web apps, .NET Core REST APIs (OpenAPI v3 with Swagger
                    documentation), Entity Framework Core (ORM) and LINQ, C#, JavaScript, Blazor, Syncfusion, Razor, React, Microsft SQL
                    Server, Git, Bitbucket, Redis, JIRA and Confluence.
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
            <div>
              <Card className="card-style-css" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Cyber Internet Services
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    2 Years
                  </Typography>
                  <Typography className="content-class" variant="body2">
                    NET CORE/SQL Server Script writing with Python Building, designing and maintaining website. API maintaining &
                    supporting.
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
          </div>
        </div>
        <div>
          <div className="heading-class">Skills</div>
          <div>
            <div>
              <Card className="card-style-css" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    FrontEnd Frameworks & Liberaries
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
                  <Typography className="content-class" variant="body2">
                    React, HTML, CSS, JavaScript, TypeScript, Angular, JQuery, Ionic, Cordova, Bootstrap, Angular Material, Kendo UI,
                    Windows Forms, Blazor, Razor, Syncfusion.
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
            <div>
              <Card className="card-style-css" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Backend Frameworks
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
                  <Typography className="content-class" variant="body2">
                    C++, Python ( Django), C#, Nodejs.
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
            <div>
              <Card className="card-style-css" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    DBMS, ORMS & Caches
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
                  <Typography className="content-class" variant="body2">
                    SQL, MYSQL, MSSQL, SQLite, MongoDB, Redis, MSSQL Server Management Studio.
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
            <div>
              <Card className="card-style-css" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Amazon Web Services
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
                  <Typography className="content-class" variant="body2">
                    Amazon EC2, Amazon RDS, Amazon S3, Cognito, Amplify, CloudWatch, Lambda, APIGateway
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
            <div>
              <Card className="card-style-css" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Machine Learning Models
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
                  <Typography className="content-class" variant="body2">
                    TensorFlow, Keras, YOLO.
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
            <div>
              <Card className="card-style-css" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Loggers
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
                  <Typography className="content-class" variant="body2">
                    AWS-CloudWatch, Exceptionless, Log4Net, NLog.
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
            <div>
              <Card className="card-style-css" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Design Patterns
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
                  <Typography className="content-class" variant="body2">
                    Dependency Injection, 3-tier architecture (Presentation, Logic, Data) pattern, Model View Controller (MVC) architectural
                    pattern, GoF patterns (Singleton, Factory)
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
            <div>
              <Card className="card-style-css" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    IDEs, Code Editors & other GUIs
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
                  <Typography className="content-class" variant="body2">
                    Visual Studio, Visual Studio Code, PyCharm, Vim, Nano, Notepad++, Atom, Anaconda, Postman.
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
            <div>
              <Card className="card-style-css" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Others
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
                  <Typography className="content-class" variant="body2">
                    Firebase Authentication, Scrapy(Py), SwaggerUI, SwashBuckle, Redis Sentinel, Arduino, Raspberry Pi, Crontab, Bash
                    Scripting.
                  </Typography>
                </CardContent>
                <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurriculumVitae;

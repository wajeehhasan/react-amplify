import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'pages/components-overview/AboutMe/aboutme.css';

const CoverLetter = () => {
  return (
    <div>
      <Card className="card-style-css" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography className="content-class" variant="body2">
            I am Syed Wajeeh, a dedicated professional with a Master&apos;s degree in Software Engineering and a prestigious Academic
            Excellence Award in Software Design and Principles from Charles Darwin University. With a passion for technology and innovation,
            I thrive as a full-stack developer, specializing in the end-to-end delivery of projects that align seamlessly with clients&apos;
            unique requirements. <br />
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
      </Card>
      <Card className="card-style-css" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography className="content-class" variant="body2">
            My journey into the realm of software development has been marked by a relentless pursuit of excellence and a commitment to
            mastering the intricacies of the field. My expertise in frontend development is underpinned by my proficiency in a range of
            technologies, including ReactJS, Blazor, Angular, Kendo UI, Syncfusion, Material, and Bootstrap. This extensive toolkit empowers
            me to create interactive, visually appealing user interfaces that prioritize the user experience, ensuring that clients&apos;
            visions come to life with precision and finesse.
            <br /> On the backend, I bring a wealth of experience in .NET Core, enabling me to architect robust and efficient server-side
            components. This proficiency allows me to handle the complexities of data management and server operations, ensuring that
            applications run smoothly and securely.
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
      </Card>
      <Card className="card-style-css" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography className="content-class" variant="body2">
            In addition, I am well-versed in API development, a crucial aspect of modern software ecosystems. My ability to design,
            implement, and maintain APIs ensures that data and functionality are seamlessly shared between different components of an
            application, promoting efficiency and flexibility. To further enhance my capabilities, I have leveraged AWS services, including
            AWS Amplify, Cognito, Lambda, and API Gateway, to build scalable and resilient solutions. This cloud expertise empowers me to
            design and deploy web applications that can handle varying workloads while maintaining high availability and reliability. My
            holistic approach to software development, which spans both frontend and backend domains, combined with my proficiency in a
            diverse range of technologies and cloud services, positions me as a well-rounded and versatile developer ready to tackle complex
            projects and drive success for your software company.
            <br />I look forward to the opportunity to contribute my skills and passion to your team and help deliver innovative solutions
            to your clients.
          </Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">Download CV</Button> */}</CardActions>
      </Card>
      <div className="regards-css">Kind Regards, Syed Wajeeh.</div>
    </div>
  );
};

export default CoverLetter;

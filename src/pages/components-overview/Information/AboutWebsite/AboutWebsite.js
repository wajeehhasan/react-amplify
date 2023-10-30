import './AboutWebsite.css';
import WebsiteCard from './WebsiteCard';

const AboutWebsite = () => {
  const fronEndTechnologies = [{ name: 'ReactJs' }, { name: 'MaterialUI' }, { name: 'awsamplify/react-ui' }];
  const backEndTechnologies = [{ name: '.NETCORE' }, { name: 'EC2 instance' }, { name: 'CloudFormation' }, { name: 'Dynamodb' }];
  const serverLessTechnologies = [{ name: 'Lambda & ApiGateway' }, { name: 'AWS Secrets Manager' }];
  const userRegTechnologies = [{ name: 'Aws Cognito' }];

  const miscellaneousTechnologies = [{ name: 'GoDaddy-Domain' }, { name: 'Github' }];
  return (
    <>
      {/* FRONTEND CARD */}
      <WebsiteCard
        techstackHeading="Frontend Frameworks & Liberaries"
        implementationStatus="Implemented"
        implCssClass="developed-button done"
        techNameArr={fronEndTechnologies}
      ></WebsiteCard>

      {/* BACKEND CARD */}
      <WebsiteCard
        techstackHeading="Backend Architecture"
        implementationStatus="In-Progress"
        implCssClass="developed-button remaining"
        techNameArr={backEndTechnologies}
      ></WebsiteCard>
      {/* User Registration & Authorisation */}
      <WebsiteCard
        techstackHeading="User Registration & Authorisation"
        implementationStatus="Implemented"
        implCssClass="developed-button done"
        techNameArr={userRegTechnologies}
      ></WebsiteCard>

      {/* Serverless */}
      <WebsiteCard
        techstackHeading="Serverless (WeatherService) & Key Management"
        implementationStatus="ImplemeImplementednted"
        implCssClass="developed-button done"
        techNameArr={serverLessTechnologies}
      ></WebsiteCard>

      {/* Serverless */}
      <WebsiteCard
        techstackHeading="Miscellaneous"
        implementationStatus="Implemented"
        implCssClass="developed-button done"
        techNameArr={miscellaneousTechnologies}
      ></WebsiteCard>
    </>
  );
};

export default AboutWebsite;

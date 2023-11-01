import './AboutWebsite.css';
import WebsiteCard from './WebsiteCard';

const AboutWebsite = () => {
  const fronEndTechnologies = [{ name: 'ReactJs' }, { name: 'MaterialUI' }, { name: 'awsamplify/react-ui' }];
  const backEndTechnologies = [{ name: '.NETCORE' }, { name: 'AWS Elastic Beanstalk' }, { name: 'AWS EC2' }];
  const serverLessTechnologies = [{ name: 'Lambda & ApiGateway' }, { name: 'AWS Secrets Manager' }];
  const userRegTechnologies = [{ name: 'Aws Cognito' }];

  const miscellaneousTechnologies = [
    { name: 'AWS CodeBuild' },
    { name: 'AWS Codepipeline' },
    { name: 'Github' },
    { name: 'GoDaddy-Domain' }
  ];
  return (
    <>
      {/* Frontend Frameworks & Liberaries */}
      <WebsiteCard
        techstackHeading="Frontend Frameworks & Liberaries"
        implementationStatus="Live"
        implCssClass="developed-button done"
        techNameArr={fronEndTechnologies}
      ></WebsiteCard>

      {/* Backend Architecture*/}
      <WebsiteCard
        techstackHeading="Backend Architecture"
        implementationStatus="Live"
        implCssClass="developed-button done"
        techNameArr={backEndTechnologies}
      ></WebsiteCard>
      {/* User Registration & Authorisation */}
      <WebsiteCard
        techstackHeading="User Registration & Authorisation"
        implementationStatus="Live"
        implCssClass="developed-button done"
        techNameArr={userRegTechnologies}
      ></WebsiteCard>

      {/* Serverless (WeatherService) & Key Management */}
      <WebsiteCard
        techstackHeading="Serverless (WeatherService) & Key Management"
        implementationStatus="Live"
        implCssClass="developed-button done"
        techNameArr={serverLessTechnologies}
      ></WebsiteCard>

      {/* CI/CD, Version Control & Domain Management */}
      <WebsiteCard
        techstackHeading="CI/CD, Version Control & Domain Management"
        implementationStatus="Live"
        implCssClass="developed-button done"
        techNameArr={miscellaneousTechnologies}
      ></WebsiteCard>
    </>
  );
};

export default AboutWebsite;

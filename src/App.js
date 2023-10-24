// project import
import Routes from 'routes';
import UnRoutes from 'unauthroutes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { useAuthenticator } from '@aws-amplify/ui-react';


// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  console.log(authStatus);
  return (authStatus === 'authenticated' || authStatus === 'configuring') ? (<ThemeCustomization>
    <ScrollTop>
      <Routes />
    </ScrollTop>
  </ThemeCustomization>) : (<ThemeCustomization>
    <ScrollTop>
      <UnRoutes />
    </ScrollTop>
  </ThemeCustomization>);


};

export default App;

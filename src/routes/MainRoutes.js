import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import NotFound from 'pages/components-overview/NotFound/NotFound';

// render - dashboard
// const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// // render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// // render - utilities
// const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
// const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
// const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
// const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

const CurriculumVitae = Loadable(lazy(() => import('pages/components-overview/AboutMe/CurriculumVitae/CurriculumVitae')));
const CoverLetter = Loadable(lazy(() => import('pages/components-overview/AboutMe/CoverLetter/CoverLetter')));
const Socials = Loadable(lazy(() => import('pages/components-overview/AboutMe/Socials/Socials')));
const IpStackService = Loadable(
  lazy(() => import('pages/components-overview/Content/ThirdPartyIntegration/IpstackService/IpstackService'))
);
const WeatherService = Loadable(
  lazy(() => import('pages/components-overview/Content/ThirdPartyIntegration/WeatherService/WeatherService'))
);
const Poetry = Loadable(lazy(() => import('pages/components-overview/Content/Poetry/Poetry')));
const AboutWebsite = Loadable(lazy(() => import('pages/components-overview/Information/AboutWebsite/AboutWebsite')));

// ==============================|| MAIN ROUTING ||============================== //

//orignal routes for default pages
// const MainRoutes = {
//   path: '/',
//   element: <MainLayout></MainLayout>,
//   children: [
//     {
//       path: '/',
//       element: <DashboardDefault />
//     },

//     {
//       path: 'color',
//       element: <Color />
//     },
//     {
//       path: 'dashboard',
//       children: [
//         {
//           path: 'default',
//           element: <DashboardDefault />
//         }
//       ]
//     },
//     {
//       path: 'sample-page',
//       element: <SamplePage />
//     },
//     {
//       path: 'shadow',
//       element: <Shadow />
//     },
//     {
//       path: 'typography',
//       element: <Typography />
//     },
//     {
//       path: 'icons/ant',
//       element: <AntIcons />
//     },
//     {
//       path: '*',
//       element: <NotFound />
//     }
//   ]
// };

const MainRoutes = {
  path: '/',
  element: <MainLayout></MainLayout>,
  children: [
    {
      path: '/',
      element: <CurriculumVitae />
    },

    {
      path: 'wajeehscv',
      element: <CurriculumVitae />
    },
    {
      path: 'coverletter',
      element: <CoverLetter />
    },
    {
      path: 'connectwithme',
      element: <Socials />
    },
    {
      path: 'ipstackintegration',
      element: <IpStackService />
    },
    {
      path: 'weatherserviceintegration',
      element: <WeatherService />
    },
    {
      path: 'wajeehspoetry',
      element: <Poetry />
    },
    {
      path: 'websiteinformation',
      element: <AboutWebsite />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
};

export default MainRoutes;

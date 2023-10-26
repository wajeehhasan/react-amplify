import { ClusterOutlined } from '@ant-design/icons';

const icons = {
  ClusterOutlined
};

// ==============================|| MENU ITEMS - AboutME ||============================== //

const ServicesIntegrated = {
  id: 'servicesintegrated',
  title: 'Services Integration',
  type: 'group',
  children: [
    {
      id: 'ipstackservice',
      title: 'IpStack Service',
      type: 'item',
      url: '/ipstackintegration',
      icon: icons.ClusterOutlined
    },
    {
      id: 'weatherservice',
      title: 'Weather Service',
      type: 'item',
      url: '/weatherserviceintegration',
      icon: icons.ClusterOutlined
    }
  ]
};

export default ServicesIntegrated;

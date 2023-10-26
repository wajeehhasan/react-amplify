// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'information',
  title: 'Information',
  type: 'group',
  children: [
    {
      id: 'aboutwebsite',
      title: 'About Website',
      type: 'item',
      url: '/websiteinformation',
      icon: icons.ApartmentOutlined
    }
  ]
};

export default pages;

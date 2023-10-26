import { ApartmentOutlined, BookOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
const icons = {
  ApartmentOutlined,
  BookOutlined,
  UserOutlined,
  PhoneOutlined
};

// ==============================|| MENU ITEMS - AboutME ||============================== //

const AboutMe = {
  id: 'Aboutme',
  title: 'About Me',
  type: 'group',
  children: [
    {
      id: 'curriculumvitae',
      title: 'Curriculum Vitae',
      type: 'item',
      url: '/wajeehscv',
      icon: icons.UserOutlined
    },
    {
      id: 'coverlettr',
      title: 'Cover Letter',
      type: 'item',
      url: '/coverletter',
      icon: icons.BookOutlined
    },
    {
      id: 'connectwithme',
      title: 'Socials',
      type: 'item',
      url: '/connectwithme',
      icon: icons.PhoneOutlined
    }
  ]
};

export default AboutMe;

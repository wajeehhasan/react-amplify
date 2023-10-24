import { AudioOutlined } from '@ant-design/icons';

// icons
const icons = {
  AudioOutlined
};

// ==============================|| MENU ITEMS - AboutME ||============================== //

const MyContent = {
  id: 'mycontent',
  title: 'Content',
  type: 'group',
  children: [
    {
      id: 'mypoetrycollection',
      title: 'Poetry By Me',
      type: 'item',
      url: '/wajeehspoetry',
      icon: icons.AudioOutlined
    }
  ]
};

export default MyContent;

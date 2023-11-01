import { useEffect, useState } from 'react';

const IpstackService = () => {
  const [viewState, setViewState] = useState('input');

  useEffect(() => {
    setViewState('input');
    console.log('viewState');
  }, []);
  if (viewState == 'loaded') {
    return <></>;
  } else if (viewState == 'loading') {
    return <></>;
  } else if (viewState == 'input') {
    return <></>;
  }
};

export default IpstackService;

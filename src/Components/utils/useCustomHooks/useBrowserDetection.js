import { useState, useEffect } from 'react';

const useBrowserDetection = () => {
  const [browser, setBrowser] = useState('Unknown');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') > 0) {
      setBrowser('Internet Explorer');
    } else if (userAgent.indexOf('Edge') !== -1) {
      setBrowser('Microsoft Edge');
    } else if (userAgent.indexOf('Chrome') !== -1) {
      setBrowser('Google Chrome');
    } else if (userAgent.indexOf('Firefox') !== -1) {
      setBrowser('Mozilla Firefox');
    } else if (userAgent.indexOf('Safari') !== -1) {
      setBrowser('Apple Safari');
    } else if (userAgent.indexOf('Opera') !== -1 || userAgent.indexOf('OPR') !== -1) {
      setBrowser('Opera');
    } else {
      setBrowser('Unknown');
    }
  }, []);

  return browser;
};

export default useBrowserDetection;

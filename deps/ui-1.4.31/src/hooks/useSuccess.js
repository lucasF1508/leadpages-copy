import { useState, useEffect } from 'react';

export default (successCallback, successTimeout = 1000) => {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let successTimer;
    if (isSuccess)
      setTimeout(() => {
        setIsSuccess(false);
        successCallback();
      }, successTimeout);
    return () => clearTimeout(successTimer);
  }, [isSuccess, successCallback, successTimeout]);

  return [isSuccess, setIsSuccess];
};

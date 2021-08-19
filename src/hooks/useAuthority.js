import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const useAuthority = (authority) => {
  const location = useLocation();
  const authorityName = (() => {
    switch (location.pathname.split('/')[1]) {
      case 'user':
        return 'manageUser';
      case 'admin':
        return 'manageAdmin';
      case 'notice':
        return 'manageNotice';
      default:
        return 'manageUser';
    }
  })();
  const [isSatisfy, setIsSatisfy] = useState(false);
  const currentAuthority = useSelector(
    (store) => store.auth.adminAuthority[authorityName]
  );

  useEffect(() => {
    setIsSatisfy(
      [...authority].every((auth) => currentAuthority.includes(auth))
    );
  }, [currentAuthority]);

  return isSatisfy;
};

export default useAuthority;

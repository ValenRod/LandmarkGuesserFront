import {useEffect, useState} from 'react';

export const useMapReload = () => {
  const [loadMap, setLoadMap] = useState<boolean>(true);
  const [reloadMap, setReloadMap] = useState<boolean>(false);

  useEffect(() => {
    if (reloadMap) {
      setLoadMap(false);
      setTimeout(() => setLoadMap(true), 1);
      setReloadMap(false);
    }
  }, [reloadMap]);

  return {loadMap, setReloadMap};
};

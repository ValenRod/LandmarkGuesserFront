import {icon, Icon, IconOptions} from 'leaflet';
import {useEffect, useState} from 'react';
import defaultIconUrl from '../icons/pin-svgrepo-com.svg';

const defaultIconOptions: IconOptions = {
  iconUrl: defaultIconUrl,
  iconSize: [30, 30],
  iconAnchor: [14, 14],
};

const defaultIcon = icon(defaultIconOptions);

interface Props {
  iconUrl?: string;
}

export const useMarkerIcon = (props: Props) => {
  const [markerIcon, setMarkerIcon] = useState<Icon>(defaultIcon);
  const {iconUrl} = props;

  useEffect(() => {
    if (iconUrl) {
      const iconOptions = defaultIconOptions;
      iconOptions.iconUrl = iconUrl;
      const newIcon = icon(iconOptions);
      setMarkerIcon(newIcon);
    }
  }, []);

  return {markerIcon};
};

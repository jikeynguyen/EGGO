
import { useMap } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { useAddressFromCorsLazyQuery } from '../../hooks/address-from-cors-query.hook';

interface ICoordinates {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface IMapControl {
  detectedLocation: ICoordinates | null;
  map: google.maps.Map | null;
}

export const useMapControl = (id: string): IMapControl => {
  const map = useMap(id);

  const [detectedLocation, setDetectedLocation] = useState<ICoordinates | null>(
    null
  );

  const [fetch] = useAddressFromCorsLazyQuery();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator?.geolocation?.getCurrentPosition(function (detected) {
        const position: ICoordinates = {
          latitude: detected.coords.latitude,
          longitude: detected.coords.longitude,
        };

        fetch(position.latitude, position.longitude)
          .then((res) => {
            const data = res.data;
            const address = data.results[0]?.formatted_address;

            setDetectedLocation({
              ...position,
              address,
            });
          })
          .catch(() => {
            setDetectedLocation(position);
          });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    detectedLocation,
    map,
  };
};



import { Map } from '@vis.gl/react-google-maps';
import { Navigation } from 'lucide-react';
import { memo, useEffect } from 'react';

import { Circle } from './circle';
import { ClusteredPlaygroundMarkers } from './clustered-playground-markers';
import { RadarMarker } from './radar-marker';
import { Playground } from '../../generated/schema';
import { Color } from '../../constants/color.constant';
import { MapID } from '../../constants/find-playgrounds.constant';
import { IMapControl } from './map-control.hook';

function FindPlaygroundsMap(props: {
  controls: IMapControl;
  center: { lat: number; lng: number };
  radius: number;
  playgrounds: Playground[];
  onSelectPlayground?: (playgroundId: number) => void;
}) {
  const { controls, center, radius, playgrounds = [] } = props;
  const userPosition = {
    lat: center.lat,
    lng: center.lng,
  };

  const onCurrentPosition = () => {
    controls?.map?.panTo(userPosition);
  };

  useEffect(() => {
    onCurrentPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userPosition]);

  return (
    <div className='relative h-full w-full overflow-hidden'>
      <Map
        mapId='b5387d230c6cf22f'
        id={MapID.PLAYGROUND}
        style={{ height: '100%', width: '100%', border: 'none' }}
        defaultCenter={{ lat: 0, lng: 0 }}
        disableDefaultUI
        defaultZoom={15}
        gestureHandling={'greedy'}
      >
        <RadarMarker position={userPosition} />
        <ClusteredPlaygroundMarkers
          playgrounds={playgrounds}
          onSelectPlayground={props.onSelectPlayground}
        />
        <Circle
          center={userPosition}
          radius={radius}
          fillOpacity={0.05}
          fillColor={Color.Primary}
          strokeColor={Color.Primary}
          strokeWeight={1.5}
          strokeOpacity={0.5}
        />
      </Map>
      <span
        className='glassmorphism absolute bottom-20 right-2 cursor-pointer'
        onClick={onCurrentPosition}
      >
        <Navigation strokeWidth={1.5} size={22} className='stroke-primary' />
      </span>
    </div>
  );
}

export default memo(FindPlaygroundsMap, (prev, next) => {
  return (
    prev.center.lat === next.center.lat &&
    prev.center.lng === next.center.lng &&
    prev.radius === next.radius &&
    prev.playgrounds === next.playgrounds &&
    prev.controls.map === next.controls.map
  );
});

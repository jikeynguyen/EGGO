

import type { Marker } from '@googlemaps/markerclusterer';
import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { useCallback } from 'react';
import { Playground, PlaygroundType } from '../../generated/schema';
import { getPlaygroundTypeIcon } from '../../untils/playground.helper';

export type PlaygroundMarkerProps = {
  playground: Playground;
  onClick: (playground: Playground) => void;
  setMarkerRef: (marker: Marker | null, key: string) => void;
};

/**
 * Wrapper Component for an AdvancedMarker for a single playground.
 */
export const PlaygroundMarker = (props: PlaygroundMarkerProps) => {
  const { playground, onClick, setMarkerRef } = props;
  const [lng, lat] = playground.location.coordinates;

  const handleClick = useCallback(
    () => onClick(playground),
    [onClick, playground]
  );
  const ref = useCallback(
    (marker: google.maps.marker.AdvancedMarkerElement) =>
      setMarkerRef(marker, String(playground.id)),
    [setMarkerRef, playground.id]
  );

  return (
    <AdvancedMarker
      position={{
        lat,
        lng,
      }}
      ref={ref}
      onClick={handleClick}
    >
      <span className='text-xl'>
        {getPlaygroundTypeIcon(playground.type as PlaygroundType)}
      </span>
    </AdvancedMarker>
  );
};

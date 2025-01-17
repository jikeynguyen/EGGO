import './map.scss';



import { Marker, MarkerClusterer } from '@googlemaps/markerclusterer';
import { InfoWindow, useMap } from '@vis.gl/react-google-maps';
import { MapPin } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { getKey } from '../../untils';
import { PlaygroundMarker } from './playground-marker';
import { Playground } from '../../generated/schema';

export type ClusteredPlaygroundMarkersProps = {
  playgrounds: Playground[];
  onSelectPlayground?: (playgroundId: number) => void;
};

/**
 * The ClusteredPlaygroundMarkers component is responsible for integrating the
 * markers with the markerclusterer.
 */
export const ClusteredPlaygroundMarkers = ({
  playgrounds,
  onSelectPlayground,
}: ClusteredPlaygroundMarkersProps) => {
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const [selectedPlaygroundKey, setSelectedPlaygroundKey] = useState<
    number | null
  >(null);

  const selectedPlayground = useMemo(
    () =>
      playgrounds && selectedPlaygroundKey
        ? playgrounds.find((t) => t.id === selectedPlaygroundKey)!
        : null,
    [playgrounds, selectedPlaygroundKey]
  );

  // create the markerClusterer once the map is available and update it when
  // the markers are changed
  const map = useMap();
  const clusterer = useMemo(() => {
    if (!map) return null;

    return new MarkerClusterer({
      map,
    });
  }, [map]);

  useEffect(() => {
    if (!clusterer) return;

    clusterer.clearMarkers();
    clusterer.addMarkers(Object.values(markers));
  }, [clusterer, markers]);

  // this callback will effectively get passsed as ref to the markers to keep
  // tracks of markers currently on the map
  const setMarkerRef = useCallback((marker: Marker | null, key: string) => {
    setMarkers((markers) => {
      if ((marker && markers[key]) || (!marker && !markers[key]))
        return markers;

      if (marker) {
        return { ...markers, [key]: marker };
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [key]: _, ...newMarkers } = markers;

        return newMarkers;
      }
    });
  }, []);

  const handleInfoWindowClose = useCallback(() => {
    setSelectedPlaygroundKey(null);
  }, []);

  const handleMarkerClick = useCallback((playground: Playground) => {
    setSelectedPlaygroundKey(playground.id);
  }, []);

  return (
    <>
      {playgrounds.map((playground) => (
        <PlaygroundMarker
          key={getKey('playground-marker', playground.id)}
          playground={playground}
          onClick={handleMarkerClick}
          setMarkerRef={setMarkerRef}
        />
      ))}

      {selectedPlaygroundKey && (
        <InfoWindow
          headerContent={'Choiee'}
          anchor={markers[selectedPlaygroundKey]}
          onCloseClick={handleInfoWindowClose}
        >
          <div className='flex items-center justify-center gap-4'>
            <div className='relative'>
              <div className='h-10 w-10 rounded-full bg-primary opacity-10' />
              <MapPin className='absolute bottom-0 left-0 right-0 top-0 m-auto stroke-primary' />
            </div>
            <span
              className='max-w-60 cursor-pointer text-zinc-800 hover:text-primary hover:opacity-80'
              onClick={() => {
                selectedPlayground?.id &&
                  onSelectPlayground?.(selectedPlayground.id);
              }}
            >
              <h1 className='text-sm font-semibold underline'>
                {selectedPlayground?.name}
              </h1>
              <p className='truncate text-xs text-zinc-500'>
                {selectedPlayground?.address}
              </p>
            </span>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

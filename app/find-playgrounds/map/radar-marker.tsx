import { AdvancedMarker } from '@vis.gl/react-google-maps';

interface IRadarMarkerProps {
  position: google.maps.LatLngLiteral;
}

export const RadarMarker = ({ position }: IRadarMarkerProps) => {
  return (
    <AdvancedMarker position={position}>
      <span className='w- relative flex h-3'>
        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75' />
        <span className='relative inline-flex h-3 w-3 rounded-full bg-primary' />
      </span>
    </AdvancedMarker>
  );
};

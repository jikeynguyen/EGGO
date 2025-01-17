
import { Spinner } from '@/app/components/ui/spinner';
import { createGGMapUrl } from '@/app/untils/map.helper';


import { LatLng } from 'leaflet';
import { MapPinned } from 'lucide-react';
import { SyntheticEvent } from 'react';
import { twMerge } from 'tailwind-merge';

interface MapLinkButtonProps {
  coor?: LatLng;
  className?: string;
  borderless?: boolean;
  loading?: boolean;
}
const MapLinkButton = ({
  coor,
  className = '',
  borderless,
  loading = false,
}: MapLinkButtonProps) => {
  const openMap = (e: SyntheticEvent) => {
    e.preventDefault();
    window.open(createGGMapUrl(coor), '_blank');
  };
  const disabled = !coor;

  return (
    <button
      disabled={disabled}
      className={twMerge(
        'map-link-btn',
        'flex aspect-square h-full cursor-pointer items-center justify-center rounded-md border-[1px] border-zinc-300 p-2 text-zinc-600 transition-colors duration-200 hover:enabled:bg-zinc-100 disabled:cursor-not-allowed',
        disabled && 'map-link-btn-disabled text-zinc-300 opacity-60',
        borderless && 'border-none',
        className
      )}
      onClick={openMap}
    >
      {loading ? <Spinner className='h-4 w-4' /> : <MapPinned size={16} />}
    </button>
  );
};

export default MapLinkButton;

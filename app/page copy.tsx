'use client';

import { MapID } from "./constants/find-playgrounds.constant";
import FindPlaygrounds from "./find-playgrounds/find-playgrounds";
import { useMapControl } from "./find-playgrounds/map/map-control.hook";

;

export default function Find() {
  const mapControls = useMapControl(MapID.PLAYGROUND);

  return (
    <div className='fit-screen-choiee w-full'>
      <FindPlaygrounds mapControls={mapControls} />
    </div>
  );
}

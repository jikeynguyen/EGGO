'use client';

import { Spinner } from '@/components/common/spinner';
import { FindAvailablePlaygroundInput } from '@/generated/schema';
import { useDisclosure } from '@/hooks/disclosure.hook';
import { useCommonTranslation } from '@/hooks/i18n';
import { AppRoute } from '@/interfaces';
import { getBoundsByRadius, roundMinuteStep } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BookingMinuteStep } from '../../constants/find-playground.constant';
import FindBar from './find-bar/find-bar';
import { useFindPlayground } from './find-playground.hook';
import FindPlaygroundsMap from './map/find-playgrounds-map';
import { IMapControl } from './map/map-control.hook';
import { useFindPlaygroundSchema } from './zod/find-playgrounds-schema.hook';
import { TFindPlaygroundsSchema } from './zod/find-playgrounds-schema.zod';

function FindPlaygrounds(props: { mapControls: IMapControl }) {
  const { mapControls } = props;

  const commonTrans = useCommonTranslation();
  const schema = useFindPlaygroundSchema();
  const today = dayjs();
  const methods = useForm<TFindPlaygroundsSchema>({
    defaultValues: {
      radius: 1,
      location: {
        lat: 0,
        lng: 0,
      },
      date: today,
      from: roundMinuteStep(today, BookingMinuteStep),
      to: roundMinuteStep(today.add(1, 'hour'), BookingMinuteStep),
      bookable: false,
    },
    resolver: zodResolver(schema),
  });

  const { find, playgrounds, loading } = useFindPlayground();
  const findBarDisclosure = useDisclosure();

  const location = methods.watch('location');
  const latitude = methods.watch('location')?.lat;
  const longitude = methods.watch('location')?.lng;
  const radius = methods.watch('radius');

  console.log(location);

  const onFind = (form: TFindPlaygroundsSchema) => {
    const bounds = getBoundsByRadius(
      form.location.lat,
      form.location.lng,
      form.radius
    );
    mapControls.map?.fitBounds(bounds);

    const input: FindAvailablePlaygroundInput = {
      latitude: form.location.lat,
      longitude: form.location.lng,
      radius: form.radius * 1000,
      type: form.type,
    };

    if (form.bookable) {
      // Convert from string to date and ISO string with UTC
      const fromHour = form.from.get('hour');
      const fromMinute = form.from.get('minute');
      const from = form.date
        .hour(fromHour)
        .minute(fromMinute)
        .second(0)
        .toISOString();

      const toHour = form.to.get('hour');
      const toMinute = form.to.get('minute');
      const to = form.date
        .hour(toHour)
        .minute(toMinute)
        .second(0)
        .toISOString();

      input.filters = {
        from,
        to,
      };
    }

    find({
      input,
    });

    findBarDisclosure.close();
  };

  const handleSelectPlayground = (playgroundId: number) => {
    const from = methods.watch('from').toISOString();
    const to = methods.watch('to').toISOString();

    const searchParams = new URLSearchParams({
      from,
      to,
    });

    window
      .open(
        `${AppRoute.BOOKING}/${playgroundId}?${searchParams.toString()}`,
        '_blank'
      )
      ?.focus();
  };

  useEffect(() => {
    const lng = mapControls.detectedLocation?.longitude;
    const lat = mapControls.detectedLocation?.latitude;
    if (!lng || !lat) return;

    methods.setValue('location', {
      lat,
      lng,
      address: mapControls.detectedLocation?.address,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapControls.detectedLocation]);

  return (
    <div className='relative h-full w-full'>
      <FindBar
        methods={methods}
        onFind={methods.handleSubmit(onFind)}
        findBarDisclosure={findBarDisclosure}
      />
      {loading && (
        <div className='glassmorphism absolute bottom-8 left-0 right-0 z-10 mx-auto mt-2 flex w-fit items-center justify-center gap-2 rounded-full p-1 transition-all duration-300'>
          <Spinner className='my-auto h-8 w-8' />
          <p className='pr-2 text-xs'>{commonTrans('Finding')}</p>
        </div>
      )}

      <div className='relative h-full w-full'>
        <FindPlaygroundsMap
          controls={mapControls}
          radius={radius * 1000}
          center={{
            lat: latitude,
            lng: longitude,
          }}
          playgrounds={playgrounds}
          onSelectPlayground={handleSelectPlayground}
        />
      </div>
    </div>
  );
}

export default memo(FindPlaygrounds, (prev, next) => {
  return (
    prev.mapControls.detectedLocation?.latitude ===
      next.mapControls.detectedLocation?.latitude &&
    prev.mapControls.detectedLocation?.longitude ===
      next.mapControls.detectedLocation?.longitude &&
    prev.mapControls.map === next.mapControls.map
  );
});

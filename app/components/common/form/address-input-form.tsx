'use client';

import './address-input-form.scss';





import { Empty, Select, SelectProps } from 'antd';
import { debounce } from 'lodash';
import { MapPin } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';



import { useCommonTranslation } from '@/app/hooks/i18n';
import { BaseForm, IControlledFormProps } from './base-form';
import { LatLng } from 'leaflet';
import MapLinkButton from '@/app/find-playgrounds/map/map-link-button';
import { TAutocompletePrediction, useAutoCompletePlacesLazy } from '@/app/hooks/auto-complete-places.hook';
import { useDetailPlaceLazy } from './hook/detail-place.hook';
import { Spinner } from '../../ui/spinner';

interface AddressInputFormProps extends SelectProps, IControlledFormProps {
  name: string;
  mapId?: string;
  enableMapLink?: boolean;
  selectClassName?: string;
  mapLinkClassName?: string;
}

export const AddressInputForm = (props: AddressInputFormProps) => {
  const {
    control,
    label,
    description,
    name,
    optional,
    size = 'large',
    className,
    popupClassName,
    containerClassName,
    enableMapLink,
    selectClassName,
    mapLinkClassName,
    ...restProps
  } = props;

  const [results, setResults] = useState<TAutocompletePrediction[] | null>([]);
  const [location, setLocation] = useState<LatLng>();
  const [address, setAddress] = useState<string>();
  const commonTrans = useCommonTranslation();

  const [autoComplete, { loading: loadingAutoComplete }] =
    useAutoCompletePlacesLazy({
      onCompleted(data) {
        if (data.status === 'OK') {
          setResults(data.predictions);
        }
      },
    });

  const [detailPlace, { loading: loadingPlace }] = useDetailPlaceLazy();

  const onValueChange = debounce((text: string) => {
    if (!text) {
      setResults([]);
      return;
    }
    autoComplete({ input: text });
  }, 300);

  const onSelected = (
    result: TAutocompletePrediction,
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    // Set address string immediately so user can see their selected address
    const { main_text, secondary_text } = result.structured_formatting;
    const placeId = result.place_id;
    const addressString = `${main_text}, ${secondary_text}`;

    setAddress(addressString);
    // then fetch place detail (lat, lng)
    detailPlace(
      { placeid: placeId },
      {
        onCompleted: (data) => {
          const { status, result } = data;
          if (status === 'OK' && result) {
            const location = result.geometry?.location;
            if (location) {
              const { lat, lng } = location;
              setLocation(new LatLng(lat, lng));
              field.onChange({
                lat,
                lng,
                address: addressString,
              });
            }
          }
        },
      }
    );
  };

  const options = useMemo(() => {
    return results?.map((result) => ({
      value: result.place_id,
      label: (
        <div className='address-result flex gap-2 py-2 text-sm'>
          <MapPin size={20} className='mt-[2px] min-w-[20px] stroke-primary' />
          <div className='whitespace-pre-wrap'>
            <p className='address-result__main-text'>
              {result.structured_formatting.main_text}
            </p>
            <p className='address-result__sub-text'>
              {result.structured_formatting.secondary_text}
            </p>
          </div>
        </div>
      ),
    }));
  }, [results]);

  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      optional={optional}
      containerClassName={containerClassName}
      render={(field) => (
        <div
          className={twMerge('gap-2', className)}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) auto',
          }}
        >
          <Select
            size={size}
            value={address || field.value?.address}
            filterOption={false}
            loading={loadingAutoComplete}
            className={twMerge(selectClassName)}
            popupClassName={twMerge('pointer-events-auto', popupClassName)}
            showSearch
            onSearch={onValueChange}
            options={options}
            notFoundContent={
              loadingAutoComplete ? (
                <Spinner />
              ) : (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description={commonTrans('InputAddress')}
                />
              )
            }
            onChange={(value) => {
              const result = results?.find((r) => r.place_id === value);
              if (result) {
                onSelected(result, field);
              }
            }}
            {...restProps} // fix React does not recognize the `enableMapLink` prop on a DOM element
          />
          {enableMapLink && (
            <MapLinkButton
              loading={loadingAutoComplete || loadingPlace}
              coor={location}
              className={mapLinkClassName}
            />
          )}
        </div>
      )}
    />
  );
};

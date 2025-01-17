import { IUserQueryHookCallbackProps, useQueryHook, useQueryHookLazy } from "@/app/hooks/query.hook";


interface IDetailPlacePlacesProps
  extends IUserQueryHookCallbackProps<IDetailPlaceResult> {
  query?: {
    placeId?: string;
  };
}

interface IDetailPlaceResult {
  result: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    formatted_address: string;
  };
  status: string;
}

export function useDetailPlace(props: IDetailPlacePlacesProps) {
  const res = useQueryHook({
    url: '/api/places/detail',
    options: {
      params: {
        ...props.query,
      },
    },
  });

  return res;
}

export function useDetailPlaceLazy(
  props?: IUserQueryHookCallbackProps<IDetailPlaceResult>
) {
  const res = useQueryHookLazy<IDetailPlaceResult, { placeid: string }>({
    url: '/api/places/detail',
    options: {},
    ...props,
  });

  return res;
}

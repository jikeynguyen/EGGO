import { IUserQueryHookCallbackProps, useQueryHook, useQueryHookLazy } from "./query.hook";


interface IAutoCompletePlacesProps
  extends IUserQueryHookCallbackProps<IAutoCompleteResult> {
  query?: {
    input?: string;
  };
}

export interface IAutoCompleteResult {
  predictions: TAutocompletePrediction[];
  status: string;
}

export type TAutocompletePrediction = {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
};

export function useAutoCompletePlaces(props: IAutoCompletePlacesProps) {
  const res = useQueryHook({
    url: '/api/places/autocomplete',
    options: {
      params: {
        ...props.query,
      },
    },
  });

  return res;
}

export function useAutoCompletePlacesLazy(
  props: IUserQueryHookCallbackProps<IAutoCompleteResult>
) {
  const res = useQueryHookLazy({
    url: '/api/places/autocomplete',
    options: {},
    ...props,
  });

  return res;
}

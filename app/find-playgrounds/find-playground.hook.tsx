
import { useState } from 'react';
import { Exact, FindAvailablePlaygroundInput, Playground, useAvailablePlaygroundLazyQuery } from '../generated/schema';

export const useFindPlayground = () => {
  const [findPlayground, { loading, error }] =
    useAvailablePlaygroundLazyQuery();
  const [playgrounds, setPlaygrounds] = useState<Playground[]>([]);

  const find = (
    variables: Exact<{
      input: FindAvailablePlaygroundInput;
    }>
  ) => {
    findPlayground({
      variables: {
        findAvailablePlaygroundInput: variables.input,
      },
      onCompleted: (data) => {
        setPlaygrounds((data.availablePlayground as Playground[]) || []);
      },
      fetchPolicy: 'no-cache',
    });
  };
  return {
    find,
    playgrounds,
    loading,
    error,
  };
};

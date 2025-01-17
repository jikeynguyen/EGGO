import axios from 'axios';

interface IAddressResponse {
  results: {
    formatted_address: string;
    types: string[];
  }[];
}

export const useAddressFromCorsLazyQuery = () => {
  const fetch = (lat: number, lng: number) => {
    if (!lat || !lng) {
      return Promise.resolve({
        data: {
          results: [],
        },
      });
    }

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
      lat
    },${lng}&key=${process.env.APP_GOOGLE_MAPS_API_KEY}`;

    return axios.get<IAddressResponse>(url);
  };

  return [fetch];
};

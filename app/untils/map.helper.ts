import { LatLng } from "leaflet";


const EARTH_RADIUS = 6371; // Earth radius in kilometers

export const getBoundsByRadius = (lat: number, lng: number, radius: number) => {
  const radiusInKm = radius; // Convert radius to kilometers

  // Calculate the angular distance in radians
  const angularDistance = radiusInKm / EARTH_RADIUS;

  // Convert latitude and longitude from degrees to radians
  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180;

  // Calculate latitude bounds
  const minLat = latRad - angularDistance;
  const maxLat = latRad + angularDistance;

  // Calculate longitude bounds, adjust for east-west wrapping
  const minLng =
    lngRad - Math.asin(Math.sin(angularDistance) / Math.cos(latRad));
  const maxLng =
    lngRad + Math.asin(Math.sin(angularDistance) / Math.cos(latRad));

  // Convert back to degrees
  return {
    north: (maxLat * 180) / Math.PI,
    south: (minLat * 180) / Math.PI,
    east: (maxLng * 180) / Math.PI,
    west: (minLng * 180) / Math.PI,
  };
};

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

export function distance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

export function createGGMapUrl(coords?: LatLng) {
  return (
    coords &&
    `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`
  );
}

import { Status, Wrapper } from '@googlemaps/react-wrapper';

import MapViewport from './MapViewport';

const render = (status: Status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <></>;
};

function MapWrapper() {
  console.log(import.meta.env);
  // if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY) {
  //   return <h2>Add google key</h2>;
  // }

  return (
    <Wrapper apiKey="AIzaSyDn-FxSXbUqgvD0YxXpUht0DtVucM1fc5g" render={render}>
      <MapViewport center={{ lat: -23.567111, lng: -46.643225 }} zoom={16} />
    </Wrapper>
  );
}

export default MapWrapper;

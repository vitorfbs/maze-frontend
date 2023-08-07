/*global google*/

import { Children, cloneElement, Fragment, isValidElement, useEffect, useRef, useState } from 'react';

import { hooks } from '../../hooks';

function MapViewport({ onClick, onIdle, children, style, ...options }: MapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  hooks.useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  useEffect(() => {
    if (map) {
      ['click', 'idle'].forEach((eventName) => google.maps.event.clearListeners(map, eventName));

      if (onClick) {
        map.addListener('click', onClick);
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <Fragment>
      <div className="w-full h-full" ref={ref} style={style} />

      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          return cloneElement(child as React.ReactElement<{ map: google.maps.Map | undefined }>, { map });
        }
      })}
    </Fragment>
  );
}

export default MapViewport;

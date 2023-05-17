import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
// import FileKeeper from './FileKeeper';
import './Map.scss';
import { useEffect, useState } from 'react'; 

export default function Map(props) {
    let [map, setMap] = useState();

    const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic3dhcm5lciIsImEiOiJjbGY3a3FranIwNDJrM3Nydmt3ZnVhNTI0In0.HqgTiHI-nq0IkFRQbZ3XgA'

    useEffect(() => {
        setMap(new mapboxgl.Map({
            container: 'mapbox_element',
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [
              74.24426803763072,
              -2.2507114487818853
            ], // [lng, lat]
            zoom: 0.6851443156248076,
            accessToken: MAPBOX_ACCESS_TOKEN
        }));
    }, []);

    // VV to add controls to the top left of the map frame
    // map.addControl(new mapboxgl.NavigationControl(), "top-left");

    // VV to add points? not right. I need to find a better example of how you're actually supposed to do this, and then figure out how to combine it with useEffect() (or ditch that).
    // map.on('load', () => {
    //   map.addSource('streets', {
    //     type: 'geojson',
    //     data: './parks-outline.geojson',
    //     generateId: true
    //   });
    //   map.addLayer(
    //     {
    //       id: 'highlighted-park',
    //       type: 'fill',
    //       source: 'streets',
    //       paint: {
    //         'fill-color': [
    //           'case',
    //           ['boolean', ['feature-state', 'highlight'], false],
    //           'RGBA(117, 198, 132, 1.00)',
    //           'RGBA(117, 198, 132, 0)'
    //         ]
    //       }
    //     },
    //     'water-shadow'
    //   );

    //   const onSourceData = (event) => {
    //     if (!event.isSourceLoaded) return;
    //     map.off('sourcedata', onSourceData);
    //     for (const location of locations.features) {
    //       const popup = new mapboxgl.Popup().setHTML(
    //         `<h3>${location.properties.title}</h3><p>${location.properties.description}</p>`
    //       );

    //       const marker = new mapboxgl.Marker()
    //         .setLngLat(location.geometry.coordinates)
    //         .setPopup(popup)
    //         .addTo(map);

    //       let parks = [];

    //       marker.getElement().addEventListener('click', () => {
    //         map.flyTo({
    //           pitch: 45,
    //           center: location.geometry.coordinates,
    //           zoom: 15.3
    //         });
    //         parks = map.queryRenderedFeatures(
    //           map.project(location.geometry.coordinates),
    //           {
    //             layers: ['highlighted-park']
    //           }
    //         );
    //         map.setFeatureState(
    //           {
    //             id: parks[0].id,
    //             source: 'streets'
    //           },
    //           {
    //             highlight: true
    //           }
    //         );
    //       });

    //       popup.on('close', () => {
    //         map.flyTo({
    //           pitch: 0,
    //           center: [-87.622554, 41.852534],
    //           zoom: 9.3
    //         });
    //         map.setFeatureState(
    //           {
    //             id: parks[0].id,
    //             source: 'streets'
    //           },
    //           {
    //             highlight: false
    //           }
    //         );
    //       });
    //     }
    //   };
    //   map.on('sourcedata', onSourceData);
    // });
  

    // const location_points = [];
    // [
    //     {longitude: 00.0, latitude: 00.0},
    //     {longitude: 00.0, latitude: 00.0},
    //     {longitude: 00.0, latitude: 00.0}
    // ]
    // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    // somehow grab state from FileKeeper? I don't know how to appropriately squirrel that state and data away. I want to check if there's content, and if not, display a fake map and apply a disabled coloration over it.

    return(<>
        <div className="map-body">
            <h3>Map Goes Here</h3>
            <div id="mapbox_element"></div>
        </div>
    </>);
}
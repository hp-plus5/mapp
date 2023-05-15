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
            style: 'mapbox://styles/mapbox/streets-v11',
            accessToken: MAPBOX_ACCESS_TOKEN
        }));
    }, []);

    // const locations = {
    //   'features': [
    //     {
    //       'type': 'Feature',
    //       'properties': {
    //         'title': 'Lincoln Park',
    //         'description':
    //           'A northside park that is home to the Lincoln Park Zoo'
    //       },
    //       'geometry': {
    //         'coordinates': [-87.637596, 41.940403],
    //         'type': 'Point'
    //       }
    //     },
    //     {
    //       'type': 'Feature',
    //       'properties': {
    //         'title': 'Burnham Park',
    //         'description': "A lakefront park on Chicago's south side"
    //       },
    //       'geometry': {
    //         'coordinates': [-87.603735, 41.829985],
    //         'type': 'Point'
    //       }
    //     },
    //     {
    //       'type': 'Feature',
    //       'properties': {
    //         'title': 'Grant Park',
    //         'description':
    //           "A downtown park that is the site of many of Chicago's favorite festivals and events"
    //       },
    //       'geometry': {
    //         'coordinates': [-87.619185, 41.876367],
    //         'type': 'Point'
    //       }
    //     },
    //     {
    //       'type': 'Feature',
    //       'properties': {
    //         'title': 'Humboldt Park',
    //         'description': "A large park on Chicago's northwest side"
    //       },
    //       'geometry': {
    //         'coordinates': [-87.70199, 41.905423],
    //         'type': 'Point'
    //       }
    //     },
    //     {
    //       'type': 'Feature',
    //       'properties': {
    //         'title': 'Douglas Park',
    //         'description':
    //           "A large park near in Chicago's North Lawndale neighborhood"
    //       },
    //       'geometry': {
    //         'coordinates': [-87.699329, 41.860592],
    //         'type': 'Point'
    //       }
    //     },
    //     {
    //       'type': 'Feature',
    //       'properties': {
    //         'title': 'Calumet Park',
    //         'description':
    //           'A park on the Illinois-Indiana border featuring a historic fieldhouse'
    //       },
    //       'geometry': {
    //         'coordinates': [-87.530221, 41.715515],
    //         'type': 'Point'
    //       }
    //     },
    //     {
    //       'type': 'Feature',
    //       'properties': {
    //         'title': 'Jackson Park',
    //         'description':
    //           "A lakeside park that was the site of the 1893 World's Fair"
    //       },
    //       'geometry': {
    //         'coordinates': [-87.580389, 41.783185],
    //         'type': 'Point'
    //       }
    //     },
    //     {
    //       'type': 'Feature',
    //       'properties': {
    //         'title': 'Columbus Park',
    //         'description': "A large park in Chicago's Austin neighborhood"
    //       },
    //       'geometry': {
    //         'coordinates': [-87.769775, 41.873683],
    //         'type': 'Point'
    //       }
    //     }
    //   ],
    //   'type': 'FeatureCollection'
    // };

    // const map = new mapboxgl.Map({
    //   container: 'map', // HTML container id
    //   style: 'mapbox://styles/mapbox/light-v11', // style URL
    //   center: [-87.622554, 41.852534], // starting position as [lng, lat]
    //   zoom: 9.3
    // });

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
            <div id="mapbox_element">
            {/* className="mapboxgl-map" */}
                {/* <div className="mapboxgl-canary"></div>
                <div className="mapbox-canvas-parent">
                    <div className="mapbox-canvas-child"></div>
                </div>
                <div className="map-ctrl-bottom-left">
                    <div className="ctrl">
                        <a class="mapboxgl-ctrl-logo" target="_blank" rel="noopener nofollow" href="https://www.mapbox.com/" aria-label="Mapbox logo"></a>
                    </div>
                </div>
                <div className="map-ctrl-bottom-right">
                    <div className="mapbox-ctrl-attrib-button">
                        <div className="mapbox-i-button-inside-attr">
                        </div>
                    </div>
                    <div className="mapbox-ctrl-attrib-inner">
                    <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noreferrer" title="Mapbox" aria-label="Mapbox" role="listitem">&copy; Mapbox</a> <a href="https://www.openstreetmap.org/about/" target="_blank" rel="noreferrer" title="OpenStreetMap" aria-label="OpenStreetMap" role="listitem">&copy; OpenStreetMap</a> <a className="mapbox-improve-map" href="https://www.mapbox.com/contribute/" target="_blank" rel="noreferrer" title="Improve this map" aria-label="Improve this map" role="listitem">Improve this map</a>
                    </div>
                </div> 
                <div className="mapboxgl-canary"></div>*/}
            </div>
        </div>
    </>);
}
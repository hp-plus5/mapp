import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import Legend from './Legend';
import DataFromRails from './DataFromRails';
import Marker from './Marker';
import './Map.scss';
import { useEffect, useState } from 'react'; 

export default function Map(props) {
    const [map, setMap] = useState();
    const [marker, setMarker] = useState();
    
    const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic3dhcm5lciIsImEiOiJjbGY3a3FranIwNDJrM3Nydmt3ZnVhNTI0In0.HqgTiHI-nq0IkFRQbZ3XgA';

    useEffect(() => {
         const map = new mapboxgl.Map({
            container: 'mapbox_element',
            style: "mapbox://styles/mapbox/streets-v11",
            center: [
              -81.71,
              41.39
            ], // [lng, lat]
            zoom: 10,
            accessToken: MAPBOX_ACCESS_TOKEN
        });

        let marker = new mapboxgl.Marker()
            .setLngLat([-81.71, 41.39])
            .addTo(map);

        setMap(map);
        setMarker(marker);
        return () => map.remove();
    }, []);

    // VV to add controls to the top left of the map frame
    // map.addControl(new mapboxgl.NavigationControl(), "top-left");

    // VV to add points? not right. I need to find a better example of how you're actually supposed to do this, and then figure out how to combine it with useEffect() (or ditch that).
    // If I use this type of method, I should be sure to clean it up in useEffect in a function with the syntax `map.off("event")`
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
    //     'water-shadow' // <-- is this the name of the layer?
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
  

    // const location_points =
    // [
    //     {longitude: 00.0, latitude: 00.0},
    //     {longitude: 00.0, latitude: 00.0},
    //     {longitude: 00.0, latitude: 00.0}
    // ]

    //// to store data in localStorage, some tips.
    //// 1. useEffect to store data in localStorage whenever the input changes.
    // useEffect(() => {
    //     localStorage.setItem("chosen_key", JSON.stringify(location_points));
    // }, [variableThatChanges]);
    //// and to get it out again, use
    // let recalled_data = localStorage.getItem("chosen_key");
    // recalled_data = JSON.parse(recalled_data);

    // a separate example that works from react tutorial, meant to be paired with a dropdown menu of preset markers. it then updates a single marker on the map to be the new store, rather than adding a marker. a great choice for when I'm adding layers and trying to toggle visibility.
    // const stores = {
    //     central: [12.567898, 55.67583],
    //     norrebro: [12.553806, 55.699299],
    //     airport: [12.650784, 55.618042]
    // }
    // const handleDropdownSelection = (event) => {
    //     marker.setLngLat(stores[event.target.value]);
    //     setMarker(marker);
    // }

    // somehow grab state from FileKeeper? I don't know how to appropriately squirrel that state and data away. I want to check if there's content, and if not, display a fake map and apply a disabled coloration over it.

    const handleLayerToggle = (event) => {
        console.log("We toggled a layer");
        // i'm not sure how to make this properly dynamic.

        // stateVisibilityVariable = !stateVisibilityVariable
        // event.target.value.cssVisible = stateVisibilityVariable ? "true" : "false"
        // or
        // addLayer(stateVariableForThisBoundary), removeLayer(stateVariableForThisBoundary)?
        // or
        // stateVisibilityVariable = !stateVisibilityVariable
        // setStateVariableForThisBoundary(stateVariableForThisBoundary)
        // and then because useEffect it will automatically update? maybe?
    }
    const variableOne = "poop1";
    const variableTwo = "poop2";

    return(<>
        <div className="map-body">
            <DataFromRails variableOne={variableOne} variableTwo={variableTwo} />
            <Legend handleLayerToggle={handleLayerToggle} />
            <h3>Map Goes Here</h3>
            <Marker places={} />
            <div id="mapbox_element"></div>
        </div>
    </>);
}
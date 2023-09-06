import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
// import FileKeeper from './FileKeeper';
import Legend from './Legend';
import DataFromRails from './DataFromRails';
import './Map.scss';
import { useEffect, useState } from 'react'; 

export default function Map(props) {
    const [map, setMap] = useState();
    const [marker, setMarker] = useState();
    // // if you want a default value based on localStorage, here's how you do it:
    // // localStorage is expensive, so we want to make sure that React attempts to fetch it from localStorage rather than scope/(whatever we've used setSomeState to) only once, when we'll actually be using that value on first page load. After that, normally, every re-render evaluates the expression passed to useState before taking on the new value last set using setSomeState. To solve this as a performance problem (we don't wanna call on getItem all the time), instead of passing in an expression, we'll pass a function that React can say "no thanks, I actually don't need that" to. Here's the expression we don't want:
    // const [someState, setSomeState] = useState(localStorage.getItem("some-state"));
    // // instead, we'll pass it a function:
    // const [someState, setSomeState] = useState(() => localStorage.getItem("some-state") ?? "");
    // // this is called "lazy initial state".

    // this is an attempt to let us hit "re-render" instead of making another whole call on the API for map creation. I'm not clear on how that's supposed to work.
    const [random, setRandom] = useState(Math.random());

    const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic3dhcm5lciIsImEiOiJjbGY3a3FranIwNDJrM3Nydmt3ZnVhNTI0In0.HqgTiHI-nq0IkFRQbZ3XgA';
    // access token from react tutorial:
    // pk.eyJ1Ijoic3dhcm5lciIsImEiOiJjbGY3a3FranIwNDJrM3Nydmt3ZnVhNTI0In0.HqgTiHI-nq0IkFRQbZ3XgA

    useEffect(() => {
         const map = setMap(new mapboxgl.Map({
            container: 'mapbox_element',
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [
              74.24426803763072,
              -2.2507114487818853
            ], // [lng, lat]
            zoom: 0.6851443156248076, // the globe. 2 is a continent. 10 is Strongsville to downtown Cleveland.
            accessToken: MAPBOX_ACCESS_TOKEN
            // bc i don't think i need this, and i don't want it explicitly passed through the internet and something tells me mapbox grabs it the way it does SO that your token doesn't get through in an easily manipulateable way
        }));
        let marker = new mapboxgl.Marker()
            .setLngLat([12.567898, 55.67583])
            .addTo(map);
        setMarker(marker);
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
  
    // This is helpful for sample geoJSON: https://geojson.io/#map=2/0/20
    // these are the docs for datasets. Most helpful about halfway down the page with the header "About datasets":
    // https://docs.mapbox.com/help/tutorials/add-points-pt-1/#create-a-dataset

    const geojson_sample = {
        "type": "FeatureCollection",
        "features": [ // these are points, lines, and polygons on the map. built-in functionality, supposedly: drag features across map to re-place them, select and hit delete, and clicking to view properties. I may have misunderstood this and they mean this is functionality within their data editor. (See editor here: https://studio.mapbox.com/datasets/swarner/clm7u87ht2hgn2bmwpuorg76b/edit/#7/41.43/-82.1)
            {
                "type": "Feature",
                "properties": { // this is the spot for custom fields
                    "title": "San Blas Islands",
                    "imageUrl": "https://c1.staticflickr.com/5/4241/35467523155_346b08810f_q.jpg",
                    "type": "beach",
                    "iconSize": [60, 60]
                },
                "geometry": {
                    "type": "Point", // yes, this will be the type for our "places"
                    "coordinates": [
                        -78.82,
                        9.57,
                    ]
                }
            },
        ]
    };
    geojson_sample.features.forEach((marker) => {
        new mapboxgl.Marker()
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    })

    const csv_data_sample =
    [
        {longitude: 00.0, latitude: 00.0},
        {longitude: 00.0, latitude: 00.0},
        {longitude: 00.0, latitude: 00.0}
    ]
    // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    // Custom Calls to create custom marker. To be consolidated with this example from the docs:
    // https://github.com/mapbox/mapbox-react-examples/blob/master/markers-custom/src/Map.js#L10
        // const svgMarker =`<img src="./src/images/icons/marker-icons/mapbox-marker-icon-blue.svg"; alt="colored marker" />`
        // const svgMarker = `<img src="/mapbox-marker-icon-blue.svg" alt="colored marker" />`;
        // const placeholder = document.createElement('div');
        // placeholder.innerHTML = svgMarker;

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
            <button id="re-render" onClick={() => setRandom(Math.random())}>
                Re-render
            </button>
            <DataFromRails variableOne={variableOne} variableTwo={variableTwo} />
            <Legend handleLayerToggle={handleLayerToggle} />
            <h3>Map Goes Here</h3>
            <div id="mapbox_element"></div>
        </div>
    </>);
}
export default function Marker(props) {
    const csvRow = props.places;
    // this works, but I need it to become case insensitive. I think it's fine that it takes strictly 2 values, although I'd like to find a const way to record those so we only need to change them in one place.
    const findOneCoordinate = (row, values) => {
        if (row[values[0]] || row[values[1]]) {
            return row[values[0]] || row[values[1]];
        }
    }

    // this works!
    const findCoordinates = (row) => {
        let lat = 0;
        let lng = 0;
        lat = findOneCoordinate(row, ["LATITUDE", "LAT"]);
        lng = findOneCoordinate(row, ["LONGITUDE", "LNG"]);
        return [lat, lng];
    }

    const collectProperties = (csvRow) => {
        const users_properties = {};
        for (let [key, value] of Object.entries(csvRow)) {
            users_properties[key] = value;
        }
        return users_properties;
    }

    const hasRequiredElements = (row) => {
        return Object.keys(row).some((column_name) => column_name.toUpperCase() == "LONGITUDE") && Object.keys(row).some((column_name) => column_name.toUpperCase() == "LATITUDE");
    }

    const addMarker = (csvRow) => {
        let marker = new mapboxgl.Marker().setLngLat(findCoordinates(csvRow));
        console.log(`Marker! ${marker}`);
        console.log(`...and its properties! ${marker.properties}`);
        marker.properties = collectProperties(csvRow);
        marker.addTo(map);
    }

    csvData.forEach((csvRow) => {
        // element:
        // {
        //     LATITUDE: '41.25', 
        //     LONGITUDE: '-80.70', 
        //     NAME: "SOCCER 6", 
        //     NOTES: "", 
        //     SIZE: "FIELD", 
        //     SPORT: "SOCCER" 
        // }
            if (!hasRequiredElements(csvRow)) {
                return "Columns in CSV file must contain include latitude and longitude in order to be added to the map.";
            } else {
                addMarker(csvRow);
            }
        });
    };

    return(<>
        <h3>Marker Goes Here</h3>
        <></>
    </>);
}

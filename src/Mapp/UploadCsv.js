import { useState } from "react";
import Table from "./Table";

export default function UploadCsv() {
    var [file, setFile] = useState();
    var [places, setPlaces] = useState([]);
    const fileReader = new FileReader();
    const POSSIBLE_CSV_DELIMITERS = [",", ";", "|"]

    const handleOnChange = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setFile(event.target.files[0]);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (file) {
            fileReader.onload = function (event) {
                const fileOutput = event.target.result;
                csvFileToArray(fileOutput);
            };

            fileReader.readAsText(file);
        }
    };

    // TODO-SAM: make this convert to JSON instead. Include headerkeys, defined below this method. Then save that JSON to Redux. Once that state is shared, separate the Table component from this and add it to Mapp.js instead.
    /**
     * csvFileToArray()
     * @param {fileUploadEventOutput} string 
     * @returns set state variable `places`, which represents rows[], each of which contains an object created of column values of the CSV
     * [  
     *   {
     *      Latitude: '41.39',
     *      Longitude: '-81.71',
     *      Size: "STADIUM",
     *   },
     *   {
     *      Latitude: '41.2',
     *      Longitude: '-81.2',
     *      Size: "FIELD",
     *   } 
     * ]
     */
    const csvFileToArray = string => {
        let rawHeaderRow =  string.slice(0, string.indexOf("\n"));
        let [delimiter, headerWithoutDelimiterSpecification] = determineDelimiter(rawHeaderRow);

        let csvHeader = headerWithoutDelimiterSpecification.split(delimiter);
        // remove empty strings from headers array
        csvHeader = csvHeader.filter(Boolean);
        // csvHeader => ["LATITUDE", "LONGITUDE", "NAME", "NOTES", "SPORT", "SIZE"]

        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
        // csvRows => ["41.61,-81.6,STADIUM", "41.2,-81.2,FIELD"]; each row is a string
    
        const places = csvRows.map(row => {
            let values = row.split(delimiter);
          
            // remove empty strings from headers array
            values = values.filter(Boolean);
                // ["41.39", "-81.71", "FIELD"] (etc)
            const obj = csvHeader.reduce((row_object, header, indexOfHeader) => {
                // row_object => {"Latitude":"41.39", "Longitude":"-81.71", "Size":"FIELD"}
                // header => "Latitude"
                // index => 0
                /* `Reduce`, like `map`, iterates through a collection. The object will remain the same through each call to reduce (one call per row), but the header and the indexOfHeaderd values will iterate through however many columns the user has uploaded. I think the object `row_object` is created after the completion of the method, but is available upon `console.log()` so early due to a callback method. */

                // {"Latitude":"41.39", "Longitude":"-81.71","Size":"FIELD"}["Latitude"] 
                // is being assigned the value of: ["row1value1/41.39", "row1value2/-81.71", "row1value2/FIELD"][indexOfHeader]
                row_object[header] = values[indexOfHeader];

                // for quicker debugging:
                // console.log(["This is the row object: ", row_object, "This is the header: ", header, "This is the index of header: ", header, "This is the row object [header]: ", row_object[header], "This is value index: ", values[indexOfHeader]])
                return row_object;
            }, {});

            return obj;
        });
        
        setPlaces(places);
    };

    /**
     * Finds the delimiter of the CSV
     */
    function determineDelimiter(unformattedHeaderRow) {
        let [specifiedDelimiter, specificationFreeHeaderRow] = checkSpecification(unformattedHeaderRow);
        if (specifiedDelimiter) { // falsy if empty string is returned
            return [specifiedDelimiter, specificationFreeHeaderRow]
        } else {
            let delimiter = guessDelimiter(unformattedHeaderRow);
            return [delimiter, unformattedHeaderRow]
        }
    }

    /**
     * Determines if there is an explicitly specified delimiter at the start of the CSV file
     */
    const checkSpecification = headerRow => {
        let specificationKey = headerRow.substring(0, 4);
        if (specificationKey == "sep=") {
            let delimiter = headerRow.substring(4, 5)
            return [delimiter, headerRow.substring(5)];
        } else {
            return ["", headerRow];
        }
    }

    /**
     * Guesses a number of common CSV file delimiters
     */
    const guessDelimiter = unformattedHeaderRow => {
        let delimiter = "";
        POSSIBLE_CSV_DELIMITERS.forEach(possibleDelimiter => {
            let splitHeaderColumns = unformattedHeaderRow.split(possibleDelimiter);
            if (splitHeaderColumns.length > 1) {
                delimiter = possibleDelimiter;
            }
        });
        return delimiter;
    }

    /**
     * headerKeys (if there are columns without a label, their value will be '' or '\r'):
     * ['LATITUDE', 'LONGITUDE', 'NAME', 'NOTES', 'SPORT', 'SIZE', '', '\r']
     */
    const headerKeys = Object.keys(Object.assign({}, ...places));

    return(<>
        <form onSubmit={handleOnSubmit}>
            <label>
                Upload
            <input type="file" accept=".csv" id="fileUploadId"
            onChange={handleOnChange}  /> 
            {/* `value={file}` was in this input element and the console became very angry. */}
            </label>
            <button type="submit">display spreadsheet</button>
        </form>
        <Table fileHeaders={headerKeys} filePlaces={places} />
    </>);
}
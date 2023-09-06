import { useState } from "react";
import Table from "./Table";

export default function UploadCsv() {
    var [file, setFile] = useState();
    var [array, setArray] = useState([]);
    const fileReader = new FileReader();

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
     * @returns CSV array called rows[], each of which contains an object created of column values
     * [  
     *   {
     *      LATITUDE: '41.25', 
     *      LONGITUDE: '-80.70', 
     *      NAME: "SOCCER 6", 
     *      NOTES: "", 
     *      SIZE: "FIELD", 
     *      SPORT: "SOCCER" 
     *   },
     *   {
     *      LATITUDE: '41.2', 
     *      LONGITUDE: '-81.2', 
     *      NAME: "SOCCER 5", 
     *      NOTES: "I enjoyed soccer once", 
     *      SIZE: "STADIUM", 
     *      SPORT: "SOCCER" 
     *   } 
     * ]
     */
    const csvFileToArray = string => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    
        const array = csvRows.map(row => {
          const values = row.split(",");
          const obj = csvHeader.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
          }, {});

          return obj;
        });
    
        setArray(array);
    };

    /**
     * headerKeys:
     * ['LATITUDE', 'LONGITUDE', 'NAME', 'NOTES', 'SPORT', 'SIZE', '', '\r']
     */
    const headerKeys = Object.keys(Object.assign({}, ...array));

    return(<>
        <form onSubmit={handleOnSubmit}>
            <label>
                Upload
            <input type="file" accept=".csv" id="fileUploadId"
            onChange={handleOnChange} value={file} />
            </label>
            <button type="submit">upload</button>
        </form>
        <Table fileHeaders={headerKeys} fileInfo={array} />
    </>);
}
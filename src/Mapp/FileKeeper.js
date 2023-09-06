import { useState } from "react";
import UploadEntryForm from "./UploadEntryForm";
import FileView from "./FileView";

export default function FileKeeper() {
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

    return (<>
        <UploadEntryForm 
            handleOnChange={handleOnChange} 
            handleOnSubmit={handleOnSubmit}
        />
        <FileView fileHeaders={headerKeys} fileInfo={array} />
    </>);
}
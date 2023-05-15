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

    const csvFileToArray = string => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    
        const array = csvRows.map(i => {
          const values = i.split(",");
          const obj = csvHeader.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
          }, {});
          console.log(obj);
          return obj;
        });
    
        setArray(array);
    };

    const headerKeys = Object.keys(Object.assign({}, ...array));

    return (<>
        <UploadEntryForm 
            handleOnChange={handleOnChange} 
            handleOnSubmit={handleOnSubmit}
        />
        <FileView fileHeaders={headerKeys} fileInfo={array} />
    </>);
}
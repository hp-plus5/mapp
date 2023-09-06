import './Mapp.scss';
import UploadCsv from "./UploadCsv";
import Map from "./Map";

export default function Mapp() {
    return(
        <div id="mapp">
            <UploadCsv />
            <Map />
        </div>
    );
}
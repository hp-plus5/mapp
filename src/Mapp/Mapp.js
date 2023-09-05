import './Mapp.scss';
import FileKeeper from "./FileKeeper";
import Map from "./Map";

export default function Mapp() {
    return(
        <div id="mapp">
            <FileKeeper />
            <Map />
        </div>
    );
}
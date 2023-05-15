import './Mapp.scss';
import FileKeeper from "./FileKeeper";
import Map from "./Map";

export default function Mapp() {


    return(
        <div id="mapp">
            <h1>MAPP</h1>
            <h4>Think It, Mapp It, Make It</h4>
            <FileKeeper />
            <Map />
        </div>
    );
}
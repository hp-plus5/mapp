import './Mapp.scss';
import UploadCsv from "./UploadCsv";
import Map from "./Map";
import SavedCollectionList from './SavedCollectionList';

export default function Mapp() {
    return(
        <div id="mapp">
            <UploadCsv />
            <Map />
            <SavedCollectionList />
        </div>
    );
}
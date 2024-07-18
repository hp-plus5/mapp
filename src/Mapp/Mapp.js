import UploadCsv from "./UploadCsv";
import Map from "./Map";
import SavedCollectionList from './SavedCollectionList';

export default function Mapp() {
    return(
        <div>
            <UploadCsv />
            <Map />
            <SavedCollectionList />
        </div>
    );
}
import UploadCsv from "./UploadCsv";
import Map from "./Map";
import AddAsCollection from "./AddAsCollection";
import SavedCollectionList from './SavedCollectionList';

export default function Mapp() {
    return(
        <div>
            <UploadCsv />
            <Map />
            <AddAsCollection />
            <SavedCollectionList />
        </div>
    );
}
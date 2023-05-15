export default function UploadEntryForm(props) {
    return(
        <form onSubmit={props.handleOnSubmit}>
            <label>
                Upload
            <input type="file" accept=".csv" id="fileUploadId"
            onChange={props.handleOnChange} value={props.file} />
            </label>
            <button type="submit">upload</button>
        </form>
    );
}
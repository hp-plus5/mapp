// import './ToDoItemForm.scss';

export default function ToDoEntryForm(props) {
    return(
        <form className="field" onSubmit={props.onFormSubmission}>
            <label>
                New Item:
            <input type="text" onChange={props.onEntryChange} value={props.entry} />
            </label>
            <button type="submit">+</button>
        </form>
    );
}
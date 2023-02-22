// import './ToDoItemForm.scss';

export default function ToDoItemForm(props) {
    console.log("Form: ");
    console.log(props);
    return(
        <form onSubmit={e=>props.onFormSubmission(e)}>
            <label>
                To Do:
                <input onChange={props.onItemChange} value={props.text} />
            </label>
            <button type="submit">+</button>
        </form>
    );
}
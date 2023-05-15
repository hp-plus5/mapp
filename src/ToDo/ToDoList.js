import {useState} from "react";
import ToDoEntryForm from "../ToDo/ToDoItemForm.js";
import ToDoItemDisplay from "../ToDo/ToDoItemDisplay.js";
import ToDoneItemDisplay from "../ToDo/ToDoneItemDisplay.js";
import "../ToDo/ToDo.scss";

export default function ToDoList() {
    const [toDoEntry, setToDoEntry] = useState("");
    const [toDos, setToDos] = useState(["Yawn", "Walk at least 7 dogs", "Contemplate all croissants", "If there's really a reason why we're here - a greater intelligence or just the nature of matter - wouldn't we already be doing it by design? This is a really long item just to show that the page is prepared to handle diverse user content."]);
    const [toDones, setToDones] = useState([]);

    function handleEntryChange(event) {
        return setToDoEntry(event.target.value);
    }

    function handleSubmitToDo(event) {
        event.preventDefault();
        if (toDoEntry !== "") {
            setToDos([...toDos, toDoEntry]);
            resetForm();
        }
        // const formData = new FormData(newToDo);
        
        // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });
        // Or you can work with it as a plain object:
        // const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);
    }

    function resetForm() {
        setToDoEntry("");
    }

    function handleDeleteToDo(event) {
        var itemToDelete = event.target.value;
        var newList = toDos.filter(item => item !== itemToDelete);
        setToDos(newList);
    }

    function handleCheckboxClick(event) {
        let newItem = event.target.value;
        if (event.target.checked) {
            const completedItems = [...toDones, newItem];
            setToDones(completedItems);
            handleDeleteToDo(event);
        }
    }

    function handleDeleteToDone(event) {
        var doneItemToDelete = event.target.value;
        var newList = toDones.filter(item => item !== doneItemToDelete);
        setToDones(newList);
    }

    return(<>
        <ToDoEntryForm onFormSubmission={handleSubmitToDo} onEntryChange={handleEntryChange} entry={toDoEntry} />
        <ToDoItemDisplay onDeleteToDo={handleDeleteToDo} onCheckboxClick={handleCheckboxClick} list={toDos} />
        <ToDoneItemDisplay  onDeleteToDone={handleDeleteToDone} list={toDones} />
    </>);
}
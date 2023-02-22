import {useState} from "react";
import ToDoItemForm from "./ToDoItemForm.js";
import ToDoItemDisplay from "./ToDoItemDisplay.js";

export default function ToDoList() {
    const [toDoText, setToDoText] = useState("");
    const [currentToDo, setCurrentToDo] = useState({});
    const [toDos, setToDos] = useState([]);

    function handleItemChange(event) {
        return setToDoText(event.target.value);
    }

    function handleSubmitToDo(event) {
        event.preventDefault();
        var newToDo = { text: toDoText }
        setCurrentToDo(newToDo);
        console.log("Submitted this text: "+toDoText+" and this todo was just made: ");
        console.log(newToDo);
        // const formData = new FormData(newToDo);
        
        // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });
        // Or you can work with it as a plain object:
        // const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);
        var newToDoItemList = [...toDos, newToDo];
        setToDos(newToDoItemList);
        console.log("Successfully added to do to the list: ");
        console.log(newToDoItemList);
        console.log(toDos);
        // resetForm();
    }

    function resetForm() {
        setToDoText("");
        setCurrentToDo({});
    }

    function handleDeleteToDo(itemToDelete) {
        var newList = toDos.filter(item => item !== itemToDelete);
        setToDos(newList);
    }

    return(<>
        <ToDoItemForm onFormSubmission={handleSubmitToDo} onItemChange={handleItemChange} text={toDoText} />
        Existing:
        {toDos.map(item => <p>{item}</p>)}
        <ul>
        {toDos.map((item, index) => 
            <li>
                <ToDoItemDisplay onDeleteToDo={handleDeleteToDo} key={index} item={item} />
            </li>
        )}
        </ul>
    </>);
}
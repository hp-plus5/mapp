// import './ToDoItemForm.scss';

export default function ToDoItemDisplay(props) {
    console.log("Display: ")
    console.log(props);
    const {onDeleteToDo, item, ...rest} = props;
    // console.log(index);

    return(
    <div>
        To Do:
        <p>{item.text}</p>
        <button 
            onClick={onDeleteToDo(item)} 
            type="button">
                -
            </button>
    </div>
    );
}
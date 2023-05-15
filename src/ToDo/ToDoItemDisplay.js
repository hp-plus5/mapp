import './ToDo.scss';

export default function ToDoItemDisplay(props) {
    return(<>
    <h2>To Do:</h2>
        {props.list.map((item, index) => 
        <div key={index} className="listedItem">
            <input id={"todo-"+index} type="checkbox" onClick={props.onCheckboxClick} value={item}/>
            <label className="itemText">{item}</label>
            <button 
                onClick={event => props.onDeleteToDo(event)}
                type="button"
                value={item}>
                    x
            </button>
        </div>
        )}
    </>
    );
}
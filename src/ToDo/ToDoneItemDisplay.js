import './ToDo.scss';

export default function ToDoneItemDisplay(props) {
    return(<>
    {props.list.length > 0 && <span className="tada"><h2>Tada!</h2><span className="notification">{props.list.length}</span></span>}
        {props.list.map((item, index) => 
        <div key={index} className="listedItem">
            <span className="itemText">{item}</span>
            <button 
                onClick={event => props.onDeleteToDone(event)}
                type="button"
                value={item}>
                    x
            </button>
        </div>
        )}
    </>);
}
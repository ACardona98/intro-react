import React from 'react';

function TodoItem (props) {
    return (
        <li>
            <input type="checkbox" defaultChecked={props.completed} onChange={props.onComplete}/>
            <p>{props.text}</p>
            <span onClick={props.onDelete} className="Button-delete"> X </span>
        </li>
    );
}

export { TodoItem };
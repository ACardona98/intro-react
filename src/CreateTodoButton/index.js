import React from 'react';

function CreateTodoButton (props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton()}
            style={{'zIndex':'1'}}>{props.openModal ? 'X': '+'}
        </button>
    );
}
export { CreateTodoButton };
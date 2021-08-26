import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (e) => {
        //addTodo
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onAdd}>
            <label>Escribe tu nueva TODO</label>
            <br />
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla"
            />
            <div>
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm }
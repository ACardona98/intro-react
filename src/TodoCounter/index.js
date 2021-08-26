import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter () {
    const { totalTodos, totalCompletedTodos } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Has completado {totalCompletedTodos} de {totalTodos} TODOs</h2>
    );
}
export { TodoCounter };
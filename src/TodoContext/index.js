import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    //se recibe un objeto con los nombres de los atributos y con : se puede renombrar los atributos
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("TODOS_V1", []);

    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);


    const completedTodos = todos.filter((todo) => !!todo.completed);
    const totalTodos = todos.length;
    const totalCompletedTodos = completedTodos.length;

    let searchedTodos = todos;
    if (searchValue.length > 0) {
        searchedTodos = todos.filter((todo) =>
            todo.text.toUpperCase().includes(searchValue.toUpperCase())
        );
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text
        });
        saveTodos(newTodos);
    };

    const completeTodos = (e, text) => {
        const todoIndex = todos.findIndex((todo) => todo.text == text);
        const newTodos = [...todos];
        let todoToComplete = newTodos[todoIndex];
        todoToComplete.completed = e.target.checked;
        saveTodos(newTodos);
    };

    const deleteTodos = (e, text) => {
        const todoIndex = todos.findIndex((todo) => todo.text == text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            totalCompletedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            addTodo,
            deleteTodos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}
export {TodoContext, TodoProvider};
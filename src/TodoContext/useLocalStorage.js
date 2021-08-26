import React from 'react';

export function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    //esta vacio
                    parsedItem = initialValue;
                    localStorage.setItem(itemName, JSON.stringify(parsedItem));
                } else {
                    //esta con todos
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (err) {
                setError(err);
            }
        }, 1000);
    });

    const saveItem = (newItem) => {
        try {
            const stringItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };
    return { item, saveItem, loading, error };
}
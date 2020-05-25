import React, { useState } from 'react';

function Example() {
    // Объявляем новую переменную состояния "count"
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('банан');
    const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);
    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <p>Age = {age} eat = {fruit}</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}
export default Example

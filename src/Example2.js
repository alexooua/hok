import React, { useState, useEffect } from 'react';

function Example2() {
    const [count, setCount] = useState(0);

    // По принципу componentDidMount и componentDidUpdate:
    useEffect(() => {
        // Обновляем заголовок документа, используя API браузера
        document.title = `Вы нажали ${count} раз`;
        const img = document.createElement('img')
        img.src = "http://shtychka.net/media/img/frontend/images/logo.png"
        document.querySelector('#img').appendChild(img)
    });

    return (
        <div>
            <p>Вы нажали {count} раз  </p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
            <div id="img"></div>
        </div>
    );
}

export default Example2

import { useState } from "react";


const App = () => {
    const [name, setName] = useState('Wesley');

    const handleClick = ()=> {
        setName('Isaias')
    }


    return (
        <div>
            Meu nome é {name}.
            <button onClick={handleClick}>Clique aqui</button>
        </div>
    );
}

export default App;
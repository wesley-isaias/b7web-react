import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState ('');
  const [lastname, setlastName] = useState('');
  const [age,setAge] = useState ('')


    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)  }
    
      
      const handlelastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setlastName(event.target.value)  }  
      
        const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
          setAge(event.target.value)  }
      
    
   

  return (
    <div>
      <div>
        Nome:
        <input type="text" value ={name} onChange = {handleInput}  />
      </div>

      <div>
        Sobrenome:
        <input type="text"  value={lastname}  onChange = {handlelastName}/>
      </div>

      <div>
        Idade:
        <input type="text" value={age}  onChange = {handleAge} />
      </div>

      <hr/>

      Olá {`${name} ${lastname}`} , tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;
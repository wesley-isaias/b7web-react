import { useState } from "react";


export const App = () => {
  const [show,setShow] = useState(false);
  const handleClick = () => {
    return (
      setShow(!show)
      );
  }

  return (
    <div>

      <button onClick = { handleClick }>{show? 'ocultar' : 'mostrar'}</button>

      {show  && 
        <div>bla bla bla

        </div>
      }
    
    </div>
  );
}

export default App; 
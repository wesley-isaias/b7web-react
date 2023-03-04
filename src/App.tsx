import { Botao } from "./components/Botao";


export const App = () => {
  let textodoBotao = "clic no botãoo";
  
  const botaoEventAction = (txt: string) => {
    alert('Frase do app:' +txt)
  }
  
  return (
    <div>
      <Botao text = {textodoBotao}   clickFn = {botaoEventAction}/>
    </div>
  );
}

export default App;
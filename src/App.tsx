import * as C from './components/Styles/styles'


const App = () => {
  return(
    
      <C.Container bgCollor = "#0000FF">
        Texto do Container.
      <C.Botao bg= "#FF0000" >Botao Grande</C.Botao> 
      <C.Botao bg= "#00FF00"  small >Botao pequeno</C.Botao> 
      </C.Container>


  );
}

export default App;
import * as C from './components/Styles/styles'

const App = () => {
  return(   
      <C.Container bgCollor = "#0000FF">
       <span>Texto do Container</span>
       <a href="" className= "link" > Link qualquer</a>
      <C.Botao bg= "#FF0000" >Botao Grande</C.Botao> 
      <C.Botao bg= "#00FF00" small >Botao pequeno</C.Botao> 
      </C.Container>
  );
}

export default App;
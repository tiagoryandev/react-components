import Item from "./components/item";
import Form from "./components/form";
import Button from "./components/button";

const App = () => {
  return <>
    <h1>Meu Primeiro Component no React</h1>
    <Item text="React trabalha com Components" />
    <Item text="Cada Componente pode ter várias Propriedades (Props)" />
    <Form />
    <Button />
  </>
}

export default App;
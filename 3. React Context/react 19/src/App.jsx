import { CartContextProvider } from "./context";
import Header from  "./components/Header";
import List from "./components/List";
import './App.css'

function App() {
  return (
    <CartContextProvider>
      <Header />
      <List />
    </CartContextProvider>
  )
}

export default App

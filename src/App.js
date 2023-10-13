import './App.css';
import { Header } from './components/header';
import { Orders } from './components/orders/orders';
function App() {
  return (
    <div className="App">
       <Header/>
       <Orders/>
    </div>
  );
}

export default App;

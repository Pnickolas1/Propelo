import './App.css';
import '../node_modules/react-vis/dist/style.css';
import { Tickets } from '../src/views/Tickets'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Peter Tountas, November 26, 2021
      </header>
      <main>
        <Tickets/>
      </main>
    </div>
  );
}

export default App;

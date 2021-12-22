import './css/style.css';
import Btns from './components/Btns.js';
import Panels from './components/Panels.js';

function App() {
  return (
    <div className="App">
      <h1>TYPOGRAPHY <b>DESGIN</b></h1>

      <Btns />

      <ul className="panel">
          <Panels />
      </ul>
    </div>
  );
}

export default App;

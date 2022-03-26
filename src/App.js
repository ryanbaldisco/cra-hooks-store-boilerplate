import './App.css';
import { StoreProvider } from './store/StoreContext';
import Logo from './components/Logo';
import Button from './components/Button';

function App() {

  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <Logo/>
          <Button/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;

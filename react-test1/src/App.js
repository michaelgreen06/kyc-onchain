import './App.css';
import Logo from './Components/Logo';
import Step from './Components/Step/Step';
import TextInput from './Components/TextInput/TextInput';

function App() {
  return (
    <div className="App flex flex-column vh-100">
      <header className="w-100 pa3 ph5-ns">
        <Logo />
      </header>
      <div className="flex-auto w-100 pa3">
        <div className="mb4">
          <Step />
        </div>
        <div className="mt4">
          <TextInput />
        </div>
      </div>
    </div>
  );
}

export default App;

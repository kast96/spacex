import './App.css';
import Header from './components/Header/Header';
import Rocket3d from './components/Three/Rocket';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="logo-rocket">
        <Rocket3d />
      </div>
    </div>
  );
}

export default App;

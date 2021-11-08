import './App.scss';
import Header from './components/Header/Header';
import Rocket3d from './components/Three/Rocket';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="logo-rocket">
        <Rocket3d />
      </div>
      <div className="planet">
        <div className="mars">
          <div className="img-map"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

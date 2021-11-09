import './App.scss';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MobileMainMenu from './components/Header/MobileMainMenu/MobileMainMenu.jsx';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <div className="container">
          <Header />

          <Switch>
						<Route exact path="/">
						</Route>
						<Route path="/rockets/">
            <div>Ракеты</div>
						</Route>
						<Route path="*">
							<div>404</div>
						</Route>
					</Switch>

          <div className="planet">
            <div className="mars">
              <div className="img-map"></div>
            </div>
          </div>
        </div>
        <MobileMainMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;

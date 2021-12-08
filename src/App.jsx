import React from 'react';
import './fonts/Nunito/Nunito.scss';
import s from './App.module.scss';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MobileMainMenuContainer from './components/Header/MobileMainMenu/MobileMainMenuContainer';
import store from './redux/redux-store.js';
import {Provider} from 'react-redux';
import Planet from './components/Planet/Planet';
import RocketsContainer from './components/Rockets/RocketsContainer';
import RocketContainer from './components/Rockets/RocketContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.StrictMode>
			<Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className={s.app}>
            <div className={s.container}>
              <Header />
              <div className={s.zIndexMain}>
                <Switch>
                  <Route exact path="/">
                  </Route>
                  <Route exact path="/rockets/">
                    <div className={s.box}>
                      <RocketsContainer />
                    </div>
                  </Route>
                  <Route path="/rockets/:id?">
                    <div className={s.box}>
                      <RocketContainer />
                    </div>
                  </Route>
                  <Route path="*">
                    <div>404</div>
                  </Route>
                </Switch>
              </div>
              <Footer />
              <Planet />
            </div>
            <MobileMainMenuContainer />
          </div>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;

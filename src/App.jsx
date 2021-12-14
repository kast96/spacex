import React from 'react';
import './fonts/Nunito/Nunito.scss';
import s from './App.module.scss';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MobileMainMenuContainer from './components/Header/MobileMainMenu/MobileMainMenuContainer';
import store from './redux/redux-store.js';
import {Provider} from 'react-redux';
import Planet from './components/Planet/Planet';
import Footer from './components/Footer/Footer';
import { routes } from './data/routes/routes';
import { compose } from "redux";

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
                  {routes.map(({ path, Component, hocs, ...props }, key) => {
                    let ResultComponent = Component;
                    if(hocs instanceof Array) {
                      ResultComponent = compose(
                        ...hocs
                      )(ResultComponent);
                    }
                    return (
                      <Route exact path={path} key={key}>
                        <ResultComponent {...props} />
                      </Route>
                    )
                  })}
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

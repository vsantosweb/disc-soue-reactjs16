import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './start/app';
import { store, persistor } from './store';
import { usePromiseTracker } from "react-promise-tracker";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.css';
import './styles/css/helpers.css';
import './styles/css/webSite/footer.css';
import './styles/css/components/form.css';
import './styles/css/webSite/navbar.css';
import './styles/css/webSite/webSite.css';
import LoaderTracker from './app/components/LoaderTracker';

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress &&
    <h1>Hey some async call in progress ! </h1>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>loading</div>} persistor={persistor}>
      <LoaderTracker />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

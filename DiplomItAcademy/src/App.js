import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PagesRouter from './pages/PagesRouter';
import {configureStore} from './redux/configureStore';

const store = configureStore();

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className='container'>
            <PagesRouter />
          </div>
        </Fragment>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

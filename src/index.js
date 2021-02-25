import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { initialiseStore } from './redux/Store';

const store = initialiseStore();

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}`;
document.head.append(script);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
);

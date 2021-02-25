import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { initialiseStore } from './redux/Store';

initialiseStore();

const appRoot = document.getElementById('app');

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}`;
document.head.append(script);

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    appRoot,
);

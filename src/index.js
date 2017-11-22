import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';

import App from './containers/App';
import Routes from './routes';

import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
registerServiceWorker();
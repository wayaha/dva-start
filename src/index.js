import dva from 'dva';
import './index.css';
import example from './models/example';
import router from './router';
import someThing from './models/someThing';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(example);
app.model(someThing);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
// https://dvajs.com/guide/getting-started.html#%E5%AE%89%E8%A3%85-dva-cli

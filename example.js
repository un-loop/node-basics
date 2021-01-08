import express from 'express';
import noCache from './middleware/noCache.js';
import loadTemplate from './middleware/loadTemplate.js';
import resolveTemplate from './middleware/resolveTemplate.js';
import auth from './middleware/auth.js';

let port = 3000;
const app = express()

const commonMiddleware = [noCache, loadTemplate, resolveTemplate];

app.get('/', ...commonMiddleware);
app.get('/admin', auth, ...commonMiddleware);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

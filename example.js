import express from 'express';
import path from 'path';
import rootPath from 'app-root-path';
import noCache from './middleware/noCache.js';
import loadTemplate from './middleware/loadTemplate.js';
import resolveTemplate from './middleware/resolveTemplate.js';
import auth from './middleware/auth.js';
import templateRouter from './templateRouter.js';

let port = 3001;
const app = express();

app.use('/admin', auth);
app.use(noCache, templateRouter);

// app.use(express.static(path.join(rootPath.path, 'client'))
// );

// const commonMiddleware = [noCache, loadTemplate, resolveTemplate];

// app.get('/', ...commonMiddleware);
// app.get('/admin', auth, ...commonMiddleware);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

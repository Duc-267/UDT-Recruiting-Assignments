import express from 'express';
import * as React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../client/App.js';

const app = express();
const port = 3000;

app.use(express.static('build'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
   const markup = ReactDOM.renderToString(
      <StaticRouter location={req.url}>
         <App />
      </StaticRouter>,
   );
   res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>UDT Recruiting Assignments</title>
    </head>
    <body>
      <div id="app">${markup}</div>
    </body>
  </html>
`);
});

app.listen(port, () => {
   console.log(`Server is listening on port ${port}`);
});

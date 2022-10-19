import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import express from 'express';
import App from '../client/App';
import Html from './helper/Html';

const app = express();
const port = 3000;
app.use(express.static('build'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
   const script = ['./client.js'];
   let markup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
         <App />
      </StaticRouter>,
   );
   const html = ReactDOMServer.renderToStaticMarkup(<Html content={markup} scripts={script} />);
   res.send('<!DOCTYPE html>' + html);
});

app.listen(port, () => {
   console.log(`Server is listening on port ${port}`);
});

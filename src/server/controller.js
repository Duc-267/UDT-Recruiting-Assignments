import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { Home, History } from '../client/pages';
import Html from './helper/Html';

const Controller = {
   renderHomePage: function (req, res) {
      const script = ['./client.js'];
      const markup = ReactDOMServer.renderToString(<Home />);
      const html = ReactDOMServer.renderToStaticMarkup(<Html content={markup} scripts={script} />);
      res.send(`<!DOCTYPE html>${html}`);
   },

   renderHistoryPage: function (req, res) {
      const markup = ReactDOMServer.renderToString(<History />);
      const html = ReactDOMServer.renderToStaticMarkup(<Html content={markup} />);
      res.send(`<!DOCTYPE html>${html}`);
   },
};

export default Controller;

import Controller from './controller.js';
import Html from './helper/Html';

function route(app) {
   app.get('/history', Controller.renderHistoryPage);
   app.get('/', Controller.renderHomePage);
}

export default route;

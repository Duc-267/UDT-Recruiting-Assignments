import express from 'express';
import route from './route';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static('build'));
app.use(express.static('dist'));
app.use(express.static(path.join(__dirname)));

route(app);

app.listen(port, () => {
   console.log(`Server is listening on port ${port}`);
});

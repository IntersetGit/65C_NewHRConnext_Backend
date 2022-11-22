import { app } from '.';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes'
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json({ limit: '20mb' }));
app.use(
  morgan(process.env.NODE_ENV == 'development' ? 'dev' : 'combined', {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  }),
);
app.use(routes);

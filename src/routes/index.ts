import logger from '../utils/winston';
import express, { Router } from 'express';

import UserRoute from './user.route';
import UtilsRoute from './utils.route';
import ProviderRoute from './provider.route';

const router = express.Router();

const registerRoute = (name: string, routeMeta: Router) => {
  logger.debug(
    `Register route [${process.env.SUB_API_PATH}/${name}] complete.`,
  );
  router.use(`/${process.env.SUB_API_PATH}/${name}`, routeMeta);
};

registerRoute('provider',ProviderRoute);
registerRoute('user', UserRoute);
registerRoute('util', UtilsRoute);

export default router;

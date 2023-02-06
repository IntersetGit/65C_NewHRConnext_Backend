import multer from 'multer';
import { Router } from 'express';

const routes = Router();

const storageAvatar = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/avatar');
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, 'avatar' + '-' + uniqueSuffix + '.png');
  },
});

const avatarUpload = multer({ storage: storageAvatar });

routes.post('/avatar', avatarUpload.single('avatar'), (req, res) => {
  res.send(req.file);
});

export default routes;

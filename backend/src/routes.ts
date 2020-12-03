import { Router } from 'express';
import { checkJwt } from './middlewares/checkJwt'
import multer from 'multer';

import uploadConfig from './config/upload';
import orphanagesController from './controllers/orphanagesController';
import usersController from './controllers/usersController';
import authController from './controllers/authController';

const routes = Router(); 
const upload = multer(uploadConfig);

routes.get('/user/:id', [checkJwt], usersController.show);
routes.post('/user', [checkJwt], usersController.create);
routes.delete('/user/:id', [checkJwt], usersController.delete);

routes.post('/user/login', authController.login);
routes.post("/user/change-password", [checkJwt], authController.changePassword);

routes.put('/orphanage/:id', [checkJwt], upload.array('images'), orphanagesController.update);
routes.delete('/orphanage/:id', [checkJwt], orphanagesController.delete);
routes.patch('/orphanage/accept-or-refuse', [checkJwt], orphanagesController.acceptOrRefuse);

routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanage/:id', orphanagesController.show);
routes.post('/orphanage', upload.array('images'), orphanagesController.create);  



export default routes;
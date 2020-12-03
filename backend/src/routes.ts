import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import orphanagesController from './controllers/orphanagesController';
import usersController from './controllers/usersController';

const routes = Router(); 
const upload = multer(uploadConfig);

routes.get('/user/:id', usersController.show);
routes.post('/user', usersController.create);

routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);
routes.post('/orphanages', upload.array('images'), orphanagesController.create);    
routes.put('/orphanages/:id', upload.array('images'), orphanagesController.update);
routes.delete('/orphanage/:id', orphanagesController.delete);

export default routes;
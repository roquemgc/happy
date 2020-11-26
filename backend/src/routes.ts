import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import orphanagesController from './controllers/orphanagesController';

const routes = Router(); 
const upload = multer(uploadConfig);

routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);
routes.post('/orphanages', upload.array('images'), orphanagesController.create);    
routes.put('/orphanages/:id', upload.array('images'), orphanagesController.update);
routes.delete('/orphanages/:id', orphanagesController.delete);

export default routes;
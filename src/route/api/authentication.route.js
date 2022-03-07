import { Router } from 'express';
import * as AuthenticationController from '../../controlers/authentification.controler';

const api = Router();

api.post('/login', AuthenticationController.login);
api.post('/register', AuthenticationController.register);

export default api;
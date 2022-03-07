import { Router } from 'express';
import * as usersControleur from '../../controlers/usersControleur';
import * as postsControler from '../../controlers/postsControleur';

const api = Router();

api.get('/:id/posts', postsControler.findOneposts);
api.get('/:id/profile', usersControleur.findOneUsers);
api.patch('/:id/profile', usersControleur.updateUsers);
api.delete('/:id', usersControleur.deleteOne);




export default api;
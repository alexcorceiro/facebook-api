import { Router } from 'express';
import * as postsControleur from '../../controlers/postsControleur';

const api = Router();

api.post('/' , postsControleur.createPosts);
api.get('/:id', postsControleur.findOneposts);
api.get('/', postsControleur.findAllposts);
api.patch('/:id', postsControleur.updateOneposts);
api.delete('/:id', postsControleur.deleteOne);




export default api;
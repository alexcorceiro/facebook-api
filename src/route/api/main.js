import { Router } from 'express';
import AuthenticationRoutes from './authentication.route';
import postsRoute from './posts.route';
import usersRoute from './users.route';

const api = Router();

api.use('/authentication', AuthenticationRoutes);
api.use('/posts', postsRoute);
api.use('/urers', usersRoute);

export default api;
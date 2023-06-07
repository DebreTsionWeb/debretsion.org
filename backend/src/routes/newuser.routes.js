import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';

const NewUserRoutes = Router();


/**
 * @route POST api/user/register
 * @desc Register a user
 */
NewUserRoutes.post('/register', UserController.register);

/**
 * @route POST api/user/login
 * @desc Login a user
 */
NewUserRoutes.post('/login', UserController.login);

/**
 * @route GET api/user/logout
 * @desc Logout a user
 */
// NewUserRoutes.get('/logout', UserController.logout);

/**
 * @route GET api/user/:id
 * @desc Get a user
 */
NewUserRoutes.get('/:id', UserController.getUserById);

/**
 * @route PATCH api/user/:id
 * @desc Update a user
 */
NewUserRoutes.patch('/:id', UserController.updateUserById);

/**
 * @route DELETE api/user/:id
 * @desc Delete a user
 */
NewUserRoutes.delete('/:id', UserController.deleteUserById);


export default UserRoutes;

import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';

const AdminUserRoutes = Router();


/**
 * @route POST api/user/register
 * @desc Register a user
 */
AdminUserRoutes.post('/register', UserController.register);

/**
 * @route POST api/user/login
 * @desc Login a user
 */
AdminUserRoutes.post('/login', UserController.login);

/**
 * @route GET api/user/:adminid
 * @desc Get a user
 */
AdminUserRoutes.get('/:adminid', UserController.getUserById);

/**
 * @route PATCH api/user/:adminid
 * @desc Update a user
 */
AdminUserRoutes.patch('/:adminid', UserController.updateUserById);

/**
 * @route DELETE api/user/:adminid
 * @desc Delete a user
 */
AdminUserRoutes.delete('/:adminid', UserController.deleteUserById);


export default AdminUserRoutes;

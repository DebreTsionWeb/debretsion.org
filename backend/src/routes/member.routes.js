import { Router } from 'express';
import { MemberController } from '../controllers/member.controller.js';

const MemberRoutes = Router();


/**
 * @route POST api/member/register
 * @desc Register a Member
 */
MemberRoutes.post('/register', MemberController.register);

/**
 * @route POST api/member/login
 * @desc Login a Member
 */
MemberRoutes.post('/login', MemberController.login);

/**
 * @route GET api/member/:id
 * @desc Get a Member
 */
MemberRoutes.get('/:id', MemberController.getMemberById);

/**
 * @route PATCH api/member/:id
 * @desc Update a Member
 */
MemberRoutes.patch('/:id', MemberController.updateMemberById);

/**
 * @route DELETE api/member/:id
 * @desc Delete a Member
 */
MemberRoutes.delete('/:id', MemberController.deleteMemberById);


export default MemberRoutes;

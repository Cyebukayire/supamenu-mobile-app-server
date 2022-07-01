import { deleteAllUsers, deleteUser, getAllUsers, getUserByEmail, getUserById, getUserByName, updateUser } from "../controllers/User.controller";
import express from 'express';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/id/:id', getUserById);
router.get('/name', getUserByEmail);
router.get('/email', getUserByName);
// router.delete('/delete/all', deleteAllUsers)
router.delete('/delete/:id', deleteUser);
router.put('/:id', updateUser);
export default router;
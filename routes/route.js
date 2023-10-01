import express from 'express';
import {
  adduser,
  getUsers,
  getUser,
  editUser,
  deleteUSer,
} from '../controller/usercontroller.js';

const router = express.Router();

router.post('/add', adduser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUSer);

export default router;

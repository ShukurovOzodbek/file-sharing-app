import {Router} from "express";
import {createUser, getUser, updateUser} from "../controllers/users.controller";

const router = Router();

router.post('/', createUser);
router.patch('/:id', updateUser);
router.get('/:id', getUser);

export default router;
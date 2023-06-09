import express from 'express';
import { getUser,addUser,getUsers ,updateUser,deleteUser} from "../controllers/userController.js";
const router = express.Router();

router.get('/',getUsers)
router.post('/',addUser)
router.get('/:id',getUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
export default router;
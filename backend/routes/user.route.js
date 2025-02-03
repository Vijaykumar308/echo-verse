import express from "express";
import { login, logout, register, getAllUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/getAllUsers', getAllUsers);
 

export default router;
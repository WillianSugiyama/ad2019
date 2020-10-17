import {createPeopleController, editPeopleController, listOneController, listAllController, removeController } from '../controllers/people.controller';
import express from 'express';

const router = express.Router();

router.post("/people", createPeopleController);
router.put("/people", editPeopleController);
router.get("/people", listOneController);
router.get("/peoples", listAllController);
router.delete("/people", removeController);

export default router;
import express from "express";
import peopleController from "../controllers/peoplesControl.js";

const router = express.Router();

router
.get("/people",peopleController.listPeoples)
.get("/people/:id",peopleController.listPeopleForId)
.post("/people",peopleController.createPeople)
.put("/people/:id",peopleController.attPeople)
.delete("/people/:id",peopleController.deletePeople)

export default router;   
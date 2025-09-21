import { Router } from "express";
import AnimesController from "../controllers/animesController.js";

const animesRoutes = Router();

animesRoutes.get("/", AnimesController.getAll);
animesRoutes.get("/id/:id", AnimesController.getById);
animesRoutes.get("/name/:name", AnimesController.getByName);

export default animesRoutes;
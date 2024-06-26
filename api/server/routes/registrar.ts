import express, { Express, Request, Response, Router } from "express";

import { authenticateToken } from "../middleware/authentication";
import { currentRequestController, editRequestController, historyRequestController } from "../controller/registrar";
import { registrarOnly } from "../middleware/registrar";

const router = Router();

router.get("/current-request", authenticateToken, registrarOnly, currentRequestController);
router.get("/history-request", authenticateToken, registrarOnly, historyRequestController);
router.put("/edit-request", authenticateToken, registrarOnly, editRequestController);

export default router;

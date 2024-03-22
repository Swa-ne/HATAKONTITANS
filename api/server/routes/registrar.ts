import express, { Express, Request, Response, Router } from "express";

import { authenticateToken } from "../middleware/authentication";
import { currentRequestController } from "../controller/registrar";
import { registrarOnly } from "../middleware/registrar";

const router = Router();

router.get("/current-request", authenticateToken, registrarOnly, currentRequestController);

export default router;

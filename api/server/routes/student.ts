import express, { Express, Request, Response, Router } from "express";

import { authenticateToken } from "../middleware/authentication";
import { getPendingPaidController, requestFilesController } from "../controller/student";
import { studentOnly } from "../middleware/student";

const router = Router();

router.post("/request-files", authenticateToken, studentOnly, requestFilesController);
router.get("/pending-paid", authenticateToken, studentOnly, getPendingPaidController);

export default router;

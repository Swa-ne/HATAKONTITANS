import express, { Express, Request, Response, Router } from "express";

import { authenticateToken } from "../middleware/authentication";
import { financeOnly } from "../middleware/finance";
import { getUnpaidTransactionController } from "../controller/finance";

const router = Router();

router.get("/unpaid-transaction", authenticateToken, financeOnly, getUnpaidTransactionController);

export default router;

import { Request, Response, NextFunction } from "express";
import { User } from "./authentication";

interface AuthenticatedRequest extends Request {
    user?: User;
}

export function financeOnly(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) {
    if (req.user && req.user.userType.toLowerCase() === "finance") {
        next();
    } else {
        return res.status(403).json({
            message: "Access forbidden. Only finance are allowed.",
        });
    }
}

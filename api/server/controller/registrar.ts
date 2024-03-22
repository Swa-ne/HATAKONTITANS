import express, { Express, Request, Response } from "express";

import { currentRequest } from "../services/registrar";
export const currentRequestController = async (req: Request, res: Response) => {
    try {
        const result = await currentRequest();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

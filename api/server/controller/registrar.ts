import express, { Express, Request, Response } from "express";

import { currentRequest, historyRequest } from "../services/registrar";
export const currentRequestController = async (req: Request, res: Response) => {
    try {
        const result = await currentRequest();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const historyRequestController = async (req: Request, res: Response) => {
    try {
        const result = await historyRequest();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

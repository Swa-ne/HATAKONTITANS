import express, { Express, Request, Response } from "express";
import { getUnpaidTransaction } from "../services/finance";

export const getUnpaidTransactionController = async (req: Request, res: Response) => {
    try {
        const result = await getUnpaidTransaction();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

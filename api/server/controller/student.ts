import express, { Express, Request, Response } from "express";
import { User } from "../middleware/authentication";
import { checkIfValidtoRequest, getPendingPaid, requestFiles } from "../services/student";

export const requestFilesController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID } = req.user || {};
        if (!userID) {
            return res.status(400).json({ message: "User ID not provided" });
        }
        const requestedFiles = req.body?.requestedFiles;
        if (requestedFiles !== null) {
            if (await checkIfValidtoRequest(userID)) {
                const result = await requestFiles(userID, JSON.parse(requestedFiles));
                return res.status(200).json(result);
            }
            return res.status(400).json({ message: "Request rejected" });
        }
        return res.status(404).json({ message: "Requested Files not found" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getPendingPaidController = async (req: Request & { user?: User }, res: Response) => {
    try {
        const { userID } = req.user || {};
        if (!userID) {
            return res.status(400).json({ message: "User ID not provided" });
        }
        const result = await getPendingPaid(userID);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

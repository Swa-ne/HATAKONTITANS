import { Request, UserRequest } from "../models/request";
export const currentRequest = async () => {
    try {
        let result = await UserRequest.find({ paid: true, status: "Pending" })
            .populate("requests")
            .populate({ path: "userID", populate: { path: "studentInformation" } });
        return { message: result, httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};
export const historyRequest = async () => {
    try {
        let result = await UserRequest.find({ paid: true, status: "Ready" })
            .populate("requests")
            .populate({ path: "userID", populate: { path: "studentInformation" } });
        return { message: result, httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};

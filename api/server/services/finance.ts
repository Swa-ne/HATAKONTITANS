import { Request, UserRequest } from "../models/request";
export const getUnpaidTransaction = async () => {
    try {
        let result = await UserRequest.find({ paid: false }).populate("requests").populate({ path: "userID", populate: { path: "studentInformation" } });
        return { message: result, httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};

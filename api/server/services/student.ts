import { Request, UserRequest } from "../models/request";
export const requestFiles = async (userID: string, requestFilesArr: string) => {
    try {
        let newUserRequest = await new UserRequest({ userID: userID.userCredentials }).save();
        for (const req of requestFilesArr) {
            let newRequest = await new Request({ request: req[0], quantity: req[1] }).save();
            newUserRequest.requests.push(newRequest._id);
        }
        await newUserRequest.save();
        return { message: "Successfully requested", httpCode: 200 };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};

export const checkIfValidtoRequest = async (userID: string) => {
    try {
        const userRequest = await UserRequest.find({
            userID: userID.userCredentials,
            paid: false,
        });
        return userRequest.length == 0;
    } catch (err) {
        console.error(err);
        return false;
    }
};
export const getPendingPaid = async (userID: string) => {
    try {
        const userRequest = await UserRequest.findOne({
            userID,
            paid: false,
        });

        if (!userRequest) {
            return { message: "No pending unpaid request" };
        }
        return { message: userRequest };
    } catch (error: any) {
        return { message: error.message, httpCode: 500 };
    }
};

import axios from "axios";
import { cookies } from "./entry";

const apiURL = import.meta.env.VITE_API_BASE_URL;

export const getUnpaidTransaction = async () => {
    const response = await axios
        .get(`${apiURL}/finance/unpaid-transaction`, {
            headers: {
                authorization: cookies.get("authorization"),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};

export const getCurrentRequest = async () => {
    const response = await axios
        .get(`${apiURL}/registrar/current-request`, {
            headers: {
                authorization: cookies.get("authorization"),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};

export const getHistoryRequest = async () => {
    const response = await axios
        .get(`${apiURL}/registrar/history-request`, {
            headers: {
                authorization: cookies.get("authorization"),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};

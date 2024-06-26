import axios from "axios";
import Cookies from "universal-cookie";

const apiURL = import.meta.env.VITE_API_BASE_URL;
export const cookies = new Cookies();

export const login = async (data) => {
    const response = await axios
        .post(`${apiURL}/entry/login`, data)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};

export const logout = async () => {
    cookies.remove("authorization");
    cookies.remove("userType");
    cookies.remove("userFullName");
    cookies.remove("username");
};

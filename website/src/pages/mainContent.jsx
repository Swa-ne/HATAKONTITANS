import AdminRoutes from "../routes/adminRoutes";
import { cookies } from "../services/entry";
import NotFound from "./notFound";

const MainContent = () => {
    const userType = cookies.get("userType");
    return (
        <>
            {/* {userType ===
            "E2jF8sG5dH9tY3kL4zX7pQ6wR1oV0mCqB6nI8bT7yU5iA3gD2fS4hJ9uMlKoP1e" ? ( */}
            <AdminRoutes />
            {/* ) : (
                    <NotFound />
            )} */}
        </>
    );
};

export default MainContent;

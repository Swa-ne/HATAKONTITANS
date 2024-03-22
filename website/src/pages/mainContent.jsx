import AdminRoutes from "../routes/adminRoutes";
import CashierRoutes from "../routes/cashierRoutes";
import { cookies } from "../services/entry";
import NotFound from "./notFound";

const MainContent = () => {
    const userType = cookies.get("userType");
    return <>{userType === "3aDfR9oPq2sW5tZyX8vBu1mNc7LkIj6Hg4TfGhJdSe4RdFgBhNjVkLo0iUyHnJm" ? <AdminRoutes /> : userType === "r9LsT6kQ3jWfZ1pY4xN7hM2cV8gB5dI0eJ4uF2oD3iG5vX6mC1aS7tR9yU3lK8w" ? <CashierRoutes /> : <NotFound />}</>;
};

export default MainContent;

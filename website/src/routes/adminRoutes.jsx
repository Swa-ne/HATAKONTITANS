import { Route, Routes } from "react-router-dom";

// import AdminLayout from "../layout/adminLayout";
import HomeAdmin from "../pages/admin/homeAdmin";
import StudentList from "../pages/admin/studentList";
import RequestHistory from "../pages/admin/requestHistory";

export default function AdminRoutes() {
    return (
        <Routes>
            <Route path="">
                {/* element={<AdminLayout />}>*/}
                <Route index element={<HomeAdmin />} />
                {/* Active Request list */}
                <Route path="request-history" element={<RequestHistory />} />
                <Route path="student-list" element={<StudentList />} />
            </Route>
        </Routes>
    );
}

import { Route, Routes } from "react-router-dom";

// import AdminLayout from "../layout/adminLayout";
import HomeAdmin from "../pages/admin/homeAdmin";
import StudentList from "../pages/admin/studentList";
import RequestHistory from "../pages/admin/requestHistory";
import AdminLayout from "../layout/adminLayout";
import NotFound from "../pages/notFound";
import { useState } from "react";

export default function AdminRoutes() {
    return (
        <Routes>
            <Route path="" element={<AdminLayout />}>
                {/* Active Request list */}
                <Route index element={<HomeAdmin />} />
                <Route path="request-history" element={<RequestHistory />} />
                <Route path="student-list" element={<StudentList />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

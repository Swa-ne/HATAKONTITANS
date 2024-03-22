import { Route, Routes } from "react-router-dom";

import HomeAdmin from "../pages/admin/homeAdmin";
import StudentList from "../pages/admin/studentList";
import RequestHistory from "../pages/admin/requestHistory";
import AdminLayout from "../layout/adminLayout";
import NotFound from "../pages/notFound";
import { useState } from "react";
import CashierLayout from "../layout/cashierLayout";
import Cashier from "../pages/cashier/cashier";

export default function CashierRoutes() {
    return (
        <Routes>
            <Route path="" element={<CashierLayout />}>
                {/* Active Request list */}
                <Route index element={<Cashier />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

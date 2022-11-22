import { Route, Routes } from "react-router-dom";

import AuthLayout from "../components/layouts/AuthLayout";
import {
  EmployeeDetails,
  // ComponentsPage,
  EmployeeRecords,
  Login,
  TestPageTwo,
} from "../components/pages";

const PageRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/employee-records" element={<AuthLayout />}>
        <Route index element={<EmployeeRecords />} />
        <Route path="table" element={<TestPageTwo />} />
        <Route path="employee-records/:id" element={<EmployeeDetails />} />
      </Route>
      <Route path="*" element={<TestPageTwo />} />
    </Routes>
  );
};

export { PageRouter };

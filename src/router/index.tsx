import { Route, Routes } from "react-router-dom";

import AuthLayout from "../components/layouts/AuthLayout";
import {
  ComponentsPage,
  EmployeeDetails,
  EmployeeRecords,
  Login,
  TestPageTwo,
} from "../components/pages";
import {
  dashboard,
  records,
  tablePath,
} from "../components/utilities/routerPaths";

const PageRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={dashboard} element={<AuthLayout />}>
        <Route index element={<EmployeeRecords />} />
        <Route path={`${records}/:id`} element={<EmployeeDetails />} />
        <Route path={tablePath} element={<TestPageTwo />} />
        <Route path="components" element={<ComponentsPage />} />
      </Route>
      <Route path="*" element={<TestPageTwo />} />
    </Routes>
  );
};

export { PageRouter };

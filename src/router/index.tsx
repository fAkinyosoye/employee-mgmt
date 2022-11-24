import { Route, Routes } from "react-router-dom";

import AuthLayout from "../components/layouts/AuthLayout";
import {
  ComponentsPage,
  CreateEmployee,
  EmployeeDetails,
  EmployeeRecords,
  Login,
  NotFoundPage,
  Profile,
} from "../components/pages";
import {
  components,
  createEmployee,
  dashboard,
  profile,
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
        {/* <Route path={tablePath} element={<TestPageTwo />} /> */}
        <Route path={createEmployee} element={<CreateEmployee />} />
        <Route path={components} element={<ComponentsPage />} />
        <Route path={profile} element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export { PageRouter };

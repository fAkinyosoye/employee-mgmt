import { Route, Routes } from "react-router-dom";

import {
  ComponentsPage,
  EmployeeDetails,
  EmployeeRecords,
  Login,
  TestPageTwo,
} from "../components/pages";

const PageRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/employee-records" element={<EmployeeRecords />} />
      <Route path="/employee-records/:id" element={<EmployeeDetails />} />
      <Route path="/table" element={<TestPageTwo />} />
      <Route path="/components" element={<ComponentsPage />} />
    </Routes>
  );
};

export { PageRouter };

import { Route, Routes } from "react-router-dom";

import {
  ComponentsPage,
  EmployeeRecords,
  Login,
  TestPageTwo,
} from "../components/pages";

const PageRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/employee-records" element={<EmployeeRecords />} />
      <Route path="/table" element={<TestPageTwo />} />
      <Route path="/components" element={<ComponentsPage />} />
      <Route path="*" element={<TestPageTwo />} />
    </Routes>
  );
};

export { PageRouter };

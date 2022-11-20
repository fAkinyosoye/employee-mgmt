import { Route, Routes } from "react-router-dom";

import {
  EmployeeRecords,
  Login,
  TestPageOne,
  TestPageTwo,
} from "../components/pages";

const PageRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/employee-records" element={<EmployeeRecords />} />
      <Route path="/table" element={<TestPageTwo />} />
      <Route path="/testPage" element={<TestPageOne />} />
      <Route path="*" element={<TestPageTwo />} />
    </Routes>
  );
};

export { PageRouter };

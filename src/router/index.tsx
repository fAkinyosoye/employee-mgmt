import { Route, Routes } from "react-router-dom";

import { Login, TestPageTwo } from "../components/pages";

const PageRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/testPage" element={<TestPageTwo />} />
      <Route path="*" element={<TestPageTwo />} />
    </Routes>
  );
};

export { PageRouter };

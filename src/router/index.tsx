import { Route, Routes } from "react-router-dom";
import { TestPageOne, TestPageTwo } from "../components/pages";

const PageRouter = () => {
  return (
    <Routes>
      <Route index element={<TestPageOne />} />
      <Route path="/testPage" element={<TestPageTwo />} />
      <Route path="*" element={<TestPageTwo />} />
    </Routes>
  );
};

export { PageRouter };

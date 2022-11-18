import { Route, Routes } from "react-router-dom";
import { TestPageOne, TestPageTwo } from "../components/pages";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPageOne />} />
      <Route path="/testPage" element={<TestPageTwo />} />
    </Routes>
  );
};

export { PageRouter };

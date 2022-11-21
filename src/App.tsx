// eslint-disable-next-line import/no-unassigned-import
import "./App.css";
import { ToastContainer } from "react-toastify";
// eslint-disable-next-line import/no-unassigned-import
import "react-toastify/dist/ReactToastify.css";

import { PageRouter } from "./router";

function App() {
  return (
    <>
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
        autoClose={3000}
        icon={false}
        closeButton={true}
        hideProgressBar
        position="top-center"
      />
      <PageRouter />
    </>
  );
}

export default App;

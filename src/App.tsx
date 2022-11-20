// eslint-disable-next-line import/no-unassigned-import
import "./App.css";
import { ToastContainer } from "react-toastify";

import { PageRouter } from "./router";

function App() {
  console.log(import.meta.env.VITE_BASE_URL,)
  return (
    <>
      <PageRouter />
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
        autoClose={5000}
        icon={false}
        closeButton={true}
        hideProgressBar
      />
    </>
  );
}

export default App;

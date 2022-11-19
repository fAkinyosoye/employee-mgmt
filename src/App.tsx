import "./App.css";
import { ToastContainer } from "react-toastify";
import { PageRouter } from "./router";

function App() {
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

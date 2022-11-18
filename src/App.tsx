import { PageRouter } from "./router";

function App() {
  console.log(import.meta.env.VITE_BASE_URL,)
  return (
    <>
      <PageRouter />
    </>
  );
}

export default App;

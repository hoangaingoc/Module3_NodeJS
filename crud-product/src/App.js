import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <>
      <Routes>
        <Route path="products" element={<Home />}>
          <Route path="list" element={<List />} />
          <Route path="create" element={<Create />} />
          <Route path="update/:id" element={<Update />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
// create, read, update, delete
// post     get    put    delete
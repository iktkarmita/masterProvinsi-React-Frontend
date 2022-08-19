import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProvinsiList from "./components/ProvinsiList";
import AddProvinsi from "./components/AddProvinsi";
import EditProvinsi from "./components/EditProvinsi";
import DeleteProvinsi from "./components/DeleteProvinsi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProvinsiList />} />
        <Route path="add" element={<AddProvinsi />} />
        <Route path="edit/:id" element={<EditProvinsi />} />
        <Route path="deletes/:id" element={<DeleteProvinsi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

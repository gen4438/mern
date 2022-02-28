import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Create from "./components/create";
import Edit from "./components/edit";
import RecordList from "./components/recordList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;

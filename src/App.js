import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

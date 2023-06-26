import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import MainList from "./MainList";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainList />} />
          <Route path="/detail/:movie_id" element={<Detail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import MainList from "./pages/MainList";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainList />} />
          <Route path="/detail/:movie_id" element={<Detail />} />
          <Route path="/search" element={<MainList />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

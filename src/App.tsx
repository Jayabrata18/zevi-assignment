import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import "./styles/app.scss";
import SearchBar from "./components/SearchBar";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<SearchBar />} />
      </Routes>
    </Router>
  );
};

export default App;

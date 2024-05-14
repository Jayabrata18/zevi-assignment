import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/searchpage/SearchPage";
import "./styles/app.scss";
import ResultPage from "./pages/resultpage/ResultPage";
import Demo from "./pages/demopage/Demo";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/demo" element={<Demo />} />
        
      </Routes>
    </Router>
  );
};

export default App;

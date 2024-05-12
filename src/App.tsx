import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import "./styles/app.scss";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

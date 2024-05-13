import "./resultpage.scss";
import FilterComponent from "../../components/filter/FilterComponent";
import CardSection from "../../components/cardsection/CardSection";
import logo from "../../assets/Screenshot_2024-05-12_113833-removebg-preview.png";
import SearchBar from "../../components/seachbar/SearchBar";

const ResultPage = () => {
  return (
    <div className="resultpage-main-container">
      <div className="resultpage-navbar">
        <div className="resultpage-search-bar">
          <SearchBar />
        </div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <h1 className="result-page-h1">Search Results</h1>
      <div className="resultpage-main-content">
        <div className="filter-container">
          <FilterComponent />
        </div>
        <div className="card-container">
          <CardSection />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

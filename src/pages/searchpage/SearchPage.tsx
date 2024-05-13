import logo from "../../assets/Screenshot_2024-05-12_113833-removebg-preview.png";
import SearchBar from "../../components/seachbar/SearchBar";
import "./searchpage.scss";
import  {  useState } from "react";
import SearchPopUp from "../../components/searchpopup/SearchPopUp";

const SearchPage = () => {
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = () => {
    setShowSearchResults(true);
  };


  return (
    <div className="searchpage-container">
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="search-bar" onClick={handleSearch}>
        <SearchBar />
      </div>
      {showSearchResults && <SearchPopUp />}
    </div>
  );
};

export default SearchPage;

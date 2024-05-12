import logo from '../assets/Screenshot_2024-05-12_113833-removebg-preview.png'
import SearchBar from '../components/SearchBar';
import "./searchpage.scss";
const SearchPage = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img
          className="logo"
          src={logo}
          alt="google logo"
        />
      </div>
      <div className="search-bar">
        <SearchBar/>
        {/* <span className="gyfg">Search</span> */}
      </div>
    </div>
  );
};

export default SearchPage;

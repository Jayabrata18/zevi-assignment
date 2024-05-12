import "./searchbar.scss";
const SearchBar = () => {
  return (
    <div className="box">
        <input className="search-area" type="text" placeholder="Search" />
        <i className="icon fas fa-search"></i>
    </div>
  );
};

export default SearchBar;

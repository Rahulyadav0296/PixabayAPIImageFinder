import React from "react";
import logo from "../../assets/logo_ry.png";
function Header({
  handleHomeClicked,
  handleFormSubmit,
  handleInputChange,
  searchInputValue,
}) {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="The logo of Pixabay API" />
      </div>
      <div className="header-rights">
        <p>The best free stock photos.</p>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="header-search">
          <input
            type="text"
            required
            onChange={handleInputChange}
            value={searchInputValue}
          />
          <button className="search-icon">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      <div className="header-home">
        <i className="fas fa-home" onClick={handleHomeClicked}></i>
      </div>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import EmptyViewList from "../../components/Common/EmptyViewList";
import Loader from "../../components/Common/Loader";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import Menu from "../../components/Home/Menu";
import ResultList from "../../components/Home/ResultList";
import axios from "axios";
import { PixabayAPI } from "../../config/data";

const Home = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  const [imagesList, setImagesList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResultsCount, setSearchResultsCount] = useState(21);

  const searchResults = (search) => {
    setLoading(true);
    setShowMenu(false);

    axios
      .get(
        `${PixabayAPI.url}?key=${PixabayAPI.key}&q=${search}&image_type=photo&per_page=${searchResultsCount}&safeSearch=true`
      )
      .then((res) => {
        setImagesList(res.data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchResults(searchInput);
  };

  const handleHomeClicked = () => {
    setSearchInput("");
    setImagesList([]);
    setShowMenu(true);
  };

  const handleMenuItemClicked = (e) => {
    const searchFor = e.target.id;
    console.log(searchFor);
    setSearchInput(searchFor);
    searchResults(searchFor);
  };

  return (
    <>
      {/* Header */}
      <Header
        handleHomeClicked={handleHomeClicked}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={(e) => setSearchInput(e.target.value)}
        searchInputValue={searchInput}
      />

      <main>
        {/* Menu */}
        {showMenu && <Menu handleMenuItemClicked={handleMenuItemClicked} />}

        {/* Loader */}
        {loading && (
          <div className="lottie-container">
            <Loader />
          </div>
        )}

        {/* Empty List View */}
        {!showMenu && !loading && !imagesList.length ? (
          <div className="lottie-container">
            <EmptyViewList />
          </div>
        ) : null}

        {/* ImageList */}
        {!showMenu && !loading && imagesList.length ? (
          <ResultList images={imagesList} />
        ) : null}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;

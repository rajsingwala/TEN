import React, { useEffect, useState } from "react";
import SearchTabs from "./search_tabs/SearchTabs";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory, useParams } from "react-router-dom";
import { getData } from "../../function/courses";
import { getBlog } from "../../function/blog";
import { getPages } from "../../function/pages";

const SearchResults = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [blog, setBlog] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchBlog, setSearchBlog] = useState([]);
  const [searchPages, setSearchPages] = useState([]);

  const { slug } = useParams();
  const history = useHistory();

  useEffect(
    () => {
      loadProduct();
      loadBlog();
      loadPages();
    },
    [slug],
    []
  );

  const loadProduct = () => {
    let array = [];

    getData()
      .then((res) => {
        setProduct(res.data.courses);
        for (let i = 1; i <= 10; ++i) {
          if (res.data.courses[i]?.title.toLowerCase().includes(slug)) {
            array.push(res.data.courses[i]);
          }
        }
        setSearchProduct(array);
      })
      .catch((err) => console.log(err));
  };

  const loadBlog = () => {
    let array = [];

    getBlog()
      .then((res) => {
        setBlog(res.data.blog);
        for (let i = 1; i <= 8; ++i) {
          if (res.data.blog[i]?.title.toLowerCase().includes(slug)) {
            array.push(res.data.blog[i]);
          }
        }
        setSearchBlog(array);
      })
      .catch((err) => console.log(err));
  };

  const loadPages = () => {
    let array = [];
    getPages()
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (res?.data[i]?.title.includes(slug)) {
            console.log(res.data[i]);
            array.push(res.data[i]);
          }
        }
        setSearchPages(array);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search-results/${search}`);
    loadProduct();
    loadBlog();
    loadPages();
  };

  return (
    <div className="search_results">
      <div className="search_results_container">
        <div className="search_results_content">
          {/* title */}
          <div className="search_results_title">Search Results</div>

          {/* search */}
          <div className="search_results_search">
            <div className="search_results_search_content">
              <BsSearch className="search_results_search_content_search" />
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
              </form>
              {search && (
                <AiOutlineClose
                  className="search_results_search_content_close"
                  onClick={() => setSearch("")}
                />
              )}
            </div>
          </div>

          {/* tabs */}
          <SearchTabs
            slug={slug}
            product={product}
            blog={blog}
            search={search}
            searchProduct={searchProduct}
            searchBlog={searchBlog}
            pages={searchPages}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

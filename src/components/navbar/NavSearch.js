import React from "react";
import SearchProduct from "./SearchProduct";
import SearchBlog from "./SearchBlog";
import SearchPages from "./SearchPages";

const NavSearch = ({ course, blog, setSearch, search, pages }) => {
  return (
    <div className="nav_search">
      {/* product */}
      <SearchProduct course={course} setSearch={setSearch} search={search} />

      {/* blog */}
      <SearchBlog blog={blog} setSearch={setSearch} search={search} />

      {/* pages */}
      <SearchPages setSearch={setSearch} search={search} pages={pages} />
    </div>
  );
};

export default NavSearch;

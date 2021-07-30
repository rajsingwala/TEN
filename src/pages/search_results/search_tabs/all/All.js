import React from "react";
import AllProducts from "./AllProducts";
import AllBlogs from "./AllBlogs";
import AllPages from "./AllPages";

const All = ({ searchProduct, searchBlog, pages }) => {
  const total = searchProduct?.length + searchBlog?.length + pages?.length;

  return (
    <div className="search_results_all">
      <div className="search_results_all_title">{total} results found</div>
      <AllProducts searchProduct={searchProduct} />
      <AllBlogs searchBlog={searchBlog} />
      <AllPages pages={pages} />
    </div>
  );
};

export default All;

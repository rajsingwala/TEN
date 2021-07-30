import React from "react";
import { Tabs } from "antd";
import All from "./all/All";
import Products from "./Products";
import Blogs from "./Blogs";
import Pages from "./Pages";
import ForumPosts from "./ForumPosts";
import { selectTab, setTab } from "../../../features/tabSlice";
import { useDispatch, useSelector } from "react-redux";

const { TabPane } = Tabs;

const SearchTabs = ({ slug, searchProduct, searchBlog, search, pages }) => {
  const tab = useSelector(selectTab);

  const dispatch = useDispatch();

  const handleKey = (value) => {
    dispatch(setTab({ tab: value }));
  };

  return (
    <div className="search_results_tabs">
      <Tabs activeKey={tab} onChange={handleKey}>
        <TabPane
          tab={`All (${
            searchProduct?.length + searchBlog?.length + pages?.length
          })`}
          key="1"
        >
          <All
            searchProduct={searchProduct}
            searchBlog={searchBlog}
            pages={pages}
          />
        </TabPane>
        <TabPane tab={`Products (${searchProduct?.length})`} key="2">
          <Products products={searchProduct} />
        </TabPane>
        <TabPane tab={`Blog Posts (${searchBlog?.length})`} key="3">
          <Blogs blog={searchBlog} />
        </TabPane>
        <TabPane tab={`Pages (${pages?.length})`} key="4">
          <Pages pages={pages} />
        </TabPane>
        <TabPane tab={`Forum Posts`} key="5">
          <ForumPosts />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SearchTabs;

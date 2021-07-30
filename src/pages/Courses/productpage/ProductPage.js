import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getData } from "../../../function/courses";
import ProductPageLeft from "./ProductPageLeft";
import ProductPageRight from "./ProductPageRight";

const ProductPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState({});
  const [index, setIndex] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getData()
      .then((res) => {
        for (let i = 1; i <= 10; ++i) {
          if (res.data.courses[i].slug === slug) {
            setData(res.data.courses[i]);
            setIndex(i);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const nextData = (idx) => {
    getData()
      .then((res) => {
        setData(res.data.courses[idx]);
        setIndex(idx);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="product_page">
      <div className="product_page_top" />
      <div className="product_page_container">
        <ProductPageLeft data={data} />
        <ProductPageRight data={data} nextData={nextData} index={index} />
      </div>
    </div>
  );
};

export default ProductPage;

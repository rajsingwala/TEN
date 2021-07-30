import React, { useEffect, useState } from "react";
import BuyNav from "./BuyNav";
import BuyContent from "./BuyContent";
import { useParams } from "react-router-dom";
import { getData } from "../../../../function/courses";

const Buy = () => {
  const [data, setData] = useState({});

  const { slug } = useParams();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getData()
      .then((res) => {
        for (let i = 1; i <= 10; i++) {
          if (res?.data?.courses[i]?.slug === slug) {
            setData(res.data.courses[i]);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="checkout">
      <div className="checkout_container">
        <BuyNav />
        <BuyContent data={data} />
      </div>
    </div>
  );
};

export default Buy;

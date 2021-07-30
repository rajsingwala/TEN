import React from "react";
import ProductManagementTop from "./ProductManagementTop";
import EntrepreneurshipMid from "../entrepreneurship/EntrepreneurshipMid";
import EntrepreneurshipBottom from "../entrepreneurship/EntrepreneurshipBottom";

const ProductManagement = () => {
  return (
    <div className="entrepreneurship">
      <div className="entrepreneurship_container">
        <ProductManagementTop />
        <EntrepreneurshipMid />
        <EntrepreneurshipBottom />
      </div>
    </div>
  );
};

export default ProductManagement;

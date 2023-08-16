import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "./CardFeature"; 
import FilterProduct from "./FilterProduct";

const AllProduct = ({ heading }) => {
  // Get product data from Redux store
  const productData = useSelector((state) => state.product.productList);
  
  // Create a list of unique categories from the product data
  const categoryList = [...new Set(productData.map((el) => el.category))];

  // State to manage filtered data
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  // Function to handle filtering products by category
  const handleFilterProduct = (category) => {
    setFilterBy(category);
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  // Create an array for loading placeholders
  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] ? (
          // Render FilterProduct components for each category
          categoryList.map((el) => {
            return (
              <FilterProduct
                category={el}
                key={el}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          // Show loading message if categoryList is empty
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0] ? (
          // Render CardFeature components for each product in dataFilter
          dataFilter.map((el) => {
            return (
              <CardFeature
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                category={el.category}
                price={el.price}
              />
            );
          })
        ) : (
          // Show loading placeholders if dataFilter is empty
          loadingArrayFeature.map((el, index) => (
            <CardFeature loading="Loading..." key={index + "allProduct"} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllProduct;

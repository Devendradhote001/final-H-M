import React, { useEffect } from "react";
import { fetchProductDataHook } from "../hooks/ladiesHook";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../features/errorSlice";
import ProductCard from "../components/ProductCard";

const LadiesPage = () => {
  const dispatch = useDispatch();
  const { data, isPending, error } = fetchProductDataHook("ladies");
  console.log(data);

  const { message } = useSelector((state) => state.error);

  if (isPending) return <h1>Loading....</h1>;

  return (
    <div>
      <h1>Products</h1>
      <div className="flex gap-5">
        {data?.productsData.map((elem) => {
          return <ProductCard key={elem._id} product={elem} />;
        })}
      </div>
    </div>
  );
};

export default LadiesPage;

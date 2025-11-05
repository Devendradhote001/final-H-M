import React, { useEffect } from "react";
import { fetchProductDataHook } from "../hooks/ladiesHook";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../features/errorSlice";

const LadiesPage = () => {
  const dispatch = useDispatch();
  const { data, isPending, error } = fetchProductDataHook("ladies");
  console.log(data);

  const { message } = useSelector((state) => state.error);
  console.log(message);

  if (isPending) return <h1>Loading....</h1>;

  return (
    <div>
      <h1>reduc me jo hai vo dikhega--{message}</h1>
      <button onClick={() => dispatch(setMessage("gaali mat do"))}>
        Add message
      </button>
    </div>
  );
};

export default LadiesPage;

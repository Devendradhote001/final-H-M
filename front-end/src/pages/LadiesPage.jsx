import React, { useEffect } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { getProductByCategory } from "../apis/ProductApis";

const LadiesPage = () => {
  const { data } = useQuery({
    queryKey: ["ladies products"],
    queryFn: () => getProductByCategory("ladies"),
    staleTime: Infinity,
  });

  console.log(data);

  return <div>this is LAdies page</div>;
};

export default LadiesPage;

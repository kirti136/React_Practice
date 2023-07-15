import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const [apiData, setApiData] = useState(null);
  let { product_id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${product_id}`)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.log(err));
  }, [product_id]);
  return <div>{apiData ? <h1>{JSON.stringify(apiData)}</h1> : null}</div>;
}

export default Product;

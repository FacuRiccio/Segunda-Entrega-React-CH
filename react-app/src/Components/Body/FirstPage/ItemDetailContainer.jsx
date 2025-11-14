import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ItemInfo() {
  const [prod, setProd] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((x) => {
        setProd(x), console.log(x);
      })
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div>
      <h1>{prod.title}</h1>
      <img src={prod.thumbnail} alt="" />
      <p>{prod.description}</p>
    </div>
  );
}

export default ItemInfo;

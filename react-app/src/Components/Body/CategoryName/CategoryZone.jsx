import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import Card from "react-bootstrap/Card";

function CategoryName() {
  const { category } = useParams();
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((x) => {
        setState(x.products);
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="first-zone">
      {state.map((el) => {
        return <Categorys prod={el}></Categorys>;
      })}
    </div>
  );
}
const Categorys = ({ prod }) => {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(0);
  const handleSumar = () => {
    setCantidad(() => cantidad + 1);
  };
  const handleRestar = () => {
    setCantidad(() => cantidad - 1);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.images[0]} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <p className="card-text">{prod.description}</p>
        <button className="boton" onClick={() => handleSumar()}>
          +
        </button>
        {cantidad}
        <button className="boton" onClick={() => handleRestar()}>
          -
        </button>
        <Link to={`/Item/${prod.id}`} className="bo-load">
          Ver Mas
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CategoryName;

//   onClick={() => {
//   navigate(`/Item/:${state.id}`);
// }}

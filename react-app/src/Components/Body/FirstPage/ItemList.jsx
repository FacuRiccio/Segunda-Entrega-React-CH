import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useNavigate, Link } from "react-router";

function ItemList({ data }) {
  return (
    <div className="first-zone">
      {data.map((items) => {
        return <Item data={items}></Item>;
      })}
    </div>
  );
}

export const Item = ({ data }) => {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(0);
  const handleSumar = () => {
    setCantidad(() => cantidad + 1);
  };
  const handleRestar = () => {
    setCantidad(() => cantidad - 1);
  };
  return (
    <div key={data.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.images[0]} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <p className="card-text">{data.description}</p>
          <button className="boton" onClick={() => handleSumar()}>
            +
          </button>
          {cantidad}
          <button className="boton" onClick={() => handleRestar()}>
            -
          </button>
          <Link to={`/Item/${data.id}`} className="bo-load">
            Ver Mas
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ItemList;

/*onClick={() => {
              navigate(`/Item/${data.id}`);
            }}*/

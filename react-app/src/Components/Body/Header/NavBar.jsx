import Logo2 from "../../../img/Logo2.png";
import { BsPersonCircle } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
const NavBar = ({ datos }) => {
  return (
    <header>
      <nav className="container-first">
        <Link to={"/"}>
          <img src={Logo2} className="Logo" />
        </Link>
        <input
          type="text"
          className="buscador"
          placeholder="Que estas buscando?"
        />
        <button className="btn" type="submit"></button>
        <span className="btn-header-container">
          <ButtonOption
            Icon={BsPersonCircle}
            size={40}
            color="#3e445a"
            texto="Registrarme Mi Cuenta"
          />
          <ButtonOption
            Icon={FaShoppingCart}
            size={40}
            color="#3e445a"
            texto="Ver  Carrito"
            counter={<button className="Cart-counter">0</button>}
          />
        </span>
      </nav>
      <ListOption lista={datos}></ListOption>
    </header>
  );
};
const ButtonOption = ({ Icon, size, texto, color, counter }) => {
  return (
    <div>
      <a href="" className="btn-contenedor">
        <span className="btn-option">
          <Icon size={size} color={color}></Icon>
        </span>
        <h5 className="btn-text">{texto}</h5>
        <span>{counter}</span>
      </a>
    </div>
  );
};
const ListOption = ({ lista }) => {
  const category = [...new Set(lista.map((l) => l.category))];

  return (
    <nav className="ListOption">
      {category.map((cat) => {
        return (
          <Link to={`/category/${cat}`} className="list">
            {cat}
          </Link>
        );
      })}
      <Link to="item/${}" className="list">
        Ofertas
      </Link>
    </nav>
  );
};
export default NavBar;

// <nav className="ListOption">
//   {lista.map((prod, i) => (
//     <nav className="ListOption">
//       <a className="list">{prod.category}</a>
//     </nav>
//   ))}
// </nav>

{
}

import NavBar from "./NavBar";

const Layout = ({ apiRes }) => {
  return (
    <div className="Layout">
      <NavBar datos={apiRes}></NavBar>
      <hr />
    </div>
  );
};

export default Layout;

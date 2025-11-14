import ItemList from "./ItemList";

function ItemListContainer({ apiRes }) {
  return (
    <div>
      <ItemList data={apiRes}></ItemList>
    </div>
  );
}

export default ItemListContainer;

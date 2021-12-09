const ItemsBreakfast = ({ data, addToCart, deleteFromCart }) => {
  let { _id, name, price, image } = data;

  return (
    <div className="menu-desayuno">
      <div className="img-product">
        <img className="pdtimg" src={image} alt="logos food" />
      </div>
      <div className="productname">
        <h3>{name}</h3>
      </div>
      <div className="bttns-add-rest">
        <button className="bttn-rest" onClick={() => deleteFromCart(_id)}>
          -
        </button>
        <p className="price"> {price}</p>
        <button className="bttn-sum" onClick={() => addToCart(_id)}>
          +
        </button>
      </div>
    </div>
  );
};
export default ItemsBreakfast;

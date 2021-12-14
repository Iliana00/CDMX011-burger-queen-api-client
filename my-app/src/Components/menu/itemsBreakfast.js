const ItemsBreakfast = ({ data }) => {
    let { name, price, image } = data;
  
    return (
      <div className="menu-desayuno">
        <div className="img-product">
          <img className="pdtimg" src={image} alt="logos food" />
        </div>
        <div className="productname">
          <h3>{name}</h3>
        </div>
        <div className="bttns-add-rest">
          <button className="bttn-rest" >
            -
          </button>
          <p className="price"> {price}</p>
          <button className="bttn-sum" >
            +
          </button>
        </div>
      </div>
    );
  };
  export default ItemsBreakfast;
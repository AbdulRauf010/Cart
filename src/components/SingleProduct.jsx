import { useContext } from "react";
import { Cart } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);

  const isInCart = cart.includes(prod);

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>rs{prod.price.substring(0, 3)}</span>
      </div>

      {isInCart ? (
        <button
          className="remove"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove From cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;

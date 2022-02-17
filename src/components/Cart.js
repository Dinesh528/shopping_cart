import React from "react";
import { useSelector } from "react-redux";
function Cart() {
  const product = useSelector((state) => state.handleCart);
  console.log(product);

  const showCart = () => {
    return (
      <>
        {product.map((pro) => (
          <div className="container">
            <div className="row py-5">
              <div className="col-md-4">
                <img src={pro.image} key={pro.id} alt={pro.title} height="200px" width="180px" />
              </div>
              <div className="col-md-4">
                <h3>{pro.title}</h3>
                <p className="lead fw-bold">
                  {pro.qty} X ${pro.price} = ${pro.qty * pro.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  const EmptyComponent = () => {
    return (
      <div className="container py-4">
        <div className="display-4">Your Cart is Empty</div>
      </div>
    );
  };
  return <div>{product.length !== 0 ? showCart() : <EmptyComponent />}</div>;
}

export default Cart;

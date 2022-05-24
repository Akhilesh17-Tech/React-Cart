import CartItem from './CartItem';

const Cart = (props) => {
  // products from state
  const { products } = props;
  return (
    <div className="cart offcanvas-body m-5 container1">
      {/* <CartItem qty={1} price={999} title={'watch'} img={''} /> */}
      {products.map((product) => {
        return (
          // we can pass function, jsx, component, boolean, key(for react internal purpose),
          <CartItem
            product={product}
            key={product.id}
            increaseQuantity={props.increaseQuantity}
            decreaseQuantity={props.decreaseQuantity}
            deleteProduct={props.deleteProduct}
            // func={() => {
            //   console.log('Akhilesh');
            // }}
            // isLoggedin={false}
            // jsx={<h1>Test JSX</h1>}
            // component={<CartItem />}
          />
        );
      })}
    </div>
  );
};

export default Cart;

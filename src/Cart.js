import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'watch',
          qty: 10,
          img: '',
          id: 1,
        },
        {
          price: 39999,
          title: 'laptop',
          qty: 40,
          img: '',
          id: 2,
        },
        {
          price: 9999,
          title: 'mobile',
          qty: 100,
          img: '',
          id: 3,
        },
      ],
    };
  }
  render() {
    // products from state
    const { products } = this.state;
    return (
      <div className="cart">
        {/* <CartItem qty={1} price={999} title={'watch'} img={''} /> */}
        {products.map((product) => {
          return (
            // we can pass function, jsx, component, boolean, key(for react internal purpose),
            <CartItem
              product={product}
              key={product.id}
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
  }
}

export default Cart;

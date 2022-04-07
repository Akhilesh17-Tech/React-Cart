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
          qty: 5,
          img: '',
          id: 1,
        },
        {
          price: 39999,
          title: 'laptop',
          qty: 10,
          img: '',
          id: 2,
        },
        {
          price: 9999,
          title: 'mobile',
          qty: 15,
          img: '',
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    console.log('Hey please inc the qty of product ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };

  handledecreaseQuantity = (product) => {
    console.log('Hey please inc the qty of product ', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // console.log(index);
    if (products[index].qty > 0) {
      products[index].qty -= 1;
    } else {
      return;
    }
    this.setState({
      products: products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };

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
              increaseQuantity={this.handleIncreaseQuantity}
              decreaseQuantity={this.handledecreaseQuantity}
              deleteProduct={this.handleDeleteProduct}
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

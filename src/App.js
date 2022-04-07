import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'watch',
          qty: 5,
          img: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          id: 1,
        },
        {
          price: 39999,
          title: 'laptop',
          qty: 10,
          img: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg',
          id: 2,
        },
        {
          price: 9999,
          title: 'mobile',
          qty: 15,
          img: 'https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach((item) => {
      count += item.qty;
    });

    return count;
  };

  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((item) => {
      cartTotal = cartTotal + item.qty * item.price;
    });

    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity={this.handledecreaseQuantity}
          deleteProduct={this.handleDeleteProduct}
        />

        <div style={{ fontSize: 25, padding: 15 }}>
          Total : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;

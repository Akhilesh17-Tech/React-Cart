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

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach((item) => {
      count += item.qty;
    });

    return count;
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
      </div>
    );
  }
}

export default App;

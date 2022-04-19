// import logo from './logo.svg';
import React from 'react';
// import CartItem from "./CartItem";
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //       return '';
    //     });

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();

    //       data['id'] = doc.id;

    //       return data;
    //     });

    //     this.setState({
    //       products: products,
    //       loading: false,
    //     });
    //   });

    this.db
      .collection('products')
      // .where('qty', '==', 5)
      .orderBy('price', 'desc')
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          console.log(doc.data());
          return '';
        });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;

          return data;
        });

        this.setState({
          products: products,
          loading: false,
        });
      });
  }

  handleIncreaseQuantity = (product) => {
    console.log('Hey Please Inc the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products,
    // });

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log('Updated Successfully');
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  handleDecreaseQuantity = (product) => {
    console.log('Hey Please Inc the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   products,
    // });

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .then(() => {
        console.log('Updated Successfully');
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  handleDeleteProduct = (id) => {
    // const { products } = this.state;

    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items,
    // });

    const docRef = this.db.collection('products').doc(id);

    docRef
      .delete()
      .then(() => {
        console.log('Delete Successfully@');
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      if (product.qty > 0) {
        cartTotal += product.qty * product.price;
      }
      return '';
    });

    return cartTotal;
  };

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: 'https://st.depositphotos.com/1001877/5138/i/600/depositphotos_51380105-stock-photo-washing-machine.jpg',
        price: 999,
        qty: 5,
        title: 'Washing Machine',
      })
      .then((docRef) => {
        console.log('Product Has Been Added', docRef);
      })
      .catch((err) => {
        console.log('Error :', err);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add a product
        </button>
        {/* <h1>Cart</h1> */}
        <Cart
          products={products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity={this.handleDecreaseQuantity}
          deleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;

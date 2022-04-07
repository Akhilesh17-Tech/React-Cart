import React from 'react';

const CartItem = (props) => {
  // // constructor() {
  // //   super();
  // //   this.state = {
  // //     price: 999,
  // //     title: 'mobile phone',
  // //     qty: 1,
  // //     img: '',
  // //   };
  // // }

  // // we can use arrow function for binding because it will automatically bind the method
  // increaseQuantity = () => {
  //   // this.setstate.qty += 1;
  //   // console.log('this', this.state);
  //   // // setState form 1
  //   // this.setState({
  //   //   qty: this.state.qty + 1,
  //   // });
  //   // setState form 2 shallow merging
  //   this.setState(
  //     (prevState) => {
  //       return {
  //         qty: prevState.qty + 1,
  //       };
  //     },
  //     () => {
  //       console.log('this.state', this.state);
  //     }
  //   );
  // };

  // decreaseQuantity = () => {
  //   // if (this.state.qty === 0) {
  //   //   return;
  //   // }
  //   const { qty } = this.state;
  //   if (qty === 0) {
  //     return;
  //   }
  //   // setState form 2 shallow merging
  //   this.setState(
  //     (prevState) => {
  //       return {
  //         qty: prevState.qty - 1,
  //       };
  //     },
  //     () => {
  //       console.log('this.state', this.state);
  //     }
  //   );
  // };

  //   object de-structuring means i want this properties from this.state which is constructor
  const { title, price, qty } = this.props.product;
  const { product, increaseQuantity, decreaseQuantity, deleteProduct } =
    this.props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} alt="" />
      </div>
      <div className="right-block">
        {/* without object destructuring we have to write this.state.propertName again & again */}
        {/* <div style={{ fontSize: 25 }}>{this.state.title}</div> */}
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: '#777' }}>Rs {price}</div>
        <div style={{ color: '#777' }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
            //   onClick={this.increaseQuantity.bind(this)}
            onClick={() => {
              increaseQuantity(product);
            }}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
            onClick={() => {
              this.props.decreaseQuantity(this.props.product);
            }}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
            onClick={() => {
              deleteProduct(product.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
};

export default CartItem;

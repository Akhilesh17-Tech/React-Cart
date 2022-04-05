import React from 'react';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Mobile Phone',
      price: 9999,
      qty: 1,
      img: '',
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  // we can use arrow function for binding because it will automatically bind the method
  increaseQuantity = () => {
    // this.setstate.qty += 1;
    // console.log('this', this.state);
    // // setState form 1
    // this.setState({
    //   qty: this.state.qty + 1,
    // });

    // setState form 2 shallow merging
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    // console.log('this', this.state);
    // setState form 1
    this.setState({
    if(qty === 0){
        
    }
      qty: this.state.qty - 1,
    });

    // setState form 2 shallow merging
    this.setState((prevState) => {
      if (this.state.qty === 0) {
        return;
      }
      return {
        qty: prevState.qty - 1,
      };
    });
  };

  render() {
    //   object de-structuring means i want this properties from this.state which is constructor
    const { title, price, qty } = this.state;
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
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
};

export default CartItem;

import React from "react";

class CartItem extends React.Component {
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="Akhilesh"></img>
        </div>
        <div className="right-block">
          <div style={{ fontSize: 12 }}>Phone</div>
          <div style={{ color: 12 }}>Rs 9999</div>
          <div style={{ background: "red" }}>Qty: 1</div>
          <div className="cart-item-actions">{/* Buttons */}</div>
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
    backgroundColor: "#ccc",
  },
};

export default CartItem;

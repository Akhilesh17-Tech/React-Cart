import React from 'react';

const Navbar = () => {
  return (
    <div style={styles.nav}>
      <div style={styles.logo}>Akhil's Cart</div>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
          alt="cartIcon"
        />
        <div style={styles.cartCount}>3</div>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    border: 15,
    height: 32,
    marginRight: 50,
  },
  logo: {
    color: 'white',
    marginLeft: 50,
    fontSize: 25,
    fontWeight: 900,
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // border: '1px solid red',
  },
  cartIconContainer: {
    position: 'relative',
    // border: '1px solid red',
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 30,
    top: -9,
  },
};

export default Navbar;

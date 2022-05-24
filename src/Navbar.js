import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand">Akhil's Cart</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link border border-light rounded"
                aria-current="page"
                to="/"
                onClick={props.addProduct}
              >
                Add a product
              </NavLink>
            </li>
          </ul>
        </div>
        <div style={styles.cartIconContainer}>
          <img
            style={styles.cartIcon}
            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            alt="cartIcon"
          />
          <div style={styles.cartCount}>{props.count}</div>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  cartIcon: {
    border: 15,
    height: 32,
    marginRight: 50,
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

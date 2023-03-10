import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <div>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                {" "}
                Free Shipping Over 100$ and Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 9876543210">
                  +91 9876543210
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <div className="text-white">DevGuruF.</div>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here ..."
                  aria-label="Search Product Here ..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <a
                    className="d-flex align-items-center gap-10 text-white"
                    href="www.google.com"
                  >
                    <img
                      style={{ height: "35px", width: "35px" }}
                      src="images/compare.svg"
                      alt="compare"
                    />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </a>
                </div>
                <div>
                  <a
                    className="d-flex align-items-center gap-10 text-white"
                    href="www.google.com"
                  >
                    <img
                      style={{ height: "35px", width: "35px" }}
                      src="images/wishlist.svg"
                      alt="wishlist"
                    />
                    <p className="mb-0">
                      Favorite <br /> Wishlists
                    </p>
                  </a>
                </div>
                <div>
                  <a
                    className="d-flex align-items-center gap-10 text-white"
                    href="www.google.com"
                  >
                    <img
                      style={{ height: "35px", width: "35px" }}
                      src="images/user.svg"
                      alt="user"
                    />
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </a>
                </div>
                <div>
                  <a
                    className="d-flex align-items-center gap-10 text-white"
                    href="www.google.com"
                  >
                    <img
                      style={{ height: "35px", width: "35px" }}
                      src="images/cart.svg"
                      alt="cart"
                    />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"> 
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Shop Categories
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/" >Our Store</NavLink>
                    <NavLink to="/" >Blogs</NavLink>
                    <NavLink to="/" >Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

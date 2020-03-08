import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className="top_nav d-flex pt-3 pb-1">
                    <h1>
                        <a className="navbar-brand" href="index.html">fh</a>
                    </h1>
                    <div className="w3ls_right_nav ml-auto d-flex">
                        <form className="nav-search form-inline my-0 form-control" action="#" method="post">
                            <select className="form-control input-lg" name="category">
                                <option value="all">Search our store</option>
                                <optgroup label="Mens">
                                    <option value="T-Shirts">T-Shirts</option>
                                    <option value="coats-jackets">Coats &amp; Jackets</option>
                                    <option value="Shirts">Shirts</option>
                                    <option value="Suits & Blazers">Suits &amp; Blazers</option>
                                    <option value="Jackets">Jackets</option>
                                    <option value="Sweat Shirts">Trousers</option>
                                </optgroup>
                                <optgroup label="Womens">
                                    <option value="Dresses">Dresses</option>
                                    <option value="T-shirts">T-shirts</option>
                                    <option value="skirts">Skirts</option>
                                    <option value="jeans">Jeans</option>
                                    <option value="Tunics">Tunics</option>
                                </optgroup>
                                <optgroup label="Girls">
                                    <option value="Dresses">Dresses</option>
                                    <option value="T-shirts">T-shirts</option>
                                    <option value="skirts">Skirts</option>
                                    <option value="jeans">Jeans</option>
                                    <option value="Tops">Tops</option>
                                </optgroup>
                                <optgroup label="Boys">
                                    <option value="T-Shirts">T-Shirts</option>
                                    <option value="coats-jackets">Coats &amp; Jackets</option>
                                    <option value="Shirts">Shirts</option>
                                    <option value="Suits & Blazers">Suits &amp; Blazers</option>
                                    <option value="Jackets">Jackets</option>
                                    <option value="Sweat Shirts">Sweat Shirts</option>
                                </optgroup>
                            </select>
                            <input className="btn btn-outline-secondary  ml-3 my-sm-0" type="submit" defaultValue="Search" />
                        </form>
                        {/* search form */}
                        <div className="nav-icon d-flex">
                            {/* sigin and sign up */}
                            <Link className="text-dark login_btn align-self-center mx-3" to="/login" data-target="#myModal_btn">
                                <i className="far fa-user" />
                            </Link>
                            {/* sigin and sign up */}
                            {/* shopping cart */}
                            <div className="cart-mainf">
                                <div className="hubcart hubcart2 cart cart box_1">
                                    <form action="#" method="post">
                                        <input type="hidden" name="cmd" defaultValue="_cart" />
                                        <input type="hidden" name="display" defaultValue={1} />
                                        <button className="btn top_hub_cart mt-1" type="submit" name="submit" value title="Cart">
                                            <i className="fas fa-shopping-bag" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            {/* //shopping cart ends here */}
                        </div>
                    </div>
                </nav>
                {/* //top nav */}
                {/* bottom nav */}
                <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item">
                                <Link className="nav-link  active" to="/">Home
          <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item dropdown has-mega-menu" style={{ position: 'static' }}>
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Men's clothing</a>
                                <div className="dropdown-menu" style={{ width: '100%' }}>
                                    <div className="px-0 container">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="men.html">T-Shirts</a>
                                                <a className="dropdown-item" href="men.html">Coats</a>
                                                <a className="dropdown-item" href="men.html">Shirts</a>
                                                <a className="dropdown-item" href="men.html">Suits &amp; Blazers</a>
                                                <a className="dropdown-item" href="men.html">Jackets</a>
                                                <a className="dropdown-item" href="men.html">Trousers</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="men.html">T-Shirts</a>
                                                <a className="dropdown-item" href="men.html">Trousers</a>
                                                <a className="dropdown-item" href="men.html">Shirts</a>
                                                <a className="dropdown-item" href="men.html">Suits &amp; Blazers</a>
                                                <a className="dropdown-item" href="men.html">Coats &amp; Jackets</a>
                                                <a className="dropdown-item" href="men.html">Jackets</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="men.html">T-Shirts</a>
                                                <a className="dropdown-item" href="men.html">Coats</a>
                                                <a className="dropdown-item" href="men.html">Shirts</a>
                                                <a className="dropdown-item" href="men.html">Suits &amp; Blazers</a>
                                                <a className="dropdown-item" href="men.html">Jackets</a>
                                                <a className="dropdown-item" href="men.html">Trousers</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown has-mega-menu" style={{ position: 'static' }}>
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Women's clothing</a>
                                <div className="dropdown-menu" style={{ width: '100%' }}>
                                    <div className="px-0 container">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="women.html">Dresses</a>
                                                <a className="dropdown-item" href="women.html">T-shirts</a>
                                                <a className="dropdown-item" href="women.html">Skirts</a>
                                                <a className="dropdown-item" href="women.html">Jeans</a>
                                                <a className="dropdown-item" href="women.html">Tunics</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="women.html">T-shirts</a>
                                                <a className="dropdown-item" href="women.html">Dresses</a>
                                                <a className="dropdown-item" href="women.html">Tunics</a>
                                                <a className="dropdown-item" href="women.html">Skirts</a>
                                                <a className="dropdown-item" href="women.html">Jeans</a>
                                            </div>
                                            <div className="col-md-4">
                                                <a className="dropdown-item" href="women.html">Dresses</a>
                                                <a className="dropdown-item" href="women.html">T-shirts</a>
                                                <a className="dropdown-item" href="women.html">Skirts</a>
                                                <a className="dropdown-item" href="women.html">Jeans</a>
                                                <a className="dropdown-item" href="women.html">Tunics</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown has-mega-menu" style={{ position: 'static' }}>
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Kids Clothing</a>
                                <div className="dropdown-menu" style={{ width: '100%' }}>
                                    <div className="container">
                                        <div className="row w3_kids  py-3">
                                            <div className="col-md-3 ">
                                                <span className="bg-light">Boy's Clothing</span>
                                                <a className="dropdown-item" href="boys.html">T-Shirts</a>
                                                <a className="dropdown-item" href="boys.html">Coats</a>
                                                <a className="dropdown-item" href="boys.html">Shirts</a>
                                                <a className="dropdown-item" href="boys.html">Suits &amp; Blazers</a>
                                                <a className="dropdown-item" href="boys.html">Jackets</a>
                                                <a className="dropdown-item" href="boys.html">Trousers</a>
                                            </div>
                                            <div className="col-md-3">
                                                <a className="dropdown-item mt-4" href="boys.html">T-Shirts</a>
                                                <a className="dropdown-item" href="boys.html">Coats</a>
                                                <a className="dropdown-item" href="boys.html">Shirts</a>
                                                <a className="dropdown-item" href="boys.html">Suits &amp; Blazers</a>
                                                <a className="dropdown-item" href="boys.html">Jackets</a>
                                                <a className="dropdown-item" href="boys.html">Trousers</a>
                                            </div>
                                            <div className="col-md-3">
                                                <span>Girl's Clothing</span>
                                                <a className="dropdown-item" href="girls.html">T-shirts</a>
                                                <a className="dropdown-item" href="girls.html">Dresses</a>
                                                <a className="dropdown-item" href="girls.html">Tunics</a>
                                                <a className="dropdown-item" href="girls.html">Skirts</a>
                                                <a className="dropdown-item" href="girls.html">Jeans</a>
                                                <a className="dropdown-item" href="girls.html">Midi</a>
                                            </div>
                                            <div className="col-md-3">
                                                <a className="dropdown-item  mt-4" href="girls.html">Tunics</a>
                                                <a className="dropdown-item" href="girls.html">Skirts</a>
                                                <a className="dropdown-item" href="girls.html">T-shirts</a>
                                                <a className="dropdown-item" href="girls.html">Dresses</a>
                                                <a className="dropdown-item" href="girls.html">Jeans</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="blog.html">Blog</a>
                            </li>
                            <li className="nav-item">

                                <Link className="nav-link" to="/contactus">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
import React from 'react'
import {NavLink, Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs";
function Header() {
  return (
    <>
    <header className='header-top-strip py-3'>
      <div className='container-xxl' >
        <div className='row'>
          <div className='col-6'>
            <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
          </div>
          <div className='col-6'>
            <p className='text-end text-white mb-0'>
              Helpline:<a className='text-white' href="tel:+91 7837275678">+91 9381774890</a>
            </p>
          </div>
        </div>
      </div>

    </header>
    <header className='header-upper py-3'>

      <div className='container-xxl' >
        <div className='row' >
          <div className='col-2'>
            <h2>
              <Link className='text-white'>ThirdView</Link>
            </h2>
          </div>
          <div className='col-5'>
          <div class="input-group ">
            <input type="text" 
            class="form-control py-2" 
            placeholder="Search Product Here.." 
            aria-label="Search Product Here.." 
            aria-describedby="basic-addon2"/>
            <span class="input-group-text p-3" id="basic-addon2">
              <BsSearch/></span>
          </div>
          </div>
          <div className='col-5'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src="images/compare.svg" alt="compare"/>
                <p className='mb-0'>
                  Compare <br/> Product
                </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src="images/wishlist.svg" alt="compare"/>
                <p className='mb-0'>
                  Favourite<br/>Whishlist
                </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src="images/user.svg" alt="compare"/>
                <p className='mb-0'>
                <NavLink to="/login" className='text-white'>Login <br/> My account</NavLink>
 
                </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src="images/cart.svg" alt="cart"/>
                <div className='d-flex flex-column gap-10'>
                  <span className='badge bg-white text-dark'>0</span>
                  <p className='mb-0'>
                  $ 500
                </p>
                </div>
              
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header className='header-bottom py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-button d-flex align-items-center gap-30 '>
              <div>
                <div className="dropdown ">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop Categories 
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item  text-white" to="">Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                    <li><Link className="dropdown-item text-white " to="">Something else here</Link></li>
                  </ul>
                </div>
              </div>
              <div className='menu-links'>
                <div className='d-flex align-items-center gap-15'>
                  <NavLink to="">Home</NavLink>
                  <NavLink to="/Store">Our Store</NavLink>
                  <NavLink to="">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header

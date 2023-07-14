import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import {BsInstagram,BsYoutube,BsFacebook,BsWhatsapp} from "react-icons/bs";
function Footer() {
  return (
   <>
    <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row align-items-center'>
        <div className='col-5'>
          <div className='footer-top-data d-flex gap-30 align-items-center'>
            <img src='images/newsletter.png' alt="newsletter"/>
            <h2 className='mb-0 text-white'>Sign Up for News Letter</h2>
          </div>
        </div>
        <div className='col-5'>
        <div class="input-group ">
            <input type="text" 
            class="form-control py-1" 
            placeholder="Enter Your Email Address.." 
            aria-label="Enter Your Email Address..." 
            aria-describedby="basic-addon2"/>
            <span class="input-group-text p-2" id="basic-addon2">
              Subscribe</span>
          </div>
        </div>
      </div>
    </div>
    </footer>
    
    <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white '>Contact Us</h4>
              <div>
                <address className='text-white'>
                  Shop:20 NTR complex <br/> Near Bus stand<br/>
                  PinCode:521321
                </address>
                <a href='tel:+91 9381774890' className='text-white mb-0'>
                  +91 9381774890 </a>
                <a href='mailto:thirdview55@gmail.com' className='mt-2 d-block mb-2 text-white'>
                thirdview55@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30'>
                  <a className='text-white' href='#' >
                    <BsFacebook/>
                  </a>
                  <a className='text-white'href='#' >
                    <BsInstagram/>
                  </a>
                  <a className='text-white'href='#'>
                    <BsYoutube/>
                  </a>
                  <a className='text-white' href='#'>
                    <BsWhatsapp/>
                  </a>
                </div>
              </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white '>Information</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white '>Account</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white '>Quick Links</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>Cameras</Link>
              <Link className='text-white py-2 mb-1'>Accessories</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>
              &copy;{new Date().getFullYear()}; powered by ThirdView SecuritySystems
            </p>
          </div>
        </div> 
      </div>
    </footer>
    
   </>
  ) 
}

export default Footer

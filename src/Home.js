import React from 'react'

// import Marquee from "react-fast-marquee";
import { Link, Router } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
          <div className='col-6'>
        <Carousel>
          <Carousel.Item>
            <img
              src='images/laptop-3.jpeg'
              className='img-fluid rounded-3'
              alt='banner'
            />
            <Carousel.Caption>
              <h4>SUPERCHARGED FOR PROS</h4>
              <h5>MAC Book Pro</h5>
              <p>From 90,000 to 3,00,000</p>
              <Link className='button'>BUY NOW</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src='images/laptop-3.jpeg'
              className='img-fluid rounded-3'
              alt='banner'
            />
            <Carousel.Caption>
              <h4>SUPERCHARGED FOR PROS</h4>
              <h5>MAC Book Pro</h5>
              <p>From 90,000 to 3,00,000</p>
              <Link className='button'>BUY NOW</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src='images/laptop-3.jpeg'
              className='img-fluid rounded-3'
              alt='banner'
            />
            <Carousel.Caption>
              <h4>SUPERCHARGED FOR PROS</h4>
              <h5>MAC Book Pro</h5>
              <p>From 90,000 to 3,00,000</p>
              <Link className='button'>BUY NOW</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative '> 
                <img src='images/catbanner-01.jpg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='small-banner-content position-absolute'>
                   <h4>BEST SALE</h4>
                   <h5>Pro Display XDR</h5>
                   <p>From 90,000 to 3,00,000</p>
                 </div>
              </div>
              <div className='small-banner position-relative '> 
                <img src='images/catbanner-02.jpg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='small-banner-content position-absolute'>
                   <h4>NEW ARRIVAL</h4>
                   <h5>Buy IPad Air</h5>
                   <p>From 90,000 to 25,000</p>
                 </div>
              </div>
              <div className='small-banner position-relative '> 
                <img src='images/catbanner-03.jpg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='small-banner-content position-absolute'>
                 <h4>BEST SALE</h4>
                   <h5>iPadS13+Pro</h5>
                   <p>From 90,000 to 3,00,000</p>
                 </div>
              </div>
              <div className='small-banner position-relative '> 
                <img src='images/catbanner-04.jpg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='small-banner-content position-absolute'>
                   <h4>NEW ARRIVAL</h4>
                   <h5>AirPods Pro</h5>
                   <p>From 5,000 to 52,000</p>
                 </div>
              </div>
              </div>
            {/* <div className='main-banner position-relative p-3'> 
                <img src='images/monitor-1.jpeg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='main-banner-content position-absolute'>
                   <h4>SUPERCHARGED FOR PROS</h4>
                   <h5>MAC Book Pro</h5>
                   <p>From 90,000 to 3,00,000</p>
                   <Link className='button'>BUY NOW</Link>
                 </div>
              </div> */}
            </div>
            
          </div>
          <div className='row'>
          <h2 className='align-items-center'>Security Surveillance</h2>
            <div className='col-6'>
              <div className='main-banner position-relative '> 
                <img src='images/salman-6.jpg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='main-banner-content position-absolute'>
                   <h4></h4>
                   <h5></h5>
                   <p></p>
                   {/* <Link className='button'>BUY NOW</Link> */}
                 </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'> 
                <img src='images/cam-01.jpg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='small-banner-content position-absolute'>
                   <h4>BEST SALE</h4>
                   <h5>Pro Display XDR</h5>
                   <p>From 90,000 to 3,00,000</p>
                 </div>
              </div>
              <div className='small-banner position-relative '> 
                <img src='images/cam-02.jpg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='small-banner-content position-absolute'>
                   <h4>NEW ARRIVAL</h4>
                   <h5>Buy IPad Air</h5>
                   <p>From 90,000 to 25,000</p>
                 </div>
              </div>
              <div className='small-banner position-relative '> 
                <img src='images/cam-5.jpg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='small-banner-content position-absolute'>
                 <h4>BEST SALE</h4>
                   <h5>iPadS13+Pro</h5>
                   <p>From 90,000 to 3,00,000</p>
                 </div>
              </div>
              <div className='small-banner position-relative '> 
                <img src='images/wificam-03.jpg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='small-banner-content position-absolute'>
                   <h4>NEW ARRIVAL</h4>
                   <h5>AirPods Pro</h5>
                   <p>From 5,000 to 52,000</p>
                 </div>
              </div>
              <div className='small-banner position-relative '> 
                <img src='images/cam-6.1.jpg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='small-banner-content position-absolute'>
                   <h4>NEW ARRIVAL</h4>
                   <h5>AirPods Pro</h5>
                   <p>From 5,000 to 52,000</p>
                 </div>
              </div>
              <div className='small-banner position-relative '> 
                <img src='images/ptz.jpg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='small-banner-content position-absolute'>
                   <h4>NEW ARRIVAL</h4>
                   <h5>AirPods Pro</h5>
                   <p>From 5,000 to 52,000</p>
                 </div>
              </div>
              </div>
            {/* <div className='main-banner position-relative p-3'> 
                <img src='images/monitor-1.jpeg' 
                className='img-fluid rounded-3' alt="banner"/>
                 <div className='main-banner-content position-absolute'>
                   <h4>SUPERCHARGED FOR PROS</h4>
                   <h5>MAC Book Pro</h5>
                   <p>From 90,000 to 3,00,000</p>
                   <Link className='button'>BUY NOW</Link>
                 </div>
              </div> */}
            </div>
            
          </div>

        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service.png' alt='services'/>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over 1000 rupees</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-02.png' alt='services'/>
                  <div>
                    <h6>Daily Surprice offerce</h6>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-03.png' alt='services'/>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-04.png' alt='services'/>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-05.png' alt='services'/>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payemnt </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-3 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='catogories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/smartphone-2.jpg' alt='products'/>
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/tv.jpg' alt=''/>
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/watch-2.jpg' alt=''/>
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='products'/>
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/acc.jpg' alt='products'/>
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/speaker.jpg' alt='products'/>
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='products'/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='products'/>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-3 py-1 mb-0'>
        <h2 className='align-items-center'>Accessories</h2>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div  className='catogories2 d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>BNC</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/bnc.jpg' alt='products'/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Secure Cables</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/cable-2.jpg' alt='products'/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Hard Disks</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/hardisk.png' alt='products'/>
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Installation Toolkit</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/toolkit.jpg' alt='products'/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/dvr-01.jpg' alt='products'/>
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Powersupply</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/powersuply.jpg' alt='products'/>
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Tags</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/tags.jpg' alt='products'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='marquee-wrapper py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper'>
              {/* <Marquee>
              Hi welcome
              </Marquee> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

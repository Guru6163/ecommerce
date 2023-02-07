import React from 'react'

function Footer() {
  return (
    <div>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src="images/newsletter.png" alt="newsletter" />
                <h3 className='mb-0 text-white'>Signup for Newsletter</h3>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address."
                  aria-label="Your Email Address."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact US</h4>
              <div>
                <address className='text-white fs-6'>
                  Hno : 277 Near Vil Chopal, <br /> Soniat, Haryana <br />
                  Pincode : 131103
                </address>
                <a href='tel:+91 987654321' className='mt-4 d-block mb-3 text-white'>
                  +91 987654321
                </a>
                <a href='mailto:gprasath20@gmail.com' className='mt-4 d-block mb-3 text-white'>
                  gprasath20@gmail.com
                </a>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <a className='text-white py-2 mb-1'>Privacy Policy</a>
                <a className='text-white py-2 mb-1'>Refund Policy</a>
                <a className='text-white py-2 mb-1'>Shipping Policy</a>
                <a className='text-white py-2 mb-1'>Terms & Conditions</a>
                <a className='text-white py-2 mb-1'>Blogs</a>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <a className='text-white py-2 mb-1'>About Us</a>
                <a className='text-white py-2 mb-1'>FAQ</a>
                <a className='text-white py-2 mb-1'>Contact</a>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <a className='text-white py-2 mb-1'>Laptops</a>
                <a className='text-white py-2 mb-1'>Headphones</a>
                <a className='text-white py-2 mb-1'>Tablets</a>
                <a className='text-white py-2 mb-1'>Watches</a>
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
                &copy; {new Date().getFullYear()}; Developed by GuruF
              </p>
            </div>
          </div>

        </div>

      </footer>
    </div>
  )
}

export default Footer
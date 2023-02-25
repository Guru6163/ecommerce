import React from 'react'

function Home() {
  return (
    <div>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-3'>
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main-banner" />
                <div className='main-banner-content position-absolute'>
                  <h4>Supercharged for Pros</h4>
                  <h5>IPad S13+ PRO</h5>
                  <p>From $999.00</p>
                  <div className='button'>Buy Now</div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-center align-items-center'>
                <div className='small-banner position-relative p-3'>
                  <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="small-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>Supercharged for Pros</h4>
                    <h5>Laptops Max</h5>
                    <p>From $999.00</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-3'>
                  <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="small-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>Best Seller</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>From $999.00</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-3'>
                  <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="small-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>New Arrival</h4>
                    <h5>IPad S13+ PRO</h5>
                    <p>From $999.00</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-3'>
                  <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="small-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>Supercharged for Pros</h4>
                    <h5>IPad S13+ PRO</h5>
                    <p>From $999.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
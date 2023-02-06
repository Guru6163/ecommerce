import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'> Free Shipping Over 100$ and Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href='tel:+91 9876543210'>+91 9876543210</a></p>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Header
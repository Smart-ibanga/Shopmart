import React from 'react'

const Header = () => {
  return (
    <header className="header-top-strip py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-2">
            <h2 >
              <link className="text-white">Dev corner</link>
            </h2>
          </div>
          <div className="col-5">
            <div className="input-group mb-3">
              <input 
              type="text" 
              className='front-control'
              placeholder='search products here'
              aria-label='Search Product Here...'
              aria-describedby='basic-addons2'
              />
              <span className='input-group text' id='basic-addons2'>
                @example.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
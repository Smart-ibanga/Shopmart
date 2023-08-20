import React from 'react'

const Header = () => {
  return (
    <header className="header-top-strip py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p>
              Free shipping over $100 and Free returns</p>
          </div>
          <div className="col-6">
            <p className="text-end">
              Hotline <a href="+234 8033320634">+234 8033320634</a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
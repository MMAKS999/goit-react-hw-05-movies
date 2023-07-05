import React from 'react';
// import Header from '../header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <nav className="navbar  navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;

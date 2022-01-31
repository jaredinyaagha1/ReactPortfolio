import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" onClick={() => handlePageChange('Home')} href="#home">Jared Inya-Agha</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" onClick={() => handlePageChange('About')} href="#about">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => handlePageChange('Portfolio')} href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => handlePageChange('Contact')} href="#contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => handlePageChange('Resume')} href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;

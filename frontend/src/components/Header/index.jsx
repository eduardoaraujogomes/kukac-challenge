import React, { useState } from 'react';
import './style.scss';
import Svg from '../Svg';
import { firstSvg, secondSvg } from './svgValues';

function Header() {
  const [svgVal, setSvgVal] = useState(firstSvg);

  const change = () => {
    setSvgVal(svgVal === firstSvg ? secondSvg : firstSvg);
  };

  return (
    <>
      <div id='header'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg '>
            <a className='navbar-brand playground' href='index.html'>
              <h3>Playground Kukac</h3>
            </a>
            <button
              onClick={change}
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <Svg svgVal={svgVal} />
            </button>
            <div
              className='collapse navbar-collapse justify-content-end'
              id='navbarNav'
            >
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='#about'
                  >
                    Palíndrome
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='#technologies'
                  >
                    Compras
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='#projects'
                  >
                    Carros/Motos
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='#contact'
                  >
                    CEP's
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;

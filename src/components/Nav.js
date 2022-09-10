/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav
        className='navbar navbar-dark navbar-expand-lg bg-dark'
        id='navbar-desktop'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            TuConversión
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/bit' className='nav-link active'>
                  Bit
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/byte' className='nav-link active'>
                  B
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link active'>
                  KB
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/megabyte' className='nav-link active'>
                  MB
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/gigabyte' className='nav-link active'>
                  GB
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/terabyte' className='nav-link active'>
                  TB
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/petabyte' className='nav-link active'>
                  PB
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/exabyte' className='nav-link active'>
                  EB
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/zettabyte' className='nav-link active'>
                  ZB
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className='navbar navbar-dark bg-dark fixed-top' id='navbar-mobile'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            TuConversión
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'>
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                TuConversión
              </h5>
              <button
                type='button'
                className='btn-close btn-close-white'
                data-bs-dismiss='offcanvas'
                aria-label='Close'></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <a href='/bit' className='nav-link active'>
                    Conversión de Bits
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='/byte' className='nav-link active'>
                    Conversión de Bytes
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='/' className='nav-link active'>
                    Conversión de Kilobytes
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='/megabyte' className='nav-link active'>
                    Conversión de Megabytes
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='/gigabyte' className='nav-link active'>
                    Conversión de Gigabytes
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='/terabyte' className='nav-link active'>
                    Conversión de Terabytes
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='/petabyte' className='nav-link active'>
                    Conversión de Petabytes
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='/exabyte' className='nav-link active'>
                    Conversión de Exabytes
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='/zettabyte' className='nav-link active'>
                    Conversión de Yottabytes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

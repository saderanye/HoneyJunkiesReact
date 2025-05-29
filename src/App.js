import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>

      {/* HEADER */}
      <header className="bg-warning py-3 sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          <img src="/logo.png" alt="Honey Junkies Logo" style={{ height: '100px' }} />
          <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#shop">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>


      {/* HOME SECTION */}
      <section id="home" className="container py-5 text-center">
        <h1 className="display-4 mb-3">Welcome to Honey Junkies</h1>
        <p className="lead">Your one-stop shop for all things honey and bee-related!</p>
        <div>
          <img src='\HoneyJunkiesWindow-Q5.jpg' alt='Logo on a Window' style={{ width: '500px', height: 'auto' }} />
        </div>
        <button className="btn btn-warning mt-3">Shop Now</button>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="container py-5">
        <h2 className="text-center mb-4">About Honey Junkies</h2>
        <p className="text-center">
          At Honey Junkies, we are passionate about delivering the finest honey products
          sourced directly from sustainable bee farms. Our mission is to bring nature’s
          sweetness to your table while supporting bee conservation efforts worldwide.
        </p>
      </section>

      {/* SHOP SECTION */}
      <section id="shop" className="container py-5">
        <h2 className="text-center mb-4">Our Shop</h2>
        <div className="row">
          {/* Example product card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/honey1.jpg" className="card-img-top" alt="Honey Jar" />
              <div className="card-body">
                <h5 className="card-title">Raw Organic Honey</h5>
                <p className="card-text">Delicious, unfiltered, and straight from the hive.</p>
                <button className="btn btn-warning">Buy Now</button>
              </div>
            </div>
          </div>

          {/* Example product card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/honey2.jpg" className="card-img-top" alt="Honey Comb" />
              <div className="card-body">
                <h5 className="card-title">Honeycomb Squares</h5>
                <p className="card-text">Perfect for snacking or adding to your favorite dish.</p>
                <button className="btn btn-warning">Buy Now</button>
              </div>
            </div>
          </div>

          {/* Example product card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/honey3.jpg" className="card-img-top" alt="Infused Honey" />
              <div className="card-body">
                <h5 className="card-title">Infused Honey Blends</h5>
                <p className="card-text">Unique flavors like lavender, chili, and lemon zest.</p>
                <button className="btn btn-warning">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="container py-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-warning">Send Message</button>
        </form>
      </section>

      {/* FOOTER*/}
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} Honey Junkies. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

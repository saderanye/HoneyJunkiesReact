import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
  };


  return (
    <div>

      {/* HEADER */}
      <header className="bg-warning py-1 sticky-top">
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
      <section id="home" className="container py-4 text-center">
        <h1 className="display-4 mb-3">Welcome to Honey Junkies</h1>
        <p className="lead">Your one-stop shop for all things honey and bee-related!</p>
        <div className='text-center'>
          <img src='/HoneyJunkiesJarsSide.jpg' alt='Logo on a Window' style={{ width: '600px', height: 'auto' }} />
        </div>
        <button className="btn btn-warning mt-3" onClick={() => window.location.href = '#shop'}>Shop Now</button>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="container py-4">
        <h2 className="text-center mb-4">About Honey Junkies</h2>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/beeKeepers.jpg" className="d-block w-100" alt="BeeKeepers" />
    </div>
    <div className="carousel-item">
      <img src="/beeFlower.jpg" className="d-block w-100" alt="Bee Flowers" />
    </div>
    <div className="carousel-item">
      <img src="/beesTwo.jpg" className="d-block w-100" alt="Bees Two" />
    </div>
  </div>

  {/* Previous button */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  {/* Next button */}
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        <p className="text-center">
          At Honey Junkies, we are passionate about delivering the finest honey products
          sourced directly from sustainable bee farms. Our mission is to bring nature’s
          sweetness to your table while supporting bee conservation efforts worldwide.
        </p>
      </section>

      {/* SHOP SECTION */}
      <section id="shop" className="container py-4">

        <h2 className="text-center mb-4">Our Shop</h2>
        <div className="row">
          {/* Example product card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 ">
              <div className='ratio ratio-1x1'>
                <img src="/rawHoney.jpg" className="card-img-top img-fluid" alt="Honey Jar" />
              </div>
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
              <div className='ratio ratio-1x1'>
                <img src="/HoneyJunkies-CardboardBox-Q4.jpg" className="card-img-top img-fluid" alt="Honey Comb" />
              </div>
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
              <div className='ratio ratio-1x1'>
                <img src="/golden.jpg" className="card-img-top img-fluid" alt="Infused Honey" />

              </div>
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
      <section id="contact" className="container py-4">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
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

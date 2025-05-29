import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">

      {/* Header with navigation */}
      <header>
        <div className='logo'>
          <img src='/logo.png' alt='Honey Junkies Logo' style={{height: '100px'}}/>
        </div>
        <nav>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#shop'>Shop</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <section id='home'>
        <h1>Welcome to Honey Junkies</h1>
        <p>Your sweet spot for honey and more!</p>
      </section>

      <section id='about'>
        <h1>About Honey Junkies</h1>
        <p>Here's where you can tell visitors about your business</p>
      </section>

      <section id='gallery'>
        <h1>Gallery</h1>
        {/* gallery will go here */}
      </section>

      <section id='contact'>
        <h1>Contact Us</h1>
        {/* contact form goes here */}
      </section>


    </div>
  );
}

export default App;

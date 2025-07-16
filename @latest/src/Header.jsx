function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Phoeze collection.</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#AboutUs">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#">Catalog</a>
          </li>
          <li>
            <a href="#bookings">Bookings</a>
          </li>
        </ul>
        <button className="visit-btn">Visit Us</button>
      </nav>
    </header>
  );
}

export default Header;

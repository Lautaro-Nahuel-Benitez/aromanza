import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar-logo" href="#inicio" aria-label="Aromanza, inicio">
        Aromanza<span>.</span>
      </a>

      <nav className="navbar-menu" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a
        className="navbar-social"
        href="https://www.instagram.com/aroma.a_speranza.ar/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
    </header>
  );
}

export default Navbar;

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="hero-subtitle">NATURALEZA, AROMAS Y BIENESTAR</p>
        <h1>
          Un aroma especial
          <br />
          para cada momento
        </h1>
        <p className="hero-description">
          Descubrí nuestra colección de sahumerios y llená tus espacios de armonía.
        </p>
        <a href="#productos" className="hero-button">
          Descubrir productos
        </a>
      </div>
    </section>
  );
}

export default Hero;

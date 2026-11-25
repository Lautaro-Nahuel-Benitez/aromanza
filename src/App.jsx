import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="intro" id="nosotros">
          <p className="eyebrow">UN MOMENTO PARA VOS</p>
          <h2>Pequeños rituales, grandes sensaciones.</h2>
          <p className="intro-copy">
            En Aromanza creemos que un aroma puede transformar un espacio
            y acompañar cada momento. Explorá nuestra propuesta y encontrá
            ese aroma que se siente como en casa.
          </p>
        </section>

        <section className="catalog" id="productos">
          <p className="eyebrow">AROMANZA</p>
          <h2>Nuestros productos</h2>
          <p>
            Muy pronto vas a encontrar acá nuestro catálogo de sahumerios,
            aromas y precios disponibles.
          </p>
        </section>
      </main>

      <footer id="contacto">
        <span className="footer-brand">Aromanza.</span>
        <span>Aromas para acompañar tus momentos.</span>
        <a href="https://www.instagram.com/aroma.a_speranza.ar/" target="_blank" rel="noreferrer">
          Seguinos en Instagram
        </a>
      </footer>
    </>
  );
}

export default App;

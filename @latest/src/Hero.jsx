import heroImage from "./assets/Hero image.jpg";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <div className="circle-text">
            Your Country's Best Tailor-Made Suits
          </div>
          <h1>Luxury Bespoke & Ready Made Suit | Shoes | Accessories</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <button className="cta-btn">Our Services</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Tailoring Example" />
        </div>
      </section>

      <section id="AboutUs" className="about">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros element
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;

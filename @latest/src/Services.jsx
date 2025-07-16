import shirts from "./assets/assorted dress shirts.jpg";
import oxfordBrownShoes from "./assets/oxford brown shoes.jpg";
import blackShoes from "./assets/Black leather shoes.jpg";
import bespokeSuit from "./assets/bespoke suit.jpg";
import blackSuit from "./assets/Black safari suit.jpg";
import modernSuit from "./assets/grey suit.jpg";
import Tie from "./assets/Tie.jpg";

function Services() {
  return (
    <section id="services" className="services">
      <div className="service-gallery">
        <div className="service-item">
          <img src={shirts} alt="Service 1" />
          <h2>Accessories</h2>
        </div>

        <div className="service-item">
          <img src={blackSuit} alt="Service 2" />
          <h2>Suits</h2>
        </div>

        <div className="service-item">
          <img src={blackShoes} alt="Service 3" />
          <h2>Shoes</h2>
        </div>
      </div>
    </section>
  );
}

export default Services;

import oxfordBrownShoes from "./assets/oxford brown shoes.jpg";
import blackShoes from "./assets/Black leather shoes.jpg";
import bespokeSuit from "./assets/bespoke suit.jpg";
import blackSuit from "./assets/Black safari suit.jpg";
import modernSuit from "./assets/grey suit.jpg";
import Tie from "./assets/Tie.jpg";
import Card from "./CatalogCards.jsx";

function Catalog() {
  return (
    <section id="Catalog" className="catalog">
      <div className="catalog-text">
        <h2>Catalog</h2>
        <p>
          Our catalog is a collection of our best products. Browse through our
          collection and find the perfect item for you.
        </p>
      </div>

      <div className="catalog-items">
        <Card
          image={bespokeSuit}
          title="Classic Bespoke Suit"
          price="R4,999.00"
        />
        <Card
          image={blackShoes}
          title="Leather Dress Shoes"
          price="R1,499.00"
        />
        <Card image={Tie} title="Silk Tie" price="R299.00" />
        <Card image={modernSuit} title="Modern Fit Suit" price="R5,499.00" />
        <Card
          image={oxfordBrownShoes}
          title="Formal Oxfords"
          price="R1,799.00"
        />
      </div>
    </section>
  );
}

export default Catalog;

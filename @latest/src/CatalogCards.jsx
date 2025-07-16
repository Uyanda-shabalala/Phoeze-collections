function Card({ image, title, price }) {
  return (
    <div className="catalog-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <div className="catalog-buttons">
        <button className="cta-btn">Buy Now</button>
        <button className="cta-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;

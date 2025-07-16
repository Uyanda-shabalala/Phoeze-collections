function Bookings() {
  return (
    <section id="bookings" className="Bookings">
      <div className="bookings-text">
        <h2>Bookings</h2>
        <p>Book your appointment today!</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
          <br />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
          <br />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />
          <br />

          <label htmlFor="service">Service:</label>
          <select id="service" name="service">
            <option value="Accessories">Accessories</option>
            <option value="Suits">Suits</option>
            <option value="Shoes">Shoes</option>
          </select>
          <br />

          <input type="submit" value="Book Now" />
        </form>
      </div>
    </section>
  );
}

export default Bookings;

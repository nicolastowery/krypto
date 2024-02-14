import "./index.css";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Discover and collect rare NFTs</h1>
        <div className="bodyText heroBodyText">
          The most secure marketplace for buying and selling unique crypto
          assets.
        </div>
        <div className="buttonContainer">
          <button className="sub-heading">Buy NFTs</button>
          <button className="sub-heading secondaryButton">Sell NFTs</button>
        </div>
      </div>
      <div>
        <img src="hero.png" className="heroImage" />
      </div>
    </section>
  );
}

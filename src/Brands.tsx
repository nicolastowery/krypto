import "./index.css";

export default function Brands() {
  return (
    <section className="brands">
      <h2 className="sub-heading">Featured On</h2>
      <div className="brandContainer">
        <img src="tech-crunch.png" className="brand" />
        <img src="fast-company.png" className="brand" />
        <img src="mit.png" className="brand" />
        <img src="forbes.png" className="brand" />
      </div>
    </section>
  );
}

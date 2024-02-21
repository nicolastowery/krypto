import { NavLink } from "react-router-dom";

export default function CTA() {
  return (
    <section className="cta">
      <h2 className="sub-heading ctaHeading">Are you ready?</h2>
      <div className="ctaTitle">be a part of the next big thing</div>
      <NavLink to="/pricing" className="sub-heading ctaButton">
        get started
      </NavLink>
    </section>
  );
}

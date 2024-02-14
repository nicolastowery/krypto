import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="sub-heading testimonialHeading">testimonials</h2>
      <div className="testimonialTitle">read what others have to say</div>
      <div className="testimonialCardContainer">
        <TestimonialCard
          imagePath="olivia.png"
          name="Olivia Cole"
          text="KRYPTO has enabled our business to sell NFTs 30% faster than before! The Analytic functionality is the best on the market."
        />
        <TestimonialCard
          imagePath="evan.png"
          name="Evan White"
          text="Before KRYPTO, I thought that NFTs were a fad. Now NFTs are the the largest revenue generation at our company. The Enterprise Plan offers tremendous bang for your buck!"
        />
        <TestimonialCard
          imagePath="jessica.png"
          name="Jessica Page"
          text="As an individual who loves buying and selling NFTs, KRYPTO's mobile app makes my side hustle that much easier. I have peace of mind knowing that KRYPTO's transactions are end-to-end encrypted."
        />
      </div>
    </section>
  );
}

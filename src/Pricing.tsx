import Hero from "./Hero";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <>
      <Hero
        col1={<h1 className="pricingHero">Simple pricing, no hidden fees</h1>}
      />
      <section className="pricingCardContainer">
        <PricingCard
          title="free"
          bodyText="Perfect for individuals that are interested in growing their NFT
            collection."
          buttonText="get started free"
          monthlyPrice={0}
          planFeatures={[
            "unlimited purchases",
            "customer support",
            "community forum access",
            "mobile app access",
            "24/7 vault access",
            { name: "Krypto Purchase Guaranteed™", link: "#" },
            "25 vault slots",
          ]}
        />
        <PricingCard
          title="basic"
          isMostPopular={true}
          bodyText="Ideal for individuals that are looking to kick-start their future side hustle."
          monthlyPrice={79}
          planFeatures={[
            "everything included with free",
            "basic analytics",
            "500 sales per month",
            "1500 vault slots",
          ]}
        />
        <PricingCard
          title="pro"
          bodyText="Great for small to medium sized companies with an established presence."
          monthlyPrice={399}
          planFeatures={[
            "Everything included with basic",
            "pro analytics",
            "5,000 sales per month",
            "20,000 vault slots",
            "vault migration services",
            "ability to advertise",
            "24/7 customer service",
          ]}
        />
        <PricingCard
          title="enterprise"
          buttonText="contact sales"
          bodyText="The most amount of features offered on any NFT market platform."
          planFeatures={[
            "Everything included with pro",
            "premium analytics",
            "unlimited sales per month",
            "unlimited vault slots",
            "personal customer success manager",
            "priority customer service",
          ]}
        />
      </section>
    </>
  );
}

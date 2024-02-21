import Hero from "./Hero";
import Brands from "./Brands";
import Ad from "./Ad";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import { useEffect } from "react";

export default function Home() {
  // Without this, links that are not from the header will not reroute to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero
        col1={
          <>
            <h1>Discover and collect rare NFTs</h1>
            <div className="buttonContainer">
              <button className="sub-heading">Buy NFTs</button>
              <button className="sub-heading secondaryButton">Sell NFTs</button>
            </div>
          </>
        }
        col2={<img src="hero.png" className="heroImage" />}
      />
      <Brands />
      <Ad
        heading="analytics"
        title="Built-In analytics to track your NFTs"
        text="Use our built-in analytics dashboard to pull valuable insights and
  monitor the value of your Krypto portfolio over time."
        buttonText="View our pricing"
        imagePath="analytics.png"
        link="pricing"
      />
      <Ad
        heading="get our app"
        title="browse NFTs from your smartphone"
        text="Our Krypto app is the easiest way to keep track of your assets when you’re on the go."
        buttonText="download on ios"
        imagePath="app.png"
        imageOnRight={true}
        link="pricing"
      />
      <Ad
        heading="24/7 access "
        title="sell your NFTs from anywhere at any time"
        text="With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time."
        buttonText="get started"
        imagePath="access.png"
        link="pricing"
      />
      <Testimonials />
      <CTA />

      <div className="circle3 circle"></div>
    </>
  );
}

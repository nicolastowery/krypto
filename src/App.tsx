import Ad from "./Ad";
import Brands from "./Brands";
import CTA from "./CTA";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

function App() {
  return (
    <>
      <div className="appContainer">
        <div className="app">
          <Header />
          <Hero />
          <Brands />
          <Ad
            heading="analytics"
            title="Built-In analytics to track your NFTs"
            text="Use our built-in analytics dashboard to pull valuable insights and
          monitor the value of your Krypto portfolio over time."
            buttonText="View our pricing"
            imagePath="analytics.png"
          />
          <Ad
            heading="get our app"
            title="browse NFTs from your smartphone"
            text="Our Krypto app is the easiest way to keep track of your assets when you’re on the go."
            buttonText="download on ios"
            imagePath="app.png"
            imageOnRight={true}
          />
          <Ad
            heading="24/7 access "
            title="sell your NFTs from anywhere at any time"
            text="With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time."
            buttonText="get started"
            imagePath="access.png"
          />
          <Testimonials />
          <CTA />
          <Footer />
          <div className="circle1 circle"></div>
          <div className="circle2 circle"></div>
          <div className="circle3 circle"></div>
        </div>
      </div>
      <div className="bottomGradient">
        Designed and developed by&nbsp;
        <a href="https://nicolastowery.com">Nicolas Towery.</a>
      </div>
    </>
  );
}

export default App;

import FooterNavList from "./FooterNavList";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo footerLogo">Krypto</div>
      <FooterNavList
        title="krypto"
        listItems={["home", "about", "Buy NFTs", "Sell NFTs"]}
      />
      <FooterNavList
        title="market"
        listItems={["Browse NFTs", "Buy NFTs", "Sell NFTs"]}
      />
      <FooterNavList
        title="contact"
        listItems={["Email", "LinkedIn", "Instagram", "Twitter"]}
      />
      <div className="newsLetterContainer">
        <div className="newsLetterTitle">join our newsletter</div>
        <div className="newsLetterInputContainer">
          <input
            type="text"
            className="newsLetterInput"
            placeholder="Email Address"
          />{" "}
          <button className="newsLetterButton sub-heading">submit</button>
        </div>
      </div>
    </footer>
  );
}

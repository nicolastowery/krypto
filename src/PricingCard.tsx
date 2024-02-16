interface PricingCardProps {
  title: string;
  isMostPopular?: boolean;
  buttonText?: string;
  bodyText: string;
  monthlyPrice?: number;
  planFeatures: (string | { name: string; link: string })[];
}

export default function PricingCard({
  title,
  isMostPopular,
  bodyText,
  buttonText,
  monthlyPrice,
  planFeatures,
}: PricingCardProps) {
  return (
    <div className={`pricingCard ${isMostPopular && "mostPopularPricingCard"}`}>
      <h2 className="sub-heading">
        {title}
        {isMostPopular && <span className="mostPopular">most popular</span>}
      </h2>
      <div className="bodyText pricingCardBodyText">{bodyText}</div>
      <button
        className={`sub-heading pricingCardButton ${
          isMostPopular && "mostPopularPricingCardButton"
        }`}
      >
        {buttonText ? buttonText : "get started"}
      </button>
      <div className="pricing">
        {monthlyPrice !== undefined && (
          <>
            <span className="price">${monthlyPrice}</span>
            <span className="billingFrequency">/Mo</span>
          </>
        )}
      </div>
      <div className="pricingBar"></div>
      <div>
        <ul className="pricingList">
          {planFeatures.map((p) => {
            if (typeof p === "string") {
              return <li className="pricingListItem">{p}</li>;
            } else {
              return (
                <li className="pricingListItem">
                  <a href={p.link} className="pricingListItem">
                    {p.name}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

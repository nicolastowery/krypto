import "./index.css";

interface AdProps {
  heading: string;
  title: string;
  text: string;
  buttonText: string;
  imagePath: string;
  imageOnRight?: boolean;
}

export default function Ad({
  heading,
  title,
  text,
  buttonText,
  imagePath,
  imageOnRight,
}: AdProps) {
  if (imageOnRight)
    return (
      <section className="ad">
        <div className="adTextContainer">
          <h2 className="sub-heading adHeading">{heading}</h2>
          <div className="adTitle">{title}</div>
          <div className="bodyText">{text}</div>
          <div className="adButtonContainer">
            <button className="sub-heading adButton">{buttonText}</button>
          </div>
        </div>
        <div>
          <img src={imagePath} className="adImage" />
        </div>
      </section>
    );
  return (
    <section className="ad">
      <div>
        <img src={imagePath} className="adImage" />
      </div>
      <div className="adTextContainer">
        <h2 className="sub-heading adHeading">{heading}</h2>
        <div className="adTitle">{title}</div>
        <div className="bodyText">{text}</div>
        <div className="adButtonContainer">
          <button className="sub-heading adButton">{buttonText}</button>
        </div>
      </div>
    </section>
  );
}
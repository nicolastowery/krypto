import "./index.css";
import { NavLink } from "react-router-dom";
interface AdProps {
  heading: string;
  title: string;
  text: string;
  buttonText: string;
  link: string;
  imagePath: string;
  imageOnRight?: boolean;
}

export default function Ad({
  heading,
  title,
  text,
  buttonText,
  link,
  imagePath,
  imageOnRight,
}: AdProps) {
  if (imageOnRight)
    return (
      <section className="ad">
        <div className="adTextContainer">
          <h2 className="sub-heading adTextHeading">{heading}</h2>
          <div className="adTextTitle">{title}</div>
          <div className="bodyText">{text}</div>
          <div className="adButtonContainer">
            <NavLink to={`/${link}`} className="sub-heading adButton">
              {buttonText}
            </NavLink>
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
        {/* change these class names */}
        <h2 className="sub-heading adTextHeading">{heading}</h2>
        <div className="adTextTitle">{title}</div>
        <div className="bodyText">{text}</div>
        <div className="adButtonContainer">
          <NavLink to={`/${link}`} className="sub-heading adButton">
            {buttonText}
          </NavLink>
        </div>
      </div>
    </section>
  );
}

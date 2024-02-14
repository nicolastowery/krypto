interface TestimonialCardProps {
  imagePath: string;
  name: string;
  text: string;
}

export default function TestimonialCard({
  imagePath,
  name,
  text,
}: TestimonialCardProps) {
  return (
    <div className="testimonialCard">
      <img src={imagePath} className="testimonialPhoto" />
      <h3 className="sub-heading testimonialName">{name}</h3>
      <div className="testimonialText">{text}</div>
    </div>
  );
}

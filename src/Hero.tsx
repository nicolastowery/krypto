import { ReactNode } from "react";
import "./index.css";

interface HeroProps {
  col1: ReactNode;
  col2?: ReactNode;
}

export default function Hero({ col1, col2 }: HeroProps) {
  return (
    <section className="hero">
      <div>{col1}</div>
      {col2 && <div>{col2}</div>}
    </section>
  );
}

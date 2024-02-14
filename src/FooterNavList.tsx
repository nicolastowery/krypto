interface FooterNavListProps {
  title: string;
  listItems: string[];
}

export default function FooterNavList({
  title,
  listItems,
}: FooterNavListProps) {
  return (
    <div className="footerNavList">
      <h2 className="footerNavListHeading">{title}</h2>
      <ul>
        {listItems.map((item) => {
          return <li className="footerNavListItem">{item}</li>;
        })}
      </ul>
    </div>
  );
}

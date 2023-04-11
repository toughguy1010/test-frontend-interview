import "../Card/card.css"
function Card({ title, descrition, imgLink, ...props }) {
  return (
    <div className="card-wrapper">
      <div className="card-title">{title}</div>
      <div className="card-content">
        <img src={imgLink} />
        <p className="card-description">
            {descrition}
        </p>
      </div>
    </div>
  );
}

export default Card;

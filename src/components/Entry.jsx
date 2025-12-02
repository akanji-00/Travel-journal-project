import marker from "../assets/images/logo.svg";

export default function Entry(props) {
  return (
    <article className="entry">
      <div className="entry-image-container">
        <img className="entry--img" src={props.img.src} alt={props.img.alt} />
      </div>

      <div className="entry-info">
        <div className="entry-info--title">
          <img className="marker-img" src={marker} alt="Location marker" />
          <span className="entry--country">{props.country}</span>
          <a
            href={props.googleMapsLink}
            className="entry--maps-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        <h2 className="entry-info--name">{props.title}</h2>
        <p className="entry-date">{props.date}</p>
        <p className="entry-description">{props.text}</p>
      </div>
    </article>
  );
}

import "../assets/scss/notFound.scss";

export default function NotFound() {
  return (
    <div className="NotFoundContainer">
      <h1 className="Error_code">404</h1>
      <h1 className="Error_text">Not Found</h1>
      <p className="Message">Nigga</p>
      <a href="/" className="HomeLink">Go Home</a>
    </div>
  );
}


import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Travel Journal Logo" className="header--logo" />
      <h1 className="header--title">my travel journal.</h1>
    </header>
  );
}

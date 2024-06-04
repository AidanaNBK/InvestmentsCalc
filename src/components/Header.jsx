import headerLogo from "../assets/investment-calculator-logo.png";
export default function Header(props) {
  return (
    <header id="header">
      <img src={headerLogo} alt="header logo"></img>
      <h1>{props.children}</h1>
    </header>
  );
}

import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <img
        className="koinx-logo-icon"
        loading="lazy"
        alt=""
        src="/1-koinx-logo@2x.png"
      />
      <div className="change-chameleon">
        <div className="crypto-taxes">Crypto Taxes</div>
        <div className="free-tools">Free Tools</div>
        <div className="imgmargin">
          <div className="resource-center">Resource Center</div>
        </div>
        <button className="getstartedbtn">
          <div className="get-started">Get Started</div>
        </button>
      </div>
      <div className="feedback-wrapper">
        <div className="feedback">Feedback</div>
      </div>
    </header>
  );
};

export default Navbar;

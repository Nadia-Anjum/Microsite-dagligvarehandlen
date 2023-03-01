import React from "react";
import "../styling/Footer.css";
import Logo from "../assets/daglivaren-logo.png";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 footer">
    <div className="container-fluid text-center text-md-left py-3">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h2 className="text-uppercase" style={{fontSize:"1.25rem"}}>Kontakt os</h2>
          <p>
            Kontakt os for yderligere information eller spørgsmål. Vi er altid
            klar til at hjælpe og besvare eventuelle henvendelser.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h2 className="text-uppercase" style={{fontSize:"1.25rem"}}>Menu</h2>
          <ul className="list-unstyled">
            <li>
              <a href="/">Forside</a>
            </li>
            <li>
              <a href="/PageTwo">Forbrugere</a>
            </li>
            <li>
              <a href="/PageThree">Levandører</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <a href="/">
            <img
              src={Logo}
              width="140"
              height="100"
              className="d-inline-block align-top"
              alt="logo"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import billede1 from "../assets/supermarket_1920.jpg";
import "../styling/Headersection.css";

function Headersection() {
  return (
    <section className="headerOne">
      <Row className="headerrow1">
        <Col md={8} className="forsidebilledeheader1">
          <div className="headerbillede">
            <img
              src={billede1}
              width="auto"
              height="auto"
              className="d-inline-block align-top img-fluid"
              alt="Forside billede"
            />
          </div>
        </Col>
        <Col md={4} className="forsideoverskriftheader1">
          <div className="headertoptekst animate__slideInRight animate__animated pt-5 px-3">
            <div className="headerhomeoverskrift mx-5">
              <h1>Info om madbranchen</h1>
            </div>
            <div className="headerhomeunderoverskrift mx-5">
              <p>
              På www.dagligvarehandlen.dk
                <br></br>
                kan du læse alt
                <br></br>
                om madindustrien
              </p>
            </div>

            <div className="forsideknapheader mx-5 mt-3 mb-3">
              <a href="https://dagligvarehandlen.dk/" className="forsideknap1">
                Læs mere her
              </a>{" "}
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Headersection;

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styling/Cards.css";
import { MdWorkOutline } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

function Cards() {
  return (
    <section className="cardsection py-5">
      <Container className="containercard my-5">
        <Row className="rowcard">
          <Col sm className="CardOne mt-2">
            <Card style={{ width: "20rem" }}>
              <TbWorld
                style={{ fontSize: "50px", margin: "55px auto 5px auto" }}
                className="cardsicon"
              ></TbWorld>
              <Card.Body>
                <Card.Title className="cardtitel">
                  Netværk er vejen frem
                </Card.Title>
                <Card.Text className="cardtekst">
                  Madindustrien er forbundet på tværs af produktion,
                  distribution og forbrug. Fra landmænd og producenter til
                  supermarkedskæder og restauranter, er fødevarekæden afhængig
                  af samarbejde og effektiv kommunikation for at opretholde
                  bæredygtighed og sikkerhed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="CardTwo mt-2">
            <Card style={{ width: "20rem", backgroundColor: "#DCEBF1" }}>
              <MdWorkOutline
                style={{ fontSize: "50px", margin: "55px auto 5px auto" }}
                className="cardsicon"
              ></MdWorkOutline>
              <Card.Body>
                <Card.Title className="cardtitel">Læg en solid plan</Card.Title>
                <Card.Text className="cardtekst">
                  At lægge en plan for sin virksomhed i madbranchen kræver
                  grundig forskning af markedet og konkurrenter, fastlæggelse af
                  en strategi og budget samt klare mål og målinger for succes.
                  Det er også vigtigt at være fleksibel og justere planen efter
                  behov.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="CardThree mt-2">
            <Card style={{ width: "20rem" }}>
              <BsPeople
                style={{ fontSize: "50px", margin: "55px auto 5px auto" }}
                className="cardsicon"
              ></BsPeople>
              <Card.Body>
                <Card.Title className="cardtitel">Kend dine kunder</Card.Title>
                <Card.Text className="cardtekst">
                  At kende sine kunder i madindustrien er afgørende for at kunne
                  tilbyde målrettede produkter og tjenester. Det kræver
                  markedsundersøgelser, analyse af forbrugeradfærd og feedback,
                  så virksomheden kan tilpasse sig kundernes behov og ønsker.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <br></br>
    </section>
  );
}

export default Cards;

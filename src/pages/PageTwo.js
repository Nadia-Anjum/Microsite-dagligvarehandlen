import "../styling/PageTwo.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import billede5 from "../assets/woman_1920.jpg";
import billede5lg from "../assets/woman_1920-2lg.jpg";
import billede5sm from "../assets/woman_1920-3.jpg";
import billede6 from "../assets/poser_1920.jpg";
import billede6lg from "../assets/poser_1920-2lg.jpg";
import billede6sm from "../assets/poser_1920-3.jpg";

import Card from "react-bootstrap/Card";
import "../styling/Cards.css";

export default function PageTwo() {
  return (
    <section>
      <section className="animate__fadeInDown animate__animated">
        <div className="headerpagetwooverskrift">
          <h1> Kend din målgruppe</h1>
        </div>
        <div className="undertekstpagetwo">
          <p>
            At kende sin målgruppe som virksomhed er afgørende for at kunne
            skabe og levere produkter og services, som er relevante og
            værdifulde for kunderne. Det gør det lettere at kommunikere og
            markedsføre sig effektivt, og det skaber en stærkere kunde- og
            brandloyalitet, hvilket er afgørende for succes.
          </p>
        </div>
      </section>
      {/*--- første sektion af 2 column øverst---*/}
      <Container className="py-5 ">
        <Row>
          <Col
            sm
            className="leftcontentcolumntwo1-col animate__fadeInLeft animate__animated"
          >
            <div className="leftcontentcolumntwo1">
              <h2 class="pb-4">Læs om forbrugere hos Dagligvarehandlen</h2>
              <p>
                På <a href="https://dagligvarehandlen.dk/">www.dagligvarehandlen.dk</a> kan man lære meget om{" "}
                <a href="https://dagligvarehandlen.dk/forbrugere">
                  kunderne i madbranchen
                </a>
                . Her kan man finde artikler og analyser om de seneste tendenser
                og udviklinger inden for madbranchen, såsom kundeadfærd,
                præferencer og forbrugsvaner.
              </p>
              <br></br>

              <p>
                Artiklerne kan give indsigt i, hvilke fødevarer og mærker, der
                er populære blandt kunderne, samt hvilke trends der rører sig
                inden for kost og ernæring. Analyserne kan også give viden om,
                hvilke salgs- og markedsføringsstrategier der er mest effektive,
                og hvordan man kan differentiere sig fra konkurrenterne.
                <br></br>
                En anden vigtig faktor i madbranchen er bæredygtighed, og på <a href="https://dagligvarehandlen.dk/">www.dagligvarehandlen.dk</a> kan man også finde artikler om, hvordan
                kundernes holdninger og adfærd i forhold til bæredygtighed
                påvirker valget af produkter og mærker.
                <br></br>
              </p>
            </div>
            <div className="knapleftcontenttwo mx-5">
              <a href="https://dagligvarehandlen.dk/">Læs mere her</a>
            </div>
          </Col>
          <Col sm>
            <div class="image-container mt-5 text-center animate__fadeInRight animate__animated">
              <picture>
                <source media="(min-width:650px)" srcset={billede5lg} />
                <source media="(max-width:465px)" srcset={billede5sm} />
                <img alt="En kvinde shopper" src={billede5} loading="lazy" />
              </picture>
            </div>
          </Col>
        </Row>
      </Container>

      {/*--- andet sektion af 2 column øverst---*/}
      <section className="sektionfarve2" style={{ backgroundColor: "" }}>
        <Container className="pb-5 pt-3">
          <Row className="rowleftcontent2-2">
            <Col sm>
              <div class="image-container2 mt-5 text-center animate__fadeInLeft animate__animated">
                <picture>
                  <source media="(min-width:650px)" srcset={billede6lg} />
                  <source media="(max-width:465px)" srcset={billede6sm} />
                  <img alt="Fiske handel" src={billede6} loading="lazy" />
                </picture>
              </div>
            </Col>
            <Col
              sm
              className="leftcontentcolumntwo1-col2 animate__fadeInRight animate__animated"
            >
              <div className="leftcontentcolumntwo2">
                <h2 class="pb-4 pt-4">Har du styr på forbrugerbeskyttelse?</h2>
                <p>
                  Forbrugerbeskyttelse i madindustrien er en vigtig faktor for
                  at sikre, at fødevarer er sikre og af høj kvalitet. Der er en
                  række regler og standarder, som fødevarevirksomheder skal
                  overholde for at beskytte forbrugernes sundhed og sikkerhed.
                  Nogle af de mest almindelige regler omfatter krav til
                  ingredienser, emballage, hygiejne og sikkerhedsprocedurer.
                  Disse regler er fastsat af myndighederne og kan variere fra
                  land til land.
                </p>
                <br></br>

                <p>
                  Desuden har forbrugere også rettigheder i forhold til at
                  returnere defekte eller forkerte varer og få refunderet deres
                  penge. Overholdelse af disse regler og standarder er vigtigt
                  for at opbygge tillid hos forbrugerne og for at undgå skader
                  eller tab af liv. Som ansvarlig for en fødevarevirksomhed kan
                  du sætte forbrugerbeskyttelse øverst på dagsordenen ved at
                  holde dig opdateret på <a href="https://dagligvarehandlen.dk/">www.dagligvarehandlen.dk</a>.
                  <br></br>
                </p>
              </div>
              <div className="knapleftcontenttwo">
                <a href="https://dagligvarehandlen.dk/">Læs mere her</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*--- flere columns og andet baggrund  ---*/}

      <section
        className="flerecolumn2page"
        style={{
          backgroundColor: "#023146",
        }}
      >
        <Container className="py-5 my-5">
          <div>
            <Row className="flerecolumnrow2page animate__fadeInUp animate__animated">
              <Col className="flerecol1">
                <div>
                  <h2
                    className="mb-4"
                    style={{
                      color: "#DCEBF1",
                      fontSize: "40px",
                      fontWeight: "bold",
                    }}
                  >
                    Sæt dig i kundens sted
                  </h2>
                </div>

                <div>
                  <p>
                    At sætte sig i kundens sted handler om at forstå deres behov
                    og ønsker for at kunne levere en bedre oplevelse. Det kræver
                    empati og en åben dialog for at kunne skabe tillid og
                    langvarige relationer med kunderne.
                  </p>
                </div>
              </Col>

              <Col className="mt-3 flerecol1">
                <div>
                  <h2
                    className="mb-4"
                    style={{
                      color: "#DCEBF1",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    01. Analysér din kunde
                  </h2>
                </div>

                <div>
                  <p>
                    Undersøg kundernes adfærd og præferencer ved at analysere
                    data og feedback som dem, du kan finde hos
                    Dagligvarehandlen.
                  </p>
                </div>
              </Col>

              <Col className="mt-3 flerecol1">
                <div>
                  <h2
                    className="mb-4"
                    style={{
                      color: "#DCEBF1",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    02. Følg med i tiden
                  </h2>
                </div>

                <div>
                  <p>
                    Vær opmærksom på trends og udviklinger i branchen for at
                    følge med i, hvad dine kunder finder interessant.
                  </p>
                </div>
              </Col>

              <Col className="mt-3 flerecol1">
                <div>
                  <h2
                    className="mb-4"
                    style={{
                      color: "#DCEBF1",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    03. Skab en dialog
                  </h2>
                </div>

                <div>
                  <p>
                    Skab en åben dialog med kunderne for at opbygge tillid og
                    forståelse. Tovejskommunikation er en nøglefaktor for
                    succes.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/*--- 3. sektion af 3 column ---*/}
      <section className="imgtext3sek2">
        <br></br>
        <div>
          <Container>
            <div className="overskrift2part3 mx-5 animate__fadeInLeft animate__animated">
              <h2>Brug alle tilgængelige kanaler</h2>
            </div>
          </Container>

          <Container className="containercard2 my-5">
            <Row className="rowcard2">
              <Col className="animate__fadeInLeft animate__animated">
                <Card
                  style={{
                    width: "17rem",
                    height: "21rem",
                    borderStyle: "none",
                    backgroundColor: "#DCEBF1",
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      className="cardtitel2"
                      style={{ fontSize: "40px", fontWeight: "bold" }}
                    >
                      Online dataindsam-ling <br></br> kan styrke <br></br>dit
                      firma
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="animate__fadeInLeft animate__animated">
                <Card style={{ width: "14rem", borderStyle: "none" }}>
                  <Card.Body>
                    <Card.Title
                      className="cardtitel2 text-start"
                      style={{ fontWeight: "bold" }}
                    >
                      Anvend den nyeste ekspertviden
                    </Card.Title>
                    <Card.Text className="cardtekst2">
                      På <a href="https://dagligvarehandlen.dk/">www.dagligvarehandlen.dk</a> er der
                      tilgængelig ekspertviden om den nyeste udvikling og
                      tendenser inden for madbranchen. Artikler, analyser og
                      rapporter giver indsigt i forbrugeradfærd,
                      konkurrencelandskabet og branchens udfordringer.
                    </Card.Text>
                  </Card.Body>
                  
                </Card>
              </Col>
              <Col className="animate__fadeInLeft animate__animated">
                <Card style={{ width: "14rem", borderStyle: "none" }}>
                  <Card.Body>
                    <Card.Title
                      className="cardtitel2 text-start"
                      style={{ fontWeight: "bold" }}
                    >
                      Læs artikler fra dygtige skribenter
                    </Card.Title>
                    <Card.Text className="cardtekst2">
                      Artiklerne på <a href="https://dagligvarehandlen.dk/">www.dagligvarehandlen.dk</a> er
                      velresearchede og velskrevne. De er skrevet af erfarne
                      journalister og eksperter, og giver en dybdegående indsigt
                      i de seneste tendenser og udviklinger inden for
                      madbranchen.
                    </Card.Text>
                  </Card.Body>
                 
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <br></br>
      </section>

      {/*--- 4. sektion---*/}
      <section
        className="sek4page2 mt-5"
        style={{ backgroundColor: "#DCEBF1" }}
      >
        <Container className="py-5">
          <Row>
            <Col
              md
              className="leftcontentcolumntwo1-colsek4 animate__fadeInLeft animate__animated"
            >
              <div className="leftcontentcolumntwo4">
                <h2 class="" style={{ fontWeight: "bold" }}>
                  Grib muligheden i en hård branche
                </h2>
                <p className="mt-3" style={{ fontWeight: "200" }}>
                  Hvordan klarer man sig i en branche så hård som madindustrien?
                </p>
                <br></br>
              </div>
              <div></div>
            </Col>
            <Col md className="animate__fadeInRight animate__animated">
              <div className="sk4tekstdelcolumn">
                <p>
                  Succes i madindustrien kræver en god forståelse af kundernes
                  behov og ønsker, konstant innovation og kvalitetskontrol,
                  effektiv markedsføring og et bæredygtigt fokus. Det er også
                  vigtigt at overholde de regler og standarder, der beskytter
                  forbrugerne og sikrer sikre og sunde fødevarer.
                  <br></br>
                </p>
                <div className="knapleftcontenttwosek4">
                  <a href="https://dagligvarehandlen.dk/forbrugere">Læs mere her</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}

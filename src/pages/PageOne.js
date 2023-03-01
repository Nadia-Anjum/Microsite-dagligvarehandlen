import "../styling/PageOne.css";
import Header from "../components/Headersection";
import Cards from "../components/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import billede2 from "../assets/store_1920.jpg";
import billede2lg from "../assets/store_1920-2lg.jpg";
import billede2sm from "../assets/store_1920-3.jpg";

import billede3 from "../assets/shopping_1920.jpg";
import billede3lg from "../assets/shopping_1920-2lg.jpg";
import billede3sm from "../assets/shopping_1920-3.jpg";

import billede4 from "../assets/load_1920.jpg";
import billede4lg from "../assets/load_1920-2lg.png";
import billede4sm from "../assets/load_1920-3.jpg";

export default function HomePage() {
  return (
    <section>
      {/*--- HEADER ---*/}
      <Header></Header>

      {/*--- CARDS ELEMENTER - del af sektion 2 ---*/}
      <Cards></Cards>

      {/*--- 2 COLUMN INDHOLD 1 - sektion 3 ---*/}
      <section>
        <Container className="py-5">
          <Row>
            <Col md className="animate__fadeInLeft animate__animated">
              <div className="kasseto">
                <picture>
                  <source media="(min-width:650px)" srcset={billede2lg} />
                  <source media="(max-width:465px)" srcset={billede2sm} />
                  <img
                    className="img-fluid mb-3"
                    alt="En butik"
                    src={billede2}
                    width="500"
                    loading="lazy"
                  />
                </picture>
              </div>
            </Col>
            <Col md className="animate__fadeInRight animate__animated m-auto">
              <div className="leftcontentcolumnone">
                <h2 class="pb-4">Drag inspiration fra Dagligvarehandlen</h2>
                <p>
                  Artiklerne på{" "}
                  <a href="https://dagligvarehandlen.dk/">
                    www.dagligvarehandlen.dk
                  </a>{" "}
                  indeholder vigtig viden om madbranchen. Artiklerne dækker alt
                  fra nye trends og innovationer i branchen til de seneste
                  resultater og tendenser inden for salg og marketing. Derudover
                  fokuserer artiklerne også på bæredygtighed og
                  fødevaresikkerhed, da disse emner er af stigende betydning for
                  både forbrugere og virksomheder i branchen.
                </p>
                <br></br>

                <p>
                  Artiklerne giver også indblik i de forskellige aktører i
                  fødevarekæden, herunder producenter, distributører og
                  forhandlere, og deres udfordringer og muligheder i branchen.
                  Endelig er artiklerne en kilde til inspiration og ideer til
                  nye produkter, markedsføring og strategier for virksomheder,
                  der ønsker at holde sig opdateret og konkurrencedygtige i den
                  dynamiske madindustri.
                  <br></br>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <br></br>
      </section>

      {/*--- SNEAK PEAK - OM OS - sektion 4 ---*/}

      <section className="sneakpeakos left-white">
        <div className="animate__zoomIn animate__animated mx-3">
          <div className="andetoverskriftersektion pt-5">
            <h2>Madindustrien er i rivende udvikling</h2>
          </div>

          <div className="ptekstforpageone pb-4">
            <p className="my-5 ptekstone">
              Madindustrien i Danmark har oplevet en flygtig udvikling de
              seneste år, hvor både forbrugerpræferencer og teknologiske
              fremskridt har ændret industrien markant. Der er øget fokus på
              bæredygtighed og sundhed og en stigende efterspørgsel efter
              plantebaserede alternativer. Samtidig har teknologi og
              digitalisering gjort det muligt for forbrugerne at købe mad på nye
              måder, i form af for eksempel online madkasser og levering direkte
              til døren. Disse trends stiller nye krav til virksomheder i
              branchen, der skal kunne tilpasse sig og innovere for at forblive
              relevante og konkurrencedygtige. Du kan følge med i tendenserne på{" "}
              <a href="https://dagligvarehandlen.dk/">
                www.dagligvarehandlen.dk
              </a>
              .{" "}
            </p>

            <div className="knapsnkeakpeak1 mb-4">
              <a
                href="https://dagligvarehandlen.dk/"
                className="knapsneakpeak2"
              >
                Læs mere her
              </a>{" "}
            </div>
          </div>
        </div>
      </section>

      {/*--- 2 COLUMN INDHOLD 2 - sektion 5 ---*/}

      <section className="tocolumnsection">
        <Container className="containersection2column py-5">
          <Row className="rowsection2column">
            <Col sm className="animate__fadeInLeft animate__animated">
              <div className="leftcontentcolumnone">
                <h2 class="pb-4">Brug viden til at skabe succes</h2>
                <p>
                  Kvalificeret viden er afgørende for succes i madindustrien.
                  Først og fremmest bør man grundigt undersøge sit marked og
                  kunderne for at identificere trends og efterspørgsel. Dette
                  kan opnås gennem markedsundersøgelser og analyse af
                  forbrugeradfærd.
                </p>
                <br></br>

                <p>
                  Det er også vigtigt at følge med i udviklingen i branchen,
                  herunder nye teknologier, bæredygtighed og fødevaresikkerhed.
                  En dyb forståelse af fødevarekæden og dens aktører er også
                  afgørende for succes, da samarbejde og effektiv kommunikation
                  er nøglen til at opretholde bæredygtighed og sikkerhed.
                  Endelig er det vigtigt at være åben for nye ideer og
                  innovationer og være villig til at tilpasse sig forandringer.
                  <br></br>
                  Ved at bruge kvalificeret viden på disse områder kan en
                  virksomhed i madindustrien skabe succes gennem målrettede
                  produkter og tjenester, markedsføring og strategier, der
                  passer til kundernes behov og ønsker. Alt ovenstående er gode
                  grunde til at klikke ind på Dagligvarehandlen og dykke ned i
                  deres informative artikler om madbranchen.
                </p>
              </div>
              <div className="knapleftcontentone">
                <a href="https://dagligvarehandlen.dk/">Læs mere her</a>
              </div>
            </Col>
            <Col
              sm
              className="rightcontentcolumn2 animate__fadeInRight animate__animated"
            >
              <div className="rightcontentcolumnone">
                <Row className="rowinside2">
                  <Col className="rightcontentcolumngrid">
                    <div className="kasseone">
                      <h4>Vækst virksomheden</h4>
                      <p>Læs om madbranchen </p>
                    </div>
                  </Col>
                  <Col className="rightcontentcolumngrid">
                    <div className="kasseto">
                      <picture>
                        <source media="(min-width:650px)" srcset={billede3lg} />
                        <source media="(max-width:465px)" srcset={billede3sm} />
                        <img
                          src={billede3}
                          width="100%"
                          className="img-fluid"
                          alt="en indkøbskurv med tomater"
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </Col>
                  <Col className="rightcontentcolumngrid">
                    <div className="kassetre">
                      <picture>
                        <source media="(min-width:650px)" srcset={billede4lg} />
                        <source media="(max-width:465px)" srcset={billede4sm} />
                        <img
                          src={billede4}
                          width="100%"
                          min-height="255px"
                          className="img-fluid"
                          alt="En hylde med varere"
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </Col>
                  <Col className="rightcontentcolumngrid">
                    <div className="kassefire">
                      <h4>Få styr på reglerne</h4>
                      <p>Kender du gældende lovgivning?</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <br></br>
      </section>
    </section>
  );
}

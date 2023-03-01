import "../styling/PageThree.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import billede7 from "../assets/shopping2_1920.jpg";
import billede7lg from "../assets/shopping2_1920-2lg.jpg";
import billede7sm from "../assets/shopping2_1920-3.jpg";

import billede8 from "../assets/shopping-mall_1920.jpg";
import billede8lg from "../assets/shopping-mall_1-2lg.jpg";
import billede8sm from "../assets/shopping-mall_1-3.jpg";

import billede9 from "../assets/business-man_1920.jpg";
import billede9lg from "../assets/business-man_1920-2lg.jpg";
import billede9sm from "../assets/business-man_1920-3.jpg";

import billede10 from "../assets/newspaper_1920.jpg";
import billede10lg from "../assets/newspaper_1920-2lg.jpg";
import billede10sm from "../assets/newspaper_1920-3.jpg";

import billede11 from "../assets/grocery_1920.jpg";
import billede11lg from "../assets/grocery_1920-2lg.jpg";
import billede11sm from "../assets/grocery_1920-3.jpg";

import billede12 from "../assets/bananas_1920.jpg";
import billede12lg from "../assets/bananas_1920-2lg.jpg";
import billede12sm from "../assets/bananas_1920-3.jpg";

export default function PageThree() {
  return (
    <section>
      {/*--- 1. sektion af  ---*/}
      <section>
        <div className="text-center animate__fadeInDown animate__animated py-3 px-3">
          <h1>Mangler du viden om leverandører i din branche?</h1>
        </div>
        <Container className="pt-3 pb-3 ">
          <Row className="billedeparpage3-row mx-5">
            <Col
              md
              className="animate__fadeInLeft animate__animated billedeparpage3-col"
            >
              <div className="billede1page3">
                <picture>
                  <source media="(min-width:650px)" srcset={billede7lg} />
                  <source media="(max-width:465px)" srcset={billede7sm} />
                  <img
                    src={billede7}
                    width="455px"
                    className="img-fluid my-3"
                    alt="En kvinde i tøj afdelingen, som shopper"
                    loading="lazy"
                  />
                </picture>
              </div>
            </Col>
            <Col md className="animate__fadeInRight animate__animated">
              <div className="billede2page3">
                <picture>
                  <source media="(min-width:650px)" srcset={billede8lg} />
                  <source media="(max-width:465px)" srcset={billede8sm} />
                  <img
                    src={billede8}
                    width="450px"
                    className="img-fluid my-3"
                    alt="Et center"
                    loading="lazy"
                  />
                </picture>
              </div>
            </Col>
          </Row>
        </Container>
        <div md className="mx-3">
          <p className="ptekstpagethree">
            <a href="https://dagligvarehandlen.dk/leverandoerer">Leverandører </a>

             i madindustrien spiller en afgørende rolle i at sikre
            kvaliteten. De forsyner producenter med råvarer, udstyr og
            tjenester, der er nødvendige for at opretholde en sund
            forsyningskæde. Valg af pålidelige og ansvarlige leverandører er
            afgørende for at opretholde en høj standard for fødevaresikkerhed og
            etisk forretningspraksis.
            <br></br>
            <div className="knapcontentpage3 mb-5 ">
              <div className="centerknap">
                <a href="https://dagligvarehandlen.dk/leverandoerer">
                  Læs mere her
                </a>
              </div>
            </div>
          </p>
        </div>
        <br></br>
      </section>

      {/*--- 2. sektion af 3 column ---*/}
      <section className="sek3page3">
        <Container className="mw-100 p-0">
          <Row className="m-auto flerefarverpage3">
            <Col
              className="colpage3 px-3 py-3"
              style={{
                backgroundColor: "#DCEBF1",
              }}
            >
              <div>
                <picture>
                  <source media="(min-width:650px)" srcset={billede9lg} />
                  <source media="(max-width:465px)" srcset={billede9sm} />
                  <img
                    src={billede9}
                    width="230px"
                    className="img-fluid billedepage3"
                    alt="Et kontor med medarbejder"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="h2page3sek3 mx-5">
                <h2 className="mx-5 "> Opdaterede artikler</h2>
              </div>
              <div>
                <p className="p3Page3">
                  På <a href="https://dagligvarehandlen.dk/">www.dagligvarehandlen.dk </a> 
                   finder man en række opdaterede
                  artikler om leverandører i fødevareindustrien, der dækker
                  emner som bæredygtighed, kvalitet og forsyningskædeansvar.
                  Artiklerne sætter fokus på vigtigheden af etik og ansvarlighed
                  i forsyningskæden og giver indsigt i, hvordan
                  dagligvarehandlen samarbejder med leverandører for at sikre en
                  bæredygtig og sikker fødevareforsyning.
                </p>
              </div>
            </Col>
            <Col className="colpage3 px-3 py-3">
              <div className="h2page3sek3-2 mx-4 mt-5">
                <h2> Indsigtsfulde analyser</h2>
              </div>
              <div>
                <p className="p3-2Page3-2">
                  Indsigtsfulde analyser af leverandører er afgørende for at
                  sikre en bæredygtig og etisk forsyningskæde i
                  fødevareindustrien. Analyser hos Dagligvarehandlen undersøger
                  faktorer som kvalitet, leveringssikkerhed og miljøpåvirkning,
                  og giver virksomheder mulighed for at træffe informerede
                  beslutninger om, hvilke leverandører der bedst opfylder
                  eventuelle behov. På den måde kan din virksomhed skabe mere
                  gennemsigtighed og ansvarlighed i forsyningskæden.
                </p>
              </div>
              <div>
                <picture>
                  <source media="(min-width:650px)" srcset={billede10lg} />
                  <source media="(max-width:465px)" srcset={billede10sm} />
                  <img
                    src={billede10}
                    width="230px"
                    className="img-fluid billedesek3page3"
                    alt="Aviser"
                    loading="lazy"
                  />
                </picture>
              </div>
            </Col>
            <Col
              className="colpage3 px-3 py-3"
              style={{
                backgroundColor: "#023146",
                color: "#fff",
              }}
            >
              <div>
                <picture>
                  <source media="(min-width:650px)" srcset={billede11lg} />
                  <source media="(max-width:465px)" srcset={billede11sm} />
                  <img
                    src={billede11}
                    width="230px"
                    className="img-fluid billedepage3"
                    alt="Det grønne afdeling"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="h2page3sek3 mx-5">
                <h2 className="mx-5"> Følg succeshistorierne</h2>
              </div>
              <div>
                <p className="p3Page3">
                  Det er vigtigt at holde øje med, hvilke leverandører der
                  klarer sig godt i fødevareindustrien, da dette kan have en
                  stor indvirkning på kvaliteten og bæredygtigheden af
                  fødevarerne. Ved at overvåge leverandørernes præstationer kan
                  du træffe informerede beslutninger om, hvem du skal arbejde
                  sammen med, og sikre en mere optimeret forsyningskæde.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <br></br>
      </section>

      {/*--- 3. sektion af 6 column ---*/}
      <section className="sek4page3 animate__fadeIn animate__animated">
        <br></br>
        <br></br>
        <Container className="pt-5 w-75">
          <Row className="rowflerecard">
            <Col md className="p-4">
              <div className="text-center">
                <h2 className="mb-4">Identificer dine behov</h2>
              </div>
              <div>
                <p>
                  At have styr på leverandøren i madindustrien er afgørende for
                  at sikre kvaliteten og bæredygtigheden af fødevarer.
                  Identificer de krav, du har til din leverandør, herunder
                  kvalitet, pris og leveringstid.
                </p>
              </div>
            </Col>
            <Col
              md
              className=" p-4"
              style={{
                backgroundColor: "#DCEBF1",
              }}
            >
              <div className="text-center">
                <h2 className="mb-4">Sammenlign leverandører</h2>
              </div>
              <div>
                <p>
                  Er du glad for den nuværende situation? Evaluer dine nuværende
                  leverandører for at vurdere, hvor godt de opfylder dine krav.
                  Overvej at tage kontakt til andre leverandører for at få et
                  sammenligningsgrundlag.
                </p>
              </div>
            </Col>
            <Col md className=" p-4">
              <div className="text-center">
                <h2 className="mb-4">Få en redegørelse</h2>
              </div>
              <div>
                <p>
                  Bed leverandører om at indsende en redegørelse om deres
                  virksomhed og produkter. Dette kan hjælpe dig med at
                  identificere eventuelle risici og sikre, at leverandøren
                  opfylder dine krav til kvalitet og bæredygtighed.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className=" pb-5 w-75 animate__fadeIn animate__animated">
          <Row className="rowflerecard">
            <Col
              md
              className=" p-4"
              style={{
                backgroundColor: "#DCEBF1",
              }}
            >
              <div className="text-center">
                <h2 className="mb-4">Besøg leverandøren</h2>
              </div>
              <div>
                <p>
                  Besøg leverandøren, og inspicer deres faciliteter og
                  processer. Dette vil give dig et bedre indtryk af deres evne
                  til at opfylde dine krav og sikre, at de overholder alle
                  regler og standarder.
                </p>
              </div>
            </Col>
            <Col md className=" p-4">
              <div className="text-center">
                <h2 className="mb-4">Hold løbende øje</h2>
              </div>
              <div>
                <p>
                  Efter at have indgået en aftale med en leverandør, skal du
                  hold øje med deres ydeevne regelmæssigt. Dette vil hjælpe dig
                  med at identificere eventuelle problemer og træffe
                  beslutninger om, hvorvidt du skal fortsætte samarbejdet.
                </p>
              </div>
            </Col>
            <Col
              md
              className="p-4"
              style={{
                backgroundColor: "#DCEBF1",
              }}
            >
              <div className="text-center">
                <h2 className="mb-4">Opbyg tillid</h2>
              </div>
              <div>
                <p>
                  Arbejd tæt sammen med dine leverandører og opbyg et
                  partnerskab baseret på tillid og gensidig forståelse. Dette
                  vil hjælpe dig med at sikre en pålidelig og bæredygtig
                  forsyningskæde og styrke din virksomheds omdømme i branchen.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <br></br>
      </section>

      {/*--- 4. sektion af 2 column ---*/}
      <section>
        <br></br>
        <Container className="py-5 px-4">
          <Row>
            <Col md className="animate__fadeInLeft animate__animated">
              <div className="kasseto">
                <picture>
                  <source media="(min-width:650px)" srcset={billede12lg} />
                  <source media="(max-width:465px)" srcset={billede12sm} />
                  <img
                    src={billede12}
                    width="450"
                    className="img-fluid"
                    alt="Bananer"
                    loading="lazy"
                  />
                </picture>
              </div>
            </Col>
            <Col md className="animate__fadeInRight animate__animated mt-1">
              <div className="leftcontentcolumnone page3sidstesektion">
                <h2 class="pb-4 text-start">Lær meget mere om aktuelle leverandører</h2>
                <p>
                  Vil du lære mere om de mest relevante leverandører? Artiklerne
                  på <a href="https://dagligvarehandlen.dk/">www.dagligvarehandlen.dk</a> fokuserer på de seneste trends og
                  nyheder inden for fødevareindustrien og detailhandlen. De
                  dækker emner som samarbejdsaftaler, lancering af nye
                  produkter, strategiske alliancer og implementering af
                  bæredygtighedsinitiativer. Artiklerne giver indblik i de
                  udfordringer, som leverandører står over for i en
                  konkurrencepræget branche og viser, hvordan de tilpasser sig
                  for at imødekomme kundernes skiftende krav og behov.
                </p>
                <div className="knapcontentpage3 mb-3 ">
                  <div className="centerknap">
                    <a href="https://dagligvarehandlen.dk/">Læs mere her</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br></br>
      </section>
    </section>
  );
}

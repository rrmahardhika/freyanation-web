import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import Credit from "../components/PhotoCredit";
import PrimaryButton from "../components/PrimaryButton";
import SocmedButton from "../components/SocmedButton";
import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        fade
        pause={false}
      >
        <Carousel.Item interval={7000}>
          <div id="carouselSlide-1" className={`carousel-image slide-1`}></div>
          <div className="carousel-panel-1">
            <Container>
              <div className="carousel-title">
                <h1>
                  {t("welcome")}
                  <br />
                  {t("to_fansite")}&nbsp;
                  <span style={{ color: "#F5ADCB" }}>
                    <TypeAnimation
                      sequence={[
                        "Freya Jayawardana",
                        2000,
                        "Freya JKT48",
                        2000,
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                    />
                  </span>
                </h1>
              </div>
              <div className="mt-4">
                <PrimaryButton text={t("btn_browse")} />
              </div>
              <div className="fn-jikoshokai-text">
                "{t("fry_jiko")}"
                <div className="fn-jikoshokai mt-1">
                  <hr
                    size={50}
                    style={{
                      width: "30px",
                      marginTop: "10px",
                      marginRight: "5px",
                      borderTop: "2px solid white",
                      opacity: 1,
                    }}
                  />
                  {t("jikoshoukai")}
                </div>
              </div>
            </Container>
          </div>

          <Credit
            creditName="amortentia."
            positionTop="10vw"
            positionRight="0px"
            link="https://x.com/amortentia0213/"
          />
          <div class="fn-logo-carousel px-4 py-3">
            {" "}
            <img
              alt=""
              src={require("../assets/images/icon/fn-logo.png")}
              width="35"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className="carousel-image slide-2"></div>
          <div className="carousel-panel-2">
            <Container>
              <div className="carousel-title">
                <h1
                  dangerouslySetInnerHTML={{ __html: t("know_freya_more") }}
                ></h1>
              </div>
              <div
                class="carousel-description mt-4"
                dangerouslySetInnerHTML={{ __html: t("profile_desc") }}
              ></div>
              <div className="mt-4">
                <PrimaryButton text={t("freya_full_profile")} />
              </div>
            </Container>
          </div>
          <Credit
            creditName="amortentia."
            positionLeft="0px"
            positionTop="200px"
            link="https://x.com/amortentia0213/"
          />
          <div class="fn-logo-carousel px-4 py-3">
            {" "}
            <img
              alt=""
              src={require("../assets/images/icon/fn-logo.png")}
              width="35"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className="carousel-image slide-3"></div>
          <div className="carousel-panel-3">
            <Container>
              <div className="carousel-title">
                <h1
                  dangerouslySetInnerHTML={{ __html: t("follow_freya") }}
                ></h1>
              </div>
              <div
                class="carousel-description mt-4"
                dangerouslySetInnerHTML={{ __html: t("follow_desc") }}
              ></div>
              <div className="ms-0">
                <div className="mt-5 d-inline-flex">
                  <Col className="p-2 ps-0">
                    <SocmedButton
                      logo="x-logo.png"
                      name="TWITTER / X"
                      account="@freya_jkt48"
                      url="https://x.com/freya_jkt48"
                    />
                  </Col>
                  <Col className="p-2 pe-0">
                    <SocmedButton
                      logo="ig-logo.png"
                      name="INSTAGRAM"
                      account="@jkt48.freya"
                      url="https://instagram.com/jkt48.freya"
                    />
                  </Col>
                </div>
                <div>
                  <div className="d-inline-flex">
                    <Col className="p-2 ps-0">
                      <SocmedButton
                        logo="tiktok-logo.png"
                        name="TIKTOK"
                        account="@freyajkt48"
                        url="https://tiktok.com/@freyajkt48"
                      />
                    </Col>
                    <Col className="p-2 pe-2">
                      <SocmedButton
                        logo="idnlive-logo.png"
                        name="IDN LIVE"
                        account="jkt48_freya"
                        url="https://www.idn.app/jkt48_freya"
                      />
                    </Col>
                  </div>
                </div>
                <div>
                  <div className="d-inline-flex">
                    <Col className="p-2 ps-0">
                      <SocmedButton
                        logo="sr-logo.png"
                        name="SHOWROOM"
                        account="JKT48_Freya"
                        url="https://www.showroom-live.com/r/JKT48_Freya"
                      />
                    </Col>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <Credit
            creditName="amortentia."
            positionTop="150px"
            positionRight="0px"
            link="https://x.com/amortentia0213/"
          />
          <div class="fn-logo-carousel px-4 py-3">
            {" "}
            <img
              alt=""
              src={require("../assets/images/icon/fn-logo.png")}
              width="35"
            />
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="fn-sec-timeline">
        <SectionTitle text="Timeline & Milestone" />{" "}
      </div>
    </>
  );
};

export default Home;

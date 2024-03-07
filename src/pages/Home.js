import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect, useRef } from "react";
import Credit from "../components/PhotoCredit";
import PrimaryButton from "../components/PrimaryButton";
import SocmedButton from "../components/SocmedButton";
import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import SectionTitle from "../components/SectionTitle";
import ScheduleTile from "../components/ScheduleTile";
import { Timeline } from "react-twitter-widgets";
import { useWindowSize } from "@uidotdev/usehooks";
import ArticleThumbnail from "../components/ArticleThumbnail";
import Milestone from "../components/Milestone";

const Home = () => {
  const size = useWindowSize();
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [todaySchedules, setTodaySchedules] = useState([]);
  const [upcomingSchedules, setUpcomingSchedules] = useState([]);
  const [showRecap, setShowRecap] = useState({
    total_show: 0,
    ended_show: [],
    ongoing_show: [],
  });

  const [articles, setArticles] = useState([]);
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    setTodaySchedules([
      {
        date: "2024-01-02",
        time: "16.00",
        event_name: "Aturan Anti Cinta",
        location: "Theater JKT48, F4 Sudirman",
        category: "SHOW THEATER",
        url: "https://jkt48.com",
      },
      {
        date: "2024-01-07",
        time: "17.00",
        event_name: "Aturan Anti Cinta",
        location: "Theater JKT48, F4 Sudirman",
        category: "SHOW THEATER",
        url: "https://jkt48.com",
      },
      {
        date: "2024-01-07",
        time: "17.00",
        event_name: "Video Call Bulan Desember",
        location: "Aplikasi Zoom",
        category: "VIDEO CALL",
        url: "https://jkt48.com",
      },
    ]);
    setUpcomingSchedules([
      {
        date: "2024-01-02",
        time: "16.00",
        event_name: "Aturan Anti Cinta",
        location: "Theater JKT48, F4 Sudirman",
        category: "SHOW THEATER",
        url: "https://jkt48.com",
      },
      {
        date: "2024-01-07",
        time: "17.00",
        event_name: "Aturan Anti Cinta",
        location: "Theater JKT48, F4 Sudirman",
        category: "SHOW THEATER",
        url: "https://jkt48.com",
      },
      {
        date: "2024-01-07",
        time: "17.00",
        event_name: "Video Call Bulan Desember",
        location: "Aplikasi Zoom",
        category: "VIDEO CALL",
        url: "https://jkt48.com",
      },
      {
        date: "2024-01-07",
        time: "17.00",
        event_name: "Aturan Anti Cinta",
        location: "Theater JKT48, F4 Sudirman",
        category: "EVENT OFF AIR",
        url: "https://jkt48.com",
      },
      {
        date: "2024-01-07",
        time: "17.00",
        event_name: "Video Call Bulan Desember",
        location: "Aplikasi Zoom",
        category: "VIDEO CALL",
        url: "https://jkt48.com",
      },
    ]);
    setShowRecap({
      total_show: 320,
      ended_show: [
        {
          show_name: "Pajama Drive",
          total_show: 100,
        },
        {
          show_name: "Tunas Dibalik Seragam",
          total_show: 130,
        },
        {
          show_name: "Aturan Anti Cinta",
          total_show: 140,
        },
        {
          show_name: "Tadaima Renaichuu",
          total_show: 180,
        },
      ],
      ongoing_show: [
        {
          show_name: "Pajama Drive",
          total_show: 130,
        },
        {
          show_name: "Ramune No Nomikata",
          total_show: 110,
        },
        {
          show_name: "Aturan Anti Cinta",
          total_show: 140,
        },
      ],
    });
    setArticles([
      {
        title: "Mencari Sosok Panutan Bersama Freya",
        date: "11 Februari 2024",
        category: "MEMBER",
        image:
          "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/792/2023/11/27/Freya-JKT48-460525366.jpg",
      },
      {
        title: "Contoh Judul Artikel - 2 Pada Artikel Terbaru",
        date: "11 Februari 2024",
        category: "MEMBER",
        image:
          "https://static.promediateknologi.id/crop/0x306:714x810/750x500/webp/photo/p2/119/2023/11/25/Screenshot_2023-11-25-12-55-06-92_1c337646f29875672b5a61192b9010f9-4206831338.jpg",
      },
      {
        title: "Contoh Judul Artikel - 2 Pada Artikel Terbaru",
        date: "11 Februari 2024",
        category: "MEMBER",
        image:
          "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/05/05/FotoJet-2023-05-05T124444832-2504022252.jpg",
      },
      {
        title: "Mencari Sosok Panutan Bersama Freya",
        date: "11 Februari 2024",
        category: "MEMBER",
        image:
          "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/792/2023/11/27/Freya-JKT48-460525366.jpg",
      },
      {
        title: "Contoh Judul Artikel - 2 Pada Artikel Terbaru",
        date: "11 Februari 2024",
        category: "KATEGORI A",
        image:
          "https://static.promediateknologi.id/crop/0x306:714x810/750x500/webp/photo/p2/119/2023/11/25/Screenshot_2023-11-25-12-55-06-92_1c337646f29875672b5a61192b9010f9-4206831338.jpg",
      },
      {
        title: "Contoh Judul Artikel - 2 Pada Artikel Terbaru",
        date: "11 Februari 2024",
        category: "KATEGORI B",
        image:
          "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/05/05/FotoJet-2023-05-05T124444832-2504022252.jpg",
      },
    ]);
    setMilestones([
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
      {
        date: "10 Februari 2024",
        title: "Promosi Tim",
        desc: "Freya dipromosikan ke dalam tim T, lorem ipsum dolor sit amet",
      },
    ]);
  }, []);

  function renderTodaySchedules() {
    let offset = -100;
    return (
      <Row className="flex-wrap">
        {todaySchedules.map((sch) => {
          offset += 100;
          return (
            <Col
              xs={12}
              md={12}
              lg={6}
              xl={4}
              data-aos="zoom-in"
              data-aos-delay={size.width <= 1000 ? 0 : offset}
            >
              <ScheduleTile schedule={sch}> </ScheduleTile>
            </Col>
          );
        })}
      </Row>
    );
  }

  function renderUpcomingSchedules() {
    let offset = -100;
    return (
      <Row className="flex-wrap">
        {upcomingSchedules.map((sch) => {
          offset += 100;
          return (
            <Col
              xs={12}
              md={12}
              lg={6}
              xl={4}
              data-aos="zoom-in"
              data-aos-delay={size.width <= 1000 ? 0 : offset}
            >
              <ScheduleTile schedule={sch}> </ScheduleTile>
            </Col>
          );
        })}
      </Row>
    );
  }

  function renderShowRecap() {
    return (
      <div className="p-4 mx-1">
        <div
          className="total-show-recap"
          data-aos="flip-left"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <div className="total-show-recap-no">{showRecap.total_show}</div>
          <div className="total-show-recap-text">Show Theater</div>
        </div>
        <div className="text-recap-subtitle py-2 mt-4">SUDAH SENSHUURAKU</div>
        <div className="d-flex" style={{ overflow: "auto" }}>
          {showRecap.ended_show.map((show) => {
            return (
              <div
                className="show-recap show-recap-ended my-2"
                data-aos="flip-left"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                <div className="show-recap-no">{show.total_show}</div>
                <div className="show-recap-text">{show.show_name}</div>
              </div>
            );
          })}
        </div>
        <div className="text-recap-subtitle py-2 mt-4">MASIH BERJALAN</div>
        <div className="d-flex" style={{ overflow: "auto" }}>
          {showRecap.ongoing_show.map((show) => {
            return (
              <div
                className="show-recap show-recap-ongoing my-2"
                data-aos="flip-left"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                <div className="show-recap-no">{show.total_show}</div>
                <div className="show-recap-text">{show.show_name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function renderArticles() {
    return (
      <Container fluid className={size.width <= 1000 ? "px-3" : "py-3 px-5"}>
        <Row>
          {articles.map((art) => {
            let offset = 0;
            return (
              <Col xs={12} md={6} lg={4}>
                <ArticleThumbnail article={art} />{" "}
              </Col>
            );
          })}
        </Row>
        <div className="text-center mt-3">
          <PrimaryButton text={t("btn_more_general")} />
        </div>
      </Container>
    );
  }

  function renderMilestone() {
    let offset = 0;
    return (
      <Container fluid className={size.width <= 1000 ? "px-3" : "py-3 px-5"}>
        <Row>
          {milestones.map((milestone) => {
            offset += 200;
            return (
              <Col
                xs={12}
                md={6}
                lg={4}
                xl={2}
                data-aos="fade-up"
                data-aos-delay={size.width <= 1000 ? 0 : offset}
              >
                <Milestone milestone={milestone} />
              </Col>
            );
          })}
        </Row>
        <div className="text-center mb-3">
          <PrimaryButton text={t("btn_more_general")} />
        </div>
      </Container>
    );
  }

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
            creditName="?"
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
        <Carousel.Item interval={7000}>
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
        <SectionTitle text="Timeline & Milestone" />
        <Container fluid>
          <Row>
            <Col
              md={2}
              xs={12}
              className="d-none d-md-block fn-timeline-image"
              data-aos="fade-right"
            >
              <img alt="" src={require("../assets/images/pic/timeline.webp")} />
              <Credit
                small="true"
                creditName="amortentia."
                positionTop="50px"
                positionLeft="0px"
                link="https://x.com/amortentia0213/"
              />
            </Col>
            <Col> {renderMilestone()}</Col>
          </Row>
        </Container>
      </div>
      <div className="fn-sec-schedule">
        <SectionTitle text="Jadwal Terdekat" />
        <Container fluid>
          <div className="schedule-title pt-4">HARI INI</div>
          <div className="schedule-content py-2">
            <div class="p-0">{renderTodaySchedules()}</div>
          </div>
        </Container>
        <Container fluid>
          <div className="schedule-title pt-4">YANG AKAN DATANG</div>
          <div className="schedule-content py-2">
            <div class="p-0">{renderUpcomingSchedules()}</div>
          </div>
        </Container>

        <Container fluid className="mt-5">
          <PrimaryButton text={t("btn_more")} />
        </Container>
      </div>
      <div className="fn-sec-socmed">
        <SectionTitle text={t("socmed_activity")} />
        <Container fluid>
          <Row className={size.width <= 1000 ? "py-4 px-2" : "py-4 px-1 mx-4"}>
            <Col lg={4} xs={12}>
              <div className="d-flex mb-4">
                <img
                  alt=""
                  src={require("../assets/images/icon/x-logo.png")}
                  width="40"
                />
                <div className="align-self-center ms-2 socmed-title">
                  X / Twitter
                </div>
              </div>
              <Timeline
                dataSource={{
                  sourceType: "url",
                  url: "https://twitter.com/freya_jkt48",
                }}
                options={{
                  height: "800",
                }}
              />
              <div className="pt-4 text-center">
                <PrimaryButton
                  text={t("btn_more_general")}
                  onClick={() => {
                    window.open("https://twitter.com/Freya_JKT48");
                  }}
                />
              </div>
            </Col>
            <Col lg={4} xs={12}>
              <div className="d-flex mb-4">
                <img
                  alt=""
                  src={require("../assets/images/icon/ig-logo.png")}
                  width="40"
                />
                <div className="align-self-center ms-2 socmed-title">
                  Instagram
                </div>
              </div>
            </Col>
            <Col lg={4} xs={12}>
              <div className="d-flex mb-4">
                <img
                  alt=""
                  src={require("../assets/images/icon/tiktok-logo.png")}
                  width="40"
                />
                <div className="align-self-center ms-2 socmed-title">
                  Tiktok
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="fn-sec-recap">
        <SectionTitle text={t("show_recap")} />
        <Container fluid>
          <Row>
            <Col md={8} xs={12}>
              {renderShowRecap()}
            </Col>
            <Col
              md={4}
              xs={12}
              className="d-none d-lg-block fn-recap-image"
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-offset="500"
            >
              <img alt="" src={require("../assets/images/pic/recap.webp")} />
              <Credit
                creditName="amortentia."
                positionTop="200px"
                positionRight="0px"
                link="https://x.com/amortentia0213/"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="fn-sec-video">
        <div className="d-flex mb-2">
          <SectionTitle text={t("intro_video")} align="center" />
        </div>
        <Container>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/kdLuPyPOv1A"
            title="JKT48 7th Generation Profile: Freya Jayawardana"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Container>
      </div>

      <div className="fn-sec-article">
        <SectionTitle text={t("new_article")} />
        {renderArticles()}
      </div>
    </>
  );
};

export default Home;

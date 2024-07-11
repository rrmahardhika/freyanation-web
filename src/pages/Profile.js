import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Credit from "../components/PhotoCredit";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const size = useWindowSize();
  const { t } = useTranslation();
  const biodataDetail = [
    {
      title: t("profile_detail.title.full_name"),
      value: "Freyanashifa Jayawardana",
    },
    {
      title: t("profile_detail.title.born"),
      value: t("profile_detail.value.born"),
    },
    {
      title: t("profile_detail.title.generation"),
      value: t("profile_detail.value.generation"),
    },
    {
      title: t("profile_detail.title.active_year"),
      value: t("profile_detail.value.active_year"),
    },
  ];

  function renderFullProfileBasedonLang() {
    const lang = JSON.parse(localStorage.getItem("lang"));
    switch (lang.value) {
      case "id":
        return (
          <div>
            Raden Rara Freyanashifa Jayawardana atau kerap dipanggil Freya
            adalah seorang member JKT48 generasi ke-7 yang lahir di Tangerang
            pada 13 Februari 2006. Freya diperkenalkan pertama kali sebagai
            member JKT48 pada event "Everyday, Kachuusha/UZA" Handshake Festival
            yang berlangsung pada 29 September 2018. Di JKT48, Freya menggunakan
            nama panggung Freya Jayawardana/Freya JKT48. Masuk ke JKT48 sebagai
            siswi Academy Class B (trainee), sempat gagal saat mengikuti ujian
            kenaikan kelas pada 25 Oktober 2018, namun akhirnya berhasil lulus
            dan resmi bergabung ke Academy Class A pada 18 Desember 2018. Selama
            menjadi siswi Academy Class A, Freya telah membawakan setlist Pajama
            Drive dan Boku no Taiyou. Selain itu, Freya juga dipercaya untuk
            menjadi Backup Member untuk menggantikan seniornya yang berhalangan
            tampil di setlist Idol no Yoake dan Seifuku no Me. Setelah hampir 2
            tahun, Freya akhirnya dipromosikan menjadi member reguler JKT48 dan
            tergabung ke dalam Team T pada 2 Juni 2020.
          </div>
        );
      case "en":
        return (
          <div>
            <p>
              <b>Raden Roro Freyanashifa Jayawardana</b> (Javanese: ꦫꦣꦺꦤ꧀ꦫꦫ
              ꦦ꦳ꦽꦪꦤꦯꦶꦥ꦳ꦗꦪꦮꦂꦝꦟ, Javanese pronunciation: Radèn Rårå
              Frèyanaśifajåyåwardhånå; born February 13, 2006), known
              professionally as <b>Freya Jayawardana</b> and mononymously as
              <b> Freya </b>, is an Indonesian singer and dancer, and a member
              of the seventh generation of JKT48 idol group, which was
              introduced in 2018
            </p>
            <p>
              Freyanashifa Jayawardana was born in Tangerang on February 13,
              2006. She is the first child of three siblings, with two younger
              brothers. She spent her childhood in Samarinda before deciding to
              move to Jakarta.
            </p>
            <p>
              Freya has shown an interest in dancing and singing since her
              childhood. After graduating from elementary school, Freya moved to
              Jakarta and immediately auditioned for JKT48, where she
              successfully passed the auditions. She began her career journey by
              joining JKT48 at the age of 12. Subsequent to that, on September
              29, 2018, Freya started as a trainee member of Academy Class B in
              JKT48, thus initiating her career in the entertainment industry.
              However, on October 25, 2018, she did not pass the initial stage
              of the Class B Academy Exam. As time went by, she was eventually
              promoted to Academy Class A on December 18, 2018. She also
              participated in the JKT48 Senbatsu Sousenkyo in 2019, but did not
              rank in the top 32. Later, on June 2, 2020, Freya joined JKT48's
              Team T. The following year, on March 12, 2021, she officially
              became a member of the seventh generation of JKT48 and transferred
              into JKT48 New Formation. Freya has a Jikoshoukai or
              self-introduction that goes, "Gadis koleris yang suka
              berimajinasi, terangi harimu dengan senyuman karamelku. Halo aku
              Freya!" ("A choleric girl who loves to imagine, light up your day
              with my caramel smile. Hello I'm Freya!"). She has a fairly loyal
              fanbase among JKT48 fans, known as Freyanation. In September 2022,
              she became a representation member of JKT48 and was also invited
              to speak at the Indonesia Millennial and Gen-Z Summit 2022 held in
              Jakarta. Freya became a viral meme sensation on the internet in
              2023. In August of the same year, she became a representation
              member of JKT48 at the Tokyo Idol Festival 2023, and also on an
              official visit at the AKB48 Theater.Also, she represented JKT48 at
              the AniManGaki 2023. In early 2024, Freya debuted on the movie
              industry with her appearance in the production of a horror movie
              entitled Kuasa Gelap, scheduled to commence shooting on February
              10, 2024
            </p>
            <p>
              Freya is known among JKT48 fans and the public for her good
              manners and positive attitude. She is admired for her kindness and
              willingness to interact with fans, particularly those with
              disabilities. Freya gained more popularity, notably on TikTok,
              after the viral video memes of her live broadcast on the SHOWROOM
              app. Also, her popularity extends to fashion styles, and
              e-commerce sectors, such as at the Shopee Live event, Freya, in
              collaboration with Zee or Christy, successfully created an uproar
              throughout Indonesia. Furthermore, her appointment as the
              ambassador for Shopee's 8th anniversary solidified her standing in
              the industry.
            </p>
            <p>
              Although at first, Freya was portrayed as having a childlike
              personality, which was evident in her relationship with her fellow
              seventh generation members of JKT48, she consistently in a good
              manners and positive attitude. Over time, as her career has
              progressed, her personality has evolved into a more mature image.
              Her close friendships with fellow JKT48 members, including Fiony
              Alveria, Reva Fidela, and others, are frequently portrayed as
              "best friends forever" in their appearances. Freya is known for
              her fondness of 90s songs and her relative unfamiliarity with
              current song trends.
            </p>
            <p>
              Stage Unit :
              <ul>
                <li>ACA1 (Pajama Drive) </li>
                Tenshi no Shippo
                <br />
                Kagami no Naka no Jean Da Arc
                <br />
                Pajama Drive
                <br />
                <li>J5 (Idol no Yoake)</li>
                Tengoku no Yarou
                <br />
                <li>T7 (Seifuku no Me)</li>
                Onna no Ko no Dairokkan
                <br />
                Mangekyou
                <br />
                <li>ACA2 (Boku no Taiyou) </li>
                Higurashi no Koi
                <br />
                <li>T-W2 (Fly, Team T)</li>
                Aozora Kataomoi
                <br />
                Hatsukoi Dash
                <br />
                <li>JKT1 (Renai Kinshi Jourei)</li>
                Tsundere!
                <br />
                Manatsu no Christmas Rose (Swap)
                <br />
                Heart Gata Virus (Swap)
                <br />
                Renai Kinshi Jourei (Swap)
                <br />
                Kuroi Tenshi (Swap)
                <br />
                <li>JKT2 (Seishun Girls)</li>
                Ame no Doubutsuen
                <br />
                Blue rose (Swap)
                <br />
                Fushidara na Natsu
                <br />
                <li>JKT3 (Seifuku no Me)</li>
                Onna no Ko no Dairokkan
                <br />
                Omoide Ijou (Swap)
                <br />
                <li>JKT4 (Ramune no Nomikata)</li>
                Nice to meet you!
                <br />
                <li>JKTSS (Banzai JKT48)</li>
                Oshibe to Meshibe to Yoru no Chouchou (Duet with Marsha
                Lenathea)
                <br />
                Gomen ne, Jewel (3rd Unit)
                <br />
                Hatsukoi yo, Konnichiwa (4th Unit) (Center)
                <br />
                Candy (6th Unit)
                <br />
                Glory days (8th Unit)
                <br />
                Rider (12th Unit) (Center)
                <br />
                Nage Kiss de Uchi Otose! (13th Unit)
              </ul>
            </p>
          </div>
        );
      default:
        break;
    }
  }

  return (
    <>
      <div className="fn-gallery-background fn-header-page">
        <div className="fn-overlay-black">
          <Credit
            creditName="amortentia"
            positionTop="10vw"
            positionRight="0px"
            link="https://x.com/amortentia0213/"
          />
          <div className="fn-page-description">
            <div
              className="fn-page-text-title"
              dangerouslySetInnerHTML={{ __html: t("profile_title") }}
            ></div>
            <div
              className="fn-page-text-subtitle"
              dangerouslySetInnerHTML={{ __html: t("profile_subtitle") }}
            ></div>
          </div>
        </div>
      </div>
      <Container fluid>
        <Row>
          <Col lg={9} md={12} className="p-0">
            <div
              className={`fn-page-content-bg ${
                size.width < 500 ? "p-2" : "p-4"
              }`}
            >
              <div className="fn-page-content p-4">
                <div className="fn-content-title mb-3">
                  <h3>{t("profile_head")}</h3>
                  <div className="fn-line-title"></div>
                </div>
                <Container fluid className="p-0">
                  <Row>
                    <Col lg={3} md={12}>
                      <div className="fn-biodata-panel px-3 py-2 mb-2">
                        <div className="fn-biodata-title py-3 text-center">
                          Biodata
                        </div>
                        <div className="fn-biodata-image">
                          <img
                            alt=""
                            src={require("../assets/images/pic/profile.webp")}
                          />
                          <Credit
                            creditName="amortentia."
                            positionTop="50px"
                            positionRight="0px"
                            small="true"
                            link="https://x.com/amortentia0213/"
                          />
                        </div>
                        <div className="fn-biodata-detail mt-3">
                          <Container fluid className="p-0">
                            {biodataDetail.map((detail) => {
                              return (
                                <Row className="py-2">
                                  <Col
                                    sm={4}
                                    xs={12}
                                    style={{ fontWeight: 600 }}
                                  >
                                    {detail.title}
                                  </Col>
                                  <Col
                                    sm={8}
                                    xs={12}
                                    dangerouslySetInnerHTML={{
                                      __html: detail.value,
                                    }}
                                  ></Col>
                                </Row>
                              );
                            })}
                          </Container>
                        </div>
                      </div>
                    </Col>
                    <Col lg={9} md={12} className="py-2 px-3 profile-desc">
                      {renderFullProfileBasedonLang()}
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} className="p-0">
            <div
              className={`fn-page-content-bg  ${
                size.width < 500 ? "p-2" : "ps-0 pe-4 py-4"
              }`}
              style={{ height: "100%" }}
            >
              <div className="fn-page-content p-3">
                <div className="fn-side-title mb-3">Galeri Freya</div>
                <div>
                  <div
                    className="fn-gallery-thumbnail mb-2"
                    style={{ maxHeight: "250px" }}
                    onClick={() => {
                      navigate("/detail-galery/1");
                    }}
                  >
                    <img
                      alt=""
                      src={require(`../assets/images/pic/schedule-page-bg.webp`)}
                      className="fn-gallery-image-title"
                    />
                    <div className="fn-gallery-image-panel p-2">
                      <div className="fn-gip-title">Instastory</div>
                      <div className="fn-gip-subtitle">240 Photos</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="fn-gallery-thumbnail"
                    style={{ maxHeight: "250px" }}
                    onClick={() => {
                      navigate("/detail-galery/1");
                    }}
                  >
                    <img
                      alt=""
                      src={require(`../assets/images/pic/recap.webp`)}
                      className="fn-gallery-image-title"
                    />
                    <div className="fn-gallery-image-panel p-2">
                      <div className="fn-gip-title">Judul Galery</div>
                      <div className="fn-gip-subtitle">240 Photos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
